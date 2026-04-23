---
title: RuoYi-Plus-Vue3前端实践
date: "2026-04-17T09:00:00Z"
lang: zh
duration: 8min
---

[[toc]]

基于若依后台管理的一套前端开发实践方法

# 一、Proxy

```js
const { proxy } = getCurrentInstance();
```

这里的`proxy`是从`getCurrentInstance()`里拿到的组件实例代理对象，它的主要作用是在`setup`里访问挂在实例上的全局方法/属性(例如 `app.config.globalProperties`里面的东西)

`app.config.globalProperties` 一个用于注册能够被应用内所有组件实例访问到的全局属性的对象。

用法：

```js
app.config.globalProperties.$xxx = ...
```

## 1. proxy.$model

`modal.ts`是一个统一封装的`Element Plus`弹窗/消息能力的工具模块，默认导出一个对象，供全局挂载后在业务里直接调用。

把`ElMessage` `ElMessageBox` `ElNotification` `ElLoading`做了一层统一入口

用法

```js
import { getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance() as any

// 1) 普通消息
proxy?.$modal?.msg('这是一条提示消息')

// 2) alert 弹窗
proxy?.$modal?.alert('操作成功')

// 3) notify 通知
proxy?.$modal?.notify('你有一条新通知')

// 4) confirm 确认框（Promise）
const onDelete = async () => {
  try {
    await proxy?.$modal?.confirm('确认删除这条数据吗？')
    proxy?.$modal?.msgSuccess?.('删除成功') // 如果你项目里还有 msgSuccess
  } catch {
    proxy?.$modal?.msg?.('已取消删除')
  }
}

// 5) prompt 输入框
const onRename = async () => {
  try {
    const { value } = await proxy?.$modal?.prompt('请输入新名称')
    proxy?.$modal?.msg(`你输入的是：${value}`)
  } catch {
    proxy?.$modal?.msg('你取消了输入')
  }
}

// 6) loading + closeLoading
const onRequest = async () => {
  try {
    proxy?.$modal?.loading('正在加载中...')
    // await apiCall()
  } finally {
    proxy?.$modal?.closeLoading()
  }
}
```

## 2. proxy.$cache

`cache.ts`统一封装浏览器缓存读写，给项目提供一套简洁的sessionStorage/localStorage操作API

`sessionCache`: 会话级缓存(页面/标签关闭后通常失效)
`localCache`: 本地持久缓存(不主动清就一直在)

用法

```js
const { proxy } = getCurrentInstance() as any

proxy?.cache?.session.set('token', 'abc123')
const token = proxy?.cache?.session.get('token')
```

## 3. proxy.$download

`download.ts` 下载现成文件（附件、zip、oss文件）

- 下载oss上的文件，使用 `/resource/oss/download`方法

源码

```js
  async oss(ossId: string | number) {
    const url = baseURL + '/resource/oss/download/' + ossId;
    downloadLoadingInstance = ElLoading.service({ text: '正在下载数据，请稍候', background: 'rgba(0, 0, 0, 0.7)' });
    try {
      const res = await axios({
        method: 'get',
        url: url,
        responseType: 'blob',
        headers: globalHeaders()
      });
      // 判断返回的是不是文件，然后决定“保存文件”还是“提示错误
      const isBlob = blobValidate(res.data);
      if (isBlob) {
        // 把返回数据包装成浏览器可保存的文件对象
        const blob = new Blob([res.data], { type: 'application/octet-stream' });
        // 保存文件
        FileSaver.saveAs(blob, decodeURIComponent(res.headers['download-filename'] as string));
      } else {
        this.printErrMsg(res.data);
      }
      downloadLoadingInstance.close();
    } catch (r) {
      console.error(r);
      ElMessage.error('下载文件出现错误，请联系管理员！');
      downloadLoadingInstance.close();
    }
  },
```

使用

```js
proxy?.$download?.oss(ossId);
```

- zip(url, name)方法 url业务下载接口路径 name前端保存到本地时候显示的文件名

示例： 在订单管理页面支持多选，点击下载附件压缩包，后端会把选中的订单的附件(图片/凭证)等达成一个zip包返回给前端 前端点击可下载

接口： /admin/order/attachment/zip GET 按订单ID列表打包附件并下载zip

请求参数：

orderIds 订单ID列表，中间用,分割字符串 例如 1001,1002,1003

includeInvoice: 是否包含发票附件 true/false

返回：

成功：application/aip 文件流

失败：JSON 例如 {code:500,msg:'订单不存在'}

前端调用：

```js
import { getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance() as any

const selectedOrderIds = ref<number[]>([])

const handleDownloadOrderZip = () => {
  if (!selectedOrderIds.value.length) {
    proxy?.$modal?.msgWarning('请先选择订单')
    return
  }

  // 1) 组装业务参数
  const orderIds = selectedOrderIds.value.join(',')
  const includeInvoice = true

  // 2) 组装“自定义URL”
  const url = `/admin/order/attachment/zip?orderIds=${orderIds}&includeInvoice=${includeInvoice}`

  // 3) 传给 zip(url, name)
  const fileName = `订单附件_${Date.now()}.zip`
  proxy?.$download?.zip(url, fileName)
}
```

源码：

```js
  // 传下载接口地址 + 想保存的文件名
  async zip(url: string, name: string) {
    // 拼接完整URL
    url = baseURL + url;
    downloadLoadingInstance = ElLoading.service({ text: '正在下载数据，请稍候', background: 'rgba(0, 0, 0, 0.7)' });
    try {
      const res = await axios({
        method: 'get',
        url: url,
        responseType: 'blob',
        headers: globalHeaders()
      });
      // 判断返回的是不是文件，然后决定“保存文件”还是“提示错误
      const isBlob = blobValidate(res.data);
      if (isBlob) {
        const blob = new Blob([res.data], { type: 'application/zip' });
        FileSaver.saveAs(blob, name);
      } else {
        this.printErrMsg(res.data);
      }
      downloadLoadingInstance.close();
    } catch (r) {
      console.error(r);
      ElMessage.error('下载文件出现错误，请联系管理员！');
      downloadLoadingInstance.close();
    }
  },
```

## 4. proxy.$auth

`auth.ts`是一个前端权限判断工具，作用是用来判断"当前用户有没有某权限/某角色"

核心函数源码

```js
/**
 * 从useUserStore()里面取 permissions数组， 判断当前用户是否拥有传入的permission
 * 如果权限列表里包含 *:*:*，视为拥有全部权限(通配)
 * 否则查看列表中是否有与传入字符串完全一致的权限项
 */
const authPermission = (permission: string): boolean => {
  const all_permission = '*:*:*';
  const permissions: string[] = useUserStore().permissions;
  if (permission && permission.length > 0) {
    return permissions.some((v) => {
      return all_permission === v || v === permission;
    });
  } else {
    return false;
  }
};

/**
 * 从useUserStore()里面取roles数组，判断当前用户是否拥有传入的role
 * 如果角色中包含admin, 视为超级管理员(通常等价于拥有所有角色相关判断)
 * 否则看是否有与传入字符串完全一致的角色
 */
const authRole = (role: string): boolean => {
  const super_admin = 'admin';
  const roles = useUserStore().roles;
  if (role && role.length > 0) {
    return roles.some((v) => {
      return super_admin === v || v === role;
    });
  } else {
    return false;
  }
};
```

开发时可使用的工具

```js
export default {
  // 验证用户是否具备某权限
  hasPermi(permission: string): boolean {
    return authPermission(permission);
  },
  // 验证用户是否含有指定权限，只需包含其中一个
  hasPermiOr(permissions: string[]): boolean {
    return permissions.some((item) => {
      return authPermission(item);
    });
  },
  // 验证用户是否含有指定权限，必须全部拥有
  hasPermiAnd(permissions: string[]): boolean {
    return permissions.every((item) => {
      return authPermission(item);
    });
  },
  // 验证用户是否具备某角色
  hasRole(role: string): boolean {
    return authRole(role);
  },
  // 验证用户是否含有指定角色，只需包含其中一个
  hasRoleOr(roles: string[]): boolean {
    return roles.some((item) => {
      return authRole(item);
    });
  },
  // 验证用户是否含有指定角色，必须全部拥有
  hasRoleAnd(roles: string[]): boolean {
    return roles.every((item) => {
      return authRole(item);
    });
  }
};
```

在后台管理里配合按钮显隐、菜单、路由、接口前的二次校验等：例如「只有拥有 system:user:add 权限才显示新增按钮」，或「只有 admin 或某角色才能进某页面」。

用法：

- 组合式JS

```js
const { proxy } = getCurrentInstance() as ComponentInternalInstance;
proxy?.$auth?.hasPermi('system:user:add');
```

- 在任意的.ts .vue` <script></script>` 里面

```js
import auth from "@/plugins/auth";

auth.hasPermi("forest:order:shipping"); // 单个权限
auth.hasPermiOr(["a:b:c", "d:e:f"]); // 满足其一即可
auth.hasPermiAnd(["a:b:c", "d:e:f"]); // 必须全部满足

auth.hasRole("admin"); // 单个角色
auth.hasRoleOr(["admin", "common"]); // 其一
auth.hasRoleAnd(["role1", "role2"]); // 全部
```

举例：RuoYi源码

```js
/**
 * 根据当前登录用户的权限或角色 从一批【动态路由】里筛选出当前用户能访问的路由 返回一个新数组res
 * routes 被筛选的数组
 * auth.hasPermiOr 从用户当前的权限数组里面查
 * auth.hasRoleOr 从用户当前的角色数组里面查
 */
export const filterDynamicRoutes = (routes: RouteRecordRaw[]) => {
  const res: RouteRecordRaw[] = [];
  routes.forEach((route) => {
    if (route.permissions) {
      if (auth.hasPermiOr(route.permissions)) {
        res.push(route);
      }
    } else if (route.roles) {
      if (auth.hasRoleOr(route.roles)) {
        res.push(route);
      }
    }
  });
  return res;
};
```

注意：页面中大量写的`<el-button v-hasPermi="['system:user:add']">新增</el-button>`
是 src/directive/permission/index.ts 里的指令，逻辑和 auth.ts 类似（都读 useUserStore），但不是调用 auth.ts 里的方法。
需要「在 JS 里判断布尔值」时用 auth / $auth；需要「无权限就删掉 DOM」时用 v-hasPermi / v-hasRoles。

## 5. svgicon.ts

```js
// 把 @element-plus/icons-vue 里导出的所有图标组件打成一个对象（名字 → 组件）。
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { App } from 'vue';

export default {
  // 插件安装时遍历这个对象，对每个 [名字, 组件] 调用 app.component(key, component)，把图标按 导出时的名字 注册成全局组件。
  install: (app: App) => {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  }
};
```

使用：一般不用在 `<script setup>` 里再 `import` 图标，因为已经全局注册了；若用 `<component :is="...">` 动态切换，把字符串名或组件引用对上全局注册名即可

```html
<template>
  <el-icon><Edit /></el-icon>
  <el-icon><Delete /></el-icon>
</template>
```

## 5. proxy.useDict

源码解读：

```js
// query API: 根据字典类型查询字典数据信息
export function getDicts(dictType: string): AxiosPromise<DictDataVO[]> {
  return request({
    url: '/system/dict/data/type/' + dictType,
    method: 'get'
  });
}

import { getDicts } from '@/api/system/dict/data';
import { useDictStore } from '@/store/modules/dict';
/**
 * 获取字典数据 传参 proxy?.useDict('order_status', 'order_shipping_type')
 */
export const useDict = (...args: string[]): { [key: string]: DictDataOption[] } => {
  const res = ref<{
    [key: string]: DictDataOption[];
  }>({});

  args.forEach(async (dictType) => {
    res.value[dictType] = [];
    // 从dict的pinia里面拿
    const dicts = useDictStore().getDict(dictType);
    if (dicts) {
      res.value[dictType] = dicts;
    } else {
      // 请求后端接口拿
      await getDicts(dictType).then((resp) => {
        res.value[dictType] = resp.data.map(
          (p): DictDataOption => ({ label: p.dictLabel, value: p.dictValue, elTagType: p.listClass, elTagClass: p.cssClass })
        );
        useDictStore().setDict(dictType, res.value[dictType]);
      });
    }
  });
  return res.value;
};
```

用处：适合 「系统数据字典维护、前后端共用同一套类型编码」 的枚举

举例：

- el-select

```js
<script setup lang="ts">
import { getCurrentInstance, reactive, toRefs } from 'vue';

const { proxy } = getCurrentInstance() as any;
const { order_status } = toRefs<any>(proxy.useDict('order_status'));

const form = reactive({ status: '' });
</script>

<template>
  <el-form-item label="订单状态">
    <el-select v-model="form.status" placeholder="请选择" clearable>
      <el-option v-for="d in order_status" :key="d.value" :label="d.label" :value="d.value" />
    </el-select>
  </el-form-item>
</template>
```

- 列表里带样式展示（el-tag + 字典）

```js
<script setup lang="ts">
import { getCurrentInstance, toRefs } from 'vue';

const { proxy } = getCurrentInstance() as any;
const { order_status } = toRefs<any>(proxy.useDict('order_status'));
</script>

<template>
  <el-table-column label="状态" prop="status">
    <template #default="{ row }">
      <el-tag v-for="d in order_status" v-show="d.value === row.status" :key="d.value" :type="d.elTagType as any">
        {{ d.label }}
      </el-tag>
    </template>
  </el-table-column>
</template>
```

- 分支（按字典值控制按钮是否出现）

```js
<script setup lang="ts">
import { getCurrentInstance, toRefs } from 'vue';

const { proxy } = getCurrentInstance() as any;
const { order_status } = toRefs<any>(proxy.useDict('order_status'));

defineProps<{ rowStatus?: string }>();
</script>

<template>
  <!-- 示例：仅当业务上约定某值为「待发货」时显示发货按钮，具体 value 以字典为准 -->
  <el-button v-if="rowStatus === order_status.find((d) => d.label === '待发货')?.value" type="primary">发货</el-button>
</template>
```

## 6. proxy.getConfigKey

根据参数键名请求 GET /system/config/configKey/{configKey}，拿到该参数在系统里配置的值

```js
import request from '@/utils/request';
import { ConfigForm, ConfigQuery, ConfigVO } from './types';
import { AxiosPromise } from 'axios';

// 查询参数列表
export function listConfig(query: ConfigQuery): AxiosPromise<ConfigVO[]> {
  return request({
    url: '/system/config/list',
    method: 'get',
    params: query
  });
}

// 查询参数详细
export function getConfig(configId: string | number): AxiosPromise<ConfigVO> {
  return request({
    url: '/system/config/' + configId,
    method: 'get'
  });
}

// 根据参数键名查询参数值
export function getConfigKey(configKey: string): AxiosPromise<string> {
  return request({
    url: '/system/config/configKey/' + configKey,
    method: 'get'
  });
}

// 新增参数配置
export function addConfig(data: ConfigForm) {
  return request({
    url: '/system/config',
    method: 'post',
    data: data
  });
}

// 修改参数配置
export function updateConfig(data: ConfigForm) {
  return request({
    url: '/system/config',
    method: 'put',
    data: data
  });
}

// 修改参数配置
export function updateConfigByKey(key: string, value: any) {
  return request({
    url: '/system/config/updateByKey',
    method: 'put',
    data: {
      configKey: key,
      configValue: value
    }
  });
}

// 删除参数配置
export function delConfig(configId: string | number | Array<string | number>) {
  return request({
    url: '/system/config/' + configId,
    method: 'delete'
  });
}

// 刷新参数缓存
export function refreshCache() {
  return request({
    url: '/system/config/refreshCache',
    method: 'delete'
  });
}
```

用法：

```js
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance() as any;

// Promise 写法
proxy?.getConfigKey('default.address').then((response) => {
  const value = response.data; // 字符串，例如默认地址
});

// async/await 写法
const res = await proxy?.getConfigKey('sys.oss.previewListResource');
const value = res.data;
```

## 7. proxy.updateConfigByKey

## 8. proxy.download

通用导出方法

源码：

```js
// 通用下载方法
export function download(url: string, params: any, fileName: string) {
  downloadLoadingInstance = ElLoading.service({ text: '正在下载数据，请稍候', background: 'rgba(0, 0, 0, 0.7)' });
  // prettier-ignore
  return service.post(url, params, {
      // 把 params 转成 application/x-www-form-urlencoded 表单格式（和常见若依导出一致）
      transformRequest: [
        (params: any) => {
          return tansParams(params);
        }
      ],
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      // 按二进制接收，便于当文件保存
      responseType: 'blob'
    }).then(async (resp: any) => {
      // 判断这段 blob 是不是「真正的文件」
      const isLogin = blobValidate(resp);
      if (isLogin) {
        const blob = new Blob([resp]);
        // 用你传入的 fileName 保存
        FileSaver.saveAs(blob, fileName);
      } else {
        // 若实际是 JSON 错误体（例如登录失效、业务码），走 else：读成文本 → JSON.parse → ElMessage.error 提示
        const blob = new Blob([resp]);
        const resText = await blob.text();
        const rspObj = JSON.parse(resText);
        const errMsg = errorCode[rspObj.code] || rspObj.msg || errorCode['default'];
        ElMessage.error(errMsg);
      }
      downloadLoadingInstance.close();
    }).catch((r: any) => {
      console.error(r);
      ElMessage.error('下载文件出现错误，请联系管理员！');
      downloadLoadingInstance.close();
    });
}
```

使用：

```js
/** 导出按钮操作 */
const handleExport = () => {
  let subData = JSON.parse(JSON.stringify(queryParams.value));
  delete subData.pageNum;
  delete subData.pageSize;
  proxy?.download(
    "admin/order/export",
    {
      ...subData,
    },
    `订单_${new Date().getTime()}.xlsx`,
  );
};
```

## 9. proxy.parseTime

```js
/**
 * 日期格式化
 * @param time 时间戳、日期字符串、日期对象、普通对象、数组
 * @param pattern 格式化模式 {y}-{m}-{d} {h}:{i}:{s}
 * @returns 格式化后的日期字符串
 */
export function parseTime(time: any, pattern?: string) {
  if (arguments.length === 0 || !time) {
    return null;
  }
  const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  // 1 new Date()
  // 2 new Date('2026-04-19 10:00:00')
  // 3 null
  // 4 普通对象 {}
  // 5 数组 []
  if (typeof time === 'object') {
    date = time;
  } else {
    // type为string && 整段字符串从头到尾只能有数字 0～9，不能有空格、负号、小数点、字母、横杠等
    // 1. '1713528000'
    // 2. '1024'
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      // 把纯数字字符串变成 number
      time = parseInt(time);
      // "2026-04-19"、"2026-04-19T12:30:00.000Z"
    } else if (typeof time === 'string') {
      time = time
        // 把所有 - 换成 /
        .replace(new RegExp(/-/gm), '/')
        // 把 T 换成 空格
        .replace('T', ' ')
        // 把小数点后紧跟的恰好 3 位数字  .000Z 去掉
        .replace(new RegExp(/\.[\d]{3}/gm), '');
    }
    // 「10 位时间戳乘 1000」
    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  const formatObj: { [key: string]: any } = {
    y: date.getFullYear(), // 年
    m: date.getMonth() + 1, // 月
    d: date.getDate(), // 日
    h: date.getHours(), // 时
    i: date.getMinutes(), // 分
    s: date.getSeconds(), // 秒
    a: date.getDay(), // 周几
  };
  // 扫描模板并替换
  // regex: /{(y|m|d|h|i|s|a)+}/g
  // (y|m|d|h|i|s|a)+ 表示 y、m、d、h、i、s、a 中的任意一个或多个
  // g 表示全局匹配
  // result: string, key: string 表示匹配到的结果和对应的键
  // 返回值: 替换后的字符串
  return format.replace(/{(y|m|d|h|i|s|a)+}/g, (result: string, key: string) => {
    let value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value];
    }
    // 在处理 「月、日、时、分、秒」 这类数字：若是 一位数（0～9），就在前面 补一个 '0'，显示成 01～09 这种两位数样式
    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }
    return value || 0;
  });
}
```

用法举例：

```js
<el-table-column label="创建时间" align="center" prop="createTime" width="180">
  <template #default="scope">
    <span>{{ proxy.parseTime(scope.row.createTime) }}</span>
  </template>
</el-table-column>
```

## 10. proxy.reconstructDateRange

快速给查询参数加上时间范围查询

源码：

```js
export const reconstructDateRange = (params: any, dateRange: any[], timeBeginName?: string, timeEndName?: string) => {
    const search = params;
    search.params = typeof search.params === 'object' && search.params !== null && !Array.isArray(search.params) ? search.params : {};
    dateRange = Array.isArray(dateRange) ? dateRange : [];
    search[timeBeginName] = dateRange[0];
    search[timeEndName] = dateRange[1];
    return search;
};
```

示例：

```js
<el-form-item label="创建时间">
  <el-date-picker
    class="serarchInput"
    v-model="dateRange"
    value-format="YYYY-MM-DD HH:mm:ss"
    type="daterange"
    range-separator="-"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
  ></el-date-picker>
</el-form-item>;

const dateRange = ref < any > ["", ""];

/** 查询订单信息列表 */
const getList = async () => {
  loading.value = true;
  const res = await listOrder(
    proxy?.reconstructDateRange(
      queryParams.value,
      dateRange.value,
      "createTimeBegin",
      "createTimeEnd",
    ),
  );
  orderList.value = res.rows;
  total.value = res.total;
  loading.value = false;
};
```

## 11. proxy.selectDictLabel

根据字典值value找出对应的显示文本label, 用于页面回显

例如后端拿回的order_status为1 字典映射过去表示 已支付

此时就可以用selectDictLabel把1转成 已支付

```js
export const selectDictLabel = (datas: any, value: number | string) => {
    if (value === undefined) {
        return '';
    }
    const actions: Array<string | number> = [];
    Object.keys(datas).some((key) => {
        if (datas[key].value == '' + value) {
            actions.push(datas[key].label);
            return true;
        }
    });
    if (actions.length === 0) {
        actions.push(value);
    }
    return actions.join('');
};
```

一个常见流程：

```js
const { order_status } = toRefs(proxy.useDict("order_status"));
```

页面里：

- 可以用 dict-tag/el-tag 显示状态
- 也可以 selectDictLabel(order_status.value, row.status) 显示纯文本

## 12. proxy.selectDictLabels

```js
/** 把“多个字典值”转换成“多个字典文本”，并按分隔符拼接返回 */
/** 举例：一个字段保存了 "1,2,3"，页面要显示 "标签A,标签B,标签C" */
export const selectDictLabels = (datas: any, value: any, separator: any) => {
    // 如果value是undefined或者空数组 就返回''
    if (value === undefined || value.length === 0) {
        return '';
    }
    // 如果value是数组 就转换为字符串 [1,2,3] -> 1,2,3
    if (Array.isArray(value)) {
        value = value.join(',');
    }
    const actions: any[] = [];
    const currentSeparator = undefined === separator ? ',' : separator;
    // 按分隔符分割value
    const temp = value.split(currentSeparator);
    Object.keys(value.split(currentSeparator)).some((val) => {
        let match = false;
        Object.keys(datas).some((key) => {
            if (datas[key].value == '' + temp[val]) {
                actions.push(datas[key].label + currentSeparator);
                match = true;
            }
        });
        if (!match) {
            actions.push(temp[val] + currentSeparator);
        }
    });
    // 最后去掉末尾多余分隔符并返回
    return actions.join('').substring(0, actions.join('').length - 1);
};
```

# 二、components

## 1. DictTag

这是一个通用的字典标签展示组件，作用是把字典值渲染成可读文本/el-tag

入参

- options: 字典选项数组 每项需要有 `value` `label` `elTagType` `elTagClass`
- value: 当前从后端拿到的值 支持 单值/都好字符串/数组
- showValue: 遇到未匹配值是否显示原值 默认`true`
- separator: 多值分隔符 默认,

示例

```js
<template>
  <el-table :data="userList">
    <el-table-column label="用户名" prop="userName" />
    <el-table-column label="角色">
      <template #default="{ row }">
        <dict-tag
          :options="roleOptions"
          :value="row.roleIds"
          separator=","
        />
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
const roleOptions = [
  { value: '1', label: '管理员', elTagType: 'danger', elTagClass: '' },
  { value: '2', label: '运营', elTagType: 'warning', elTagClass: '' },
  { value: '3', label: '客服', elTagType: 'success', elTagClass: '' }
]

const userList = [
  { userName: '张三', roleIds: '1,3' },
  { userName: '李四', roleIds: [2] }
]
</script>
```

显示效果会是：

- 张三：管理员（红色 tag） + 客服（绿色 tag）
- 李四：运营（黄色 tag）

如果你角色字段是用 | 分隔，比如 '1|3'，就改成：

```js
<dict-tag :options="roleOptions" :value="row.roleIds" separator="|" />
```

## 2. FileUpload

`FileUpload` 是一个面向业务场景的文件上传组件。基于若依框架，将 `ossId` 与文件的上传、回显、删除流程进行统一封装，形成完整的数据闭环。通过该组件，开发者仅需围绕 `ossId` 进行数据交互，无需重复实现文件类型与大小校验、上传状态管理、回显转换及删除同步等通用逻辑，从而显著降低重复开发成本并提升交付效率。

### 2.1 数据流

- 父传子(回显)：`modelValue`
- 子传父(更新)：`emit('update:modelValue', listToString(fileList))`
  返回格式:`"5673243,1256372,2346738"`

### 2.2 Props

- `modelValue: [String, Object, Array]`: 绑定值(常常是ossId字符串)
- `limit`：最大上传数量，默认`5`
- `fileSize`：单文件大小限制(MB), 默认`5`
- `fileType`：允许扩展名数组，默认`['doc','xls','ppt','txt','pdf','xlsx']`
- `isShowTip`：是否显示提示文案,默认`true`

### 2.3 使用方法
```js
<file-upload
  v-model="form.ossIds"
  :limit="5"
  :file-size="10"
  :file-type="['pdf', 'doc', 'docx', 'xlsx']"
/>

const form = reactive({
  // 回显时可给 "1,2,3"，组件会自动查详情展示
  // 上传/删除后也会持续更新这个字段
  ossIds: ""
});
```

## 2. iFrame
一个内嵌网页容器组件, 把外部页面/系统通过`iframe`嵌到当前后台页面里显示

使用：

- props: `src` 传入需要嵌套的页面地址

## 3. ImagePreview
统一做图片展示和预览，尤其是兼容若依里面常见得`逗号拼接图片地址`格式

它通常解决3件事

- 回显图片：页面上先展示一张（通常是第一张）缩略图
- 预览大图：点开后可打开预览，并支持在多张图之间切换
- 数据兼容：把传入得`src`（如`a.jpg, b.jpg, c.jpg`自）自动拆成预览数组，调用方不用自己处理

典型场景：

- 商品管理：主图+详情图+规格图，一眼看完整素材是否齐全
- 工单/售后：上传多张问题现场图，客服先看缩略图快速分拣
- 资质/合同审核：多页扫描件按缩略图展示，便于核对页数和顺序
- 相册/内容运营：文章配图批量管理，快速删除或替换某一张
- 物流签收/质检：同一订单多角度照片，缩略图便于横向对比
- OSS资源库：文件多图浏览，减少反复打开预览弹窗的操作

对后台系统来说，优势主要是：
- 降低点击成本（提升录入/审核效率）
- 降低误删误选概率（可见即所得）
- 更适合“多图并行比对”的业务流程

示例：

```js
// imageUrl需要是完整图片路径 而不是ossId
<el-table-column label="商品主图" align="center" prop="imageUrl">
  <template #default="scope">
    <image-preview :src="scope.row.imageUrl" :width="50" :height="50" />
  </template>
</el-table-column>
```

