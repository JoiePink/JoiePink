---
title: "Ruoyi-Plus-Vue3项目规范"
date: '2026-04-29T09:00:00Z'
lang: zh
duration: 18min
name: 项目规范
description: 约束本仓库的代码组织、开发流程与提交规范。当修改、重构、新增功能或做代码评审时使用，确保变更符合项目约定。
---

# Project Conventions

## 适用范围

- 当涉及新增功能、重构、修复缺陷、代码评审时，必须遵守本规范。

## 规则等级说明

- `MUST`：必须遵守。除非有明确业务或技术阻塞，并在需求/备注中记录原因。
- `SHOULD`：默认遵守。若场景不适用可调整，但需说明例外条件与原因。
- `MAY`：可选建议。用于提升一致性与可维护性，不作为阻塞项。

### 标注模板

```md
- [MUST] 规则内容...
- [SHOULD] 规则内容...
  - 例外：...
- [MAY] 规则内容...
```

## 术语规范

- 本文档统一使用“标准列表页”作为主术语，指包含搜索区、表格区、分页区的页面。
- “列表页”“分页列表”等表述视为“标准列表页”的同义词，后续新增规则请统一写为“标准列表页”。

## 开发约定

- [MUST] 新增接口统一放在 `src/api`，禁止在页面内直接散落请求逻辑。
- [MUST] 消息提示统一使用 `@/plugins/modal.ts` 的封装能力，不重复造提示方法。
- [MUST] 用户权限相关逻辑优先在 `@/plugins/auth.ts` 中查找是否已有封装方法；若已有则直接复用。
- [MUST] 会话级缓存与本地缓存统一使用 `@/plugins/cache.ts`，避免直接散落操作浏览器存储。
- [MUST] 优先复用 `src/plugins/index.ts` 已挂载到 `app.config.globalProperties` 的全局方法；仅在现有封装无法满足需求时再新增实现。
- [SHOULD] 页面模板默认使用 `<div class="p-2">` 作为根容器以保持统一间距。
  - 例外：全屏页面或特殊布局可调整，但需保持视觉一致性。
- [SHOULD] 页面级搜索表单使用统一搜索动画：在搜索区域外层使用 `transition` 并绑定 `proxy?.animate.searchAnimate.enter/leave`。
  - 例外：页面无搜索区或产品明确要求禁用动画。
- [SHOULD] 搜索 `el-form` 外层包裹 `<el-card shadow="hover">`，统一页面风格与卡片视觉层级。
  - 例外：页面已在更外层卡片容器中，避免重复嵌套。
- [MUST] 标准列表页（含搜索区、表格、分页）遵循下方“标准列表页约定”。
- [SHOULD] 公共能力优先沉淀到 `src/components` 或 `src/utils`，避免重复实现。
- [MUST] 仅修改与需求相关文件，不顺手重构无关模块。
- [MUST] 保持现有代码风格与命名习惯一致。


## 全局方法优先复用（常用清单）

- 以下为常用全局方法参考清单，优先复用；以 `src/plugins/index.ts` 实际挂载内容为准。
- `parseTime(time, pattern?)`：统一日期格式化方法，支持时间戳/字符串/Date 等输入，避免页面内重复写时间转换逻辑。
- `getConfigKey(configKey)`：按配置键读取系统参数值（接口 `/system/config/configKey/{key}`），用于读取后端配置开关或业务参数。
- `updateConfigByKey(key, value)`：按配置键更新系统参数值（接口 `/system/config/updateByKey`），用于管理端配置项快速更新。
- `download(url, params, fileName)`：统一文件下载入口，导出能力优先通过该方法实现。
- `useDict(...dictTypes)`：统一获取字典数据，状态/枚举展示优先通过字典封装（如 `dict-tag`）处理。
- `reconstructDateRange(params, dateRange, beginKey, endKey)`：统一把时间范围注入查询参数，列表页日期筛选优先复用该方法。

## 命名速查表

- 搜索表单实例：`queryFormRef`
- 弹窗/编辑表单实例：`formRef`
- 表格实例：`tableRef`
- 列表查询方法：`getList`
- 搜索方法：`handleQuery`
- 重置搜索方法：`resetQuery`
- 导出方法：`handleExport`
- 搜索显隐状态：`showSearch`
- 查询参数对象：`queryParams`
- 时间范围状态：`dateRange`

## 标准列表页约定

默认场景：主列表页包含搜索区、表格区、分页区时，优先按以下模板实现。

### 页面结构

- [MUST] 搜索表单使用 `<el-form ref="queryFormRef" :model="queryParams" :inline="true" ...>` 固定骨架，`label-width` 按业务场景设置（如 `100`、`120`）。
- [MUST] 搜索区按钮同时存在“搜索”和“重置”，分别绑定 `@click="handleQuery"` 与 `@click="resetQuery"`。
- [SHOULD] 列表主体（表格 + 分页 + 工具栏）使用 `<el-card shadow="never">` 包裹。
  - 例外：页面整体容器已提供同等视觉层级时可省略。
- [MUST] 同时具有搜索区和列表区的页面定义 `const showSearch = ref(true)`，用于控制搜索区显隐。
- [MUST] 当页面同时具有搜索栏和列表区时，列表工具栏包含 `<right-toolbar v-model:showSearch="showSearch" @queryTable="getList" />` 固定写法。
- [SHOULD] 表格存在可展开行（`type="expand"`）时，工具栏提供“展开/折叠”总控按钮。
- [SHOULD] 分页列表/列表页提供“导出”按钮。
  - 例外：业务明确禁止导出、只读看板、或数据敏感场景。

最小示例（工具栏）：

```vue
<el-button type="info" plain icon="Sort" @click="toggleExpand">展开/折叠</el-button>
<el-button type="warning" plain icon="Download" @click="handleExport">导出</el-button>
<right-toolbar v-model:showSearch="showSearch" @queryTable="getList" />
```

### 搜索交互

- [MUST] 搜索区内 `el-input` 带 `clearable`，并绑定 `@keyup.enter="handleQuery"`。

### 时间范围与入参

- [SHOULD] 时间范围控件使用 `el-date-picker` 的 `daterange`，配置为 `value-format="YYYY-MM-DD"`、`range-separator="-"`、`start-placeholder="开始日期"`、`end-placeholder="结束日期"`。
- [SHOULD] 时间范围状态定义 `const dateRange = ref<any>(['', ''])`。
- [MUST] 列表请求中的日期参数通过 `proxy?.reconstructDateRange(queryParams.value, dateRange.value, beginKey, endKey)` 注入，不手写拆分逻辑。
- [MUST] `beginKey` 与 `endKey` 按接口实际字段动态传入（如 `createTimeBegin`、`createTimeEnd`），不同模块字段名可不同。

### 查询方法命名与实现

- [MUST] 页面分页查询方法命名为 `getList`。
- [MUST] `handleQuery` 写法：先重置页码 `queryParams.pageNum = 1`，再调用 `getList()`。
- [MUST] `resetQuery` 写法：先执行 `queryFormRef.resetFields()`，若页面定义了 `dateRange` 再重置 `dateRange`，最后调用 `handleQuery()`。
- [MUST] 导出方法命名为 `handleExport`，写法为：复制查询参数、删除 `pageNum/pageSize` 后调用 `proxy?.download(exportUrl, { ...subData }, fileName)`。
- [MUST] `proxy?.download` 的导出接口地址 `exportUrl` 与导出文件名 `fileName` 按业务动态定义（如 `admin/order/export`、`订单_${new Date().getTime()}.xlsx`）。

### 表格列、字典与分页约定

- [SHOULD] `el-table` 普通字段列使用统一格式：`<el-table-column label="字段名" align="center" prop="field" />`；`width` 按业务需要增减。
- [MUST] 需要展示扩展信息时，展开列外层结构固定为：
  - `<el-table-column type="expand">`
  - `<template #default="scope">`
  - 外层容器（如 `<div style="padding:10px 20px;">`）
- [MAY] 展开内容内部可按业务自由组合（如二级 `el-table`、`el-descriptions` 等）。
- [MUST] 后端返回状态值需要映射字典文案时，使用框架组件：`<dict-tag :options="dictOptions" :value="statusValue" />`；其中 `:options`、`:value` 按业务动态传入。
- [MUST] 字典数据通过以下方式获取并解构：`const { proxy } = getCurrentInstance() as any;` 与 `const { dictA, dictB } = toRefs<any>(proxy?.useDict('dictA', 'dictB'));`。
- [SHOULD] 存在操作列时，列定义使用：`<el-table-column label="操作" align="center" fixed="right" class-name="small-padding fixed-width">`。
- [SHOULD] 操作列内按钮采用 `link` 风格，`type`、`icon`、`v-hasPermi` 按业务权限与动作动态配置。
- [MUST] 分页组件保留固定写法：`<pagination v-show="total > 0" :total="total" v-model:page="queryParams.pageNum" v-model:limit="queryParams.pageSize" @pagination="getList" />`。
- [MUST] 前后端分页参数字段统一为 `pageNum` 与 `pageSize`。

最小示例（导出方法）：

```ts
const handleExport = () => {
  const subData = { ...queryParams.value };
  delete subData.pageNum;
  delete subData.pageSize;
  proxy?.download(exportUrl, { ...subData }, fileName);
};
```

## 目录约定（精简）

- `src/api`：接口请求与封装
- `src/views`：页面级视图
- `src/components`：可复用公共组件
- `src/router`：路由配置
- `src/store`：全局状态管理
- `src/utils`：通用工具方法
- 完整目录说明见 `docs/project-structure.md`

## 反例与例外清单

- 纯详情页、统计看板或非分页场景，不要求使用 `getList` 作为查询方法命名。
- 页面不包含搜索区时，可省略 `showSearch` 与 `<right-toolbar ... />`。
- 后端未提供导出接口或业务明确禁止导出时，可不实现 `handleExport` 与导出按钮。
- 页面不包含时间范围筛选时，可省略 `dateRange` 与 `reconstructDateRange` 注入逻辑。
- 页面未使用状态字典字段时，可不引入 `useDict` 与 `dict-tag`。
- 表格不存在展开行（`type="expand"`）时，不要求提供“展开/折叠”总控按钮。
- 单纯展示型静态页（无表格/无表单/无交互）可不套用标准列表页模板。

## 提交前检查

- [ ] 已通过 `lint` / 类型检查，且无新增告警。
- [ ] 列表页核心流程已本地验证：搜索、重置、分页、导出（如有）。
- [ ] 日期筛选入参已验证：`reconstructDateRange` 的 `beginKey/endKey` 与接口字段一致。
- [ ] 字典映射已验证：状态字段使用 `dict-tag`，`options/value` 绑定正确。
- [ ] 权限与操作已核对：操作按钮 `v-hasPermi` 配置正确，无越权可见或误隐藏。
- [ ] 已优先复用现有封装：提示走 `modal`、缓存走 `cache`、权限走 `auth`。
- [ ] 变更范围已核对：仅修改需求相关文件，无无关重构。
- [ ] 文档与配置变更已同步（如接口字段、页面约定、Skill 规则）。
