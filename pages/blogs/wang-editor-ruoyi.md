---
title: RuoYi框架WangEditor通用组件封装
date: "2026-04-21T09:00:00Z"
lang: zh
duration: 8min
---

[[toc]]

基于WangEditor组件封装的若依富文本通用组件

# 一、背景与目标

- 现状：目前若依前端框架对于富文本的组件封装是基于`QuillEditor`，与`QuillEditor`相比，`WangEditor`具有以下特点
  - 1. 开发效率高：国内后台系统通常要求"快速集成、稳定交付"，`WangEditor`提供的官方封装组件，5分钟即可跑通基础编辑+上传
  - 2. 维护成本低：全中文生态、社区活跃、问题排查快
  - 3. 符合国内开发/使用习惯：内置的图片/视频上传组件、表格操作、代码高亮、附件上传等更贴近国内 CMS/工单/公告编辑需求
  - 4. 输出干净：默认输出语义化HTML,而`QuillEditor`还需要Delta与HTML的转换

- 痛点：若依项目中没有针对`WangEditor`的专门封装，如果需要在多个页面使用只能进行复制粘贴，代码量大、规范不统一

- 目标：
  - 提供统一可复用的`WangEditor`若依方案
  - 降低业务页面集成和维护成本

# 二、方案概述

- 组件路径：src/components/WangEditor/index.vue
- 核心能力：
  - 1. 双向绑定：`modelValue`根据用户输入实时更新，也可以根据`@update:modelValue="handleChange"`进行二次处理
  - 2. 动态高度: `height`、`minHeight`动态定制
  - 3. 动态只读：`readOnly`动态定制
  - 4. 图片上传：与若依自身的`OSS`相绑定，统一走`/resource/oss/upload`
  - 5. 上传前校验：图片格式、图片大小
  - 6. 生命周期清理：`onBeforeUnmount`销毁实例

# 三、使用示例

```js
<template>
  <WangEditor
    v-model="form.content"
    :height="420"
    :min-height="300"
    :read-only="readonly"
    :file-size="5"
  />
</template>
```


# 四、组件 API 说明

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | string | - | 编辑器 HTML 内容，支持 `v-model` 双向绑定 |
| height | number | 400 | 编辑器固定高度（px） |
| minHeight | number | 400 | 编辑器最小高度（px） |
| readOnly | boolean | false | 是否只读，支持运行时动态切换 |
| fileSize | number | 5 | 图片上传大小限制（MB） |


# 五、上传能力与后端接口约定

组件内部通过 `customUpload` 接管图片上传，默认请求地址：

- `POST /resource/oss/upload`

上传前校验：

- 图片格式：`jpg/jpeg/png/webp/svg`
- 图片大小：`fileSize` 限制（默认 5MB）

上传请求特点：

- 使用 `FormData`，字段名是 `file`
- 自动携带 `globalHeaders()` 返回的鉴权头
- `Content-Type` 为 `multipart/form-data`

后端返回值建议至少满足以下结构之一：

```json
{
  "code": 200,
  "data": {
    "url": "https://xxx.com/xxx.png"
  }
}
```

或

```json
{
  "code": 200,
  "url": "https://xxx.com/xxx.png"
}
```

否则组件会提示上传失败，且不会插入图片。

# 六、行为细节（源码补充）

- `modelValue` 首次为空时，会初始化为 `<p></p>`，避免编辑器空值异常
- `readOnly` 改变时会调用 `editor.disable()/editor.enable()` 动态切换
- 组件卸载时调用 `editor.destroy()`，避免内存泄漏
- 上传过程内置全局 Loading 和错误提示（依赖 `proxy.$modal`）

# 七、完整示例（含事件二次处理）

```vue
<template>
  <WangEditor
    v-model="form.content"
    :height="420"
    :min-height="300"
    :read-only="readonly"
    :file-size="5"
    @update:modelValue="handleEditorChange"
  />
</template>

<script setup lang="ts">
const form = reactive({
  content: '',
})

const readonly = ref(false)

function handleEditorChange(html: string) {
  // 可在这里做长度限制、敏感词校验、自动保存等逻辑
  form.content = html
}
</script>
```

# 八、接入注意事项

- 组件依赖若依项目中的 `@/utils/request` 与 `@/utils/propTypes`
- 组件依赖全局 `proxy.$modal`（用于 `loading/msgError` 提示）
- 若你项目未使用 OSS 上传接口，可仅替换 `customUpload` 中的请求地址与响应解析逻辑
- 若需要视频上传、附件上传，可沿用同样模式扩展 `MENU_CONF`
