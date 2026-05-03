---
title: "Ruoyi-Plus-Vue3项目规范"
date: '2026-04-29T09:00:00Z'
lang: zh
duration: 18min
name: 项目规范
description: 约束本仓库的代码组织、开发流程与提交规范。当修改、重构、新增功能或做代码评审时使用，确保变更符合项目约定。
---

请严格按以下技能实现标准列表页 CRUD，不要偏离命名与流程：
- 必须遵循：`project-conventions`、`list-page-pagination-query`、`list-page-add-edit`、`list-page-delete-action`
- 如参数缺失，先提问，不要猜测

【修改范围】
- 仅允许修改：`src/views/xxx/index.vue`、`src/api/xxx/index.ts`
- 禁止改动无关模块

【基础信息】
- 页面路径：`src/views/xxx/index.vue`
- API 文件：`src/api/xxx/index.ts`
- 列表接口：`listXxx`
- 详情接口：`getXxx`
- 新增接口：`addXxx`
- 修改接口：`updateXxx`
- 删除接口：`delXxx`
- 导出接口：`xxx/export`（没有就写“无”）

【权限字符】
- 新增：`xxx:add`
- 修改：`xxx:edit`
- 删除：`xxx:remove`
- 导出：`xxx:export`

【查询参数 queryParams】
- 固定包含：`pageNum/pageSize`
- 其他参数：...
- 时间范围：
  - 状态名：`dateRange`
  - beginKey：`createTimeBegin`
  - endKey：`createTimeEnd`
  - 必须使用 `proxy?.reconstructDateRange`

【列表列配置】
- 字段1：prop=..., 显示=text/tag/switch/image/custom, 字典=...
- 字段2：...
- 操作列：包含 修改、删除（都要权限控制）

【新增/修改弹窗】
- 共用弹窗
- 标题：addTitle=“新增xxx”，editTitle=“修改xxx”
- 表单字段 + 规则 + 转换逻辑（逐字段给）
- submitForm 固定流程：validate -> loading -> add/update -> msgSuccess -> close -> getList -> finally 复位loading

【删除逻辑】
- `handleDelete(scope.row)` 固定流程：
  confirm -> delApi(id) -> success -> getList
- 用户取消确认时不提示失败

【强约束】
- `handleQuery` 是查询入口，先 `pageNum=1` 再 `getList`
- `resetQuery`：resetFields -> 清空 dateRange -> handleQuery
- 提示统一 `proxy.$modal`
- 页面层禁止直接 axios/fetch

【输出要求】
- 先给改动文件清单
- 再给完整代码改动
- 最后给验收清单（至少5条）