---
title: RuoYi-Plus-Vue3前端实践
date: 2026-04-17T09:00:00Z
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

`auth.ts`是一个前端权限判断工具，作用是同意判断"当前用户有没有某权限/某角色"