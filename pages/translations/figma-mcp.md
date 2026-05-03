---
title: Figma 插件概览
date: '2026-05-03T08:00:00Z'
lang: zh
duration: 5min
---

[[toc]]

你安装的 **Figma** Cursor 插件主要包含三块：**Skills（技能）**、**MCP 服务器（figma）**，以及与其它 Cursor 功能协同的方式。

## MCP：`figma`

通过 MCP 把 Cursor 接到 Figma。常用入口是 `use_figma`，用于在画布上做读写、结构查询等。

**规范：** 每次调用 `use_figma` 前，应先按 **figma-use** 技能里的说明操作；FigJam 场景可再配合 **figma-use-figjam**。

## Skills（可按 `/` 使用或由 Agent 自动选用）

| 技能 | 用途摘要 |
| --- | --- |
| **figma-use** | `use_figma` 的前置必读：如何正确调用、常见坑 |
| **figma-code-connect** | 维护 Code Connect（`.figma.ts` / `.figma.js`），把组件映射到代码片段 |
| **figma-create-design-system-rules** | 为项目生成定制的设计系统规则（需已连上 Figma MCP） |
| **figma-create-new-file** | 新建空白 Figma / FigJam 文件（例如 `/figma-create-new-file figjam 名称`） |
| **figma-generate-design** | 把页面/多区块布局「写进 Figma」，用设计系统组装界面 |
| **figma-generate-diagram** | 在每次 `generate_diagram` 之前**必须**先看本技能 |
| **figma-generate-library** | 从代码库在 Figma 里搭/补设计系统（变量、组件、主题等） |
| **figma-implement-design** | 把 Figma 设计还原成接近 1:1 的代码 |
| **figma-use-figjam** | 在 FigJam 里用 `use_figma` 的补充说明 |

## 在 Cursor 里怎么用

- **命令：** 许多能力可用 `/` 前缀调用（例如文档里提到的 `/figma-create-new-file`）。
- **Skills / 子 Agent：** 可用 `/` 显式唤起，或由当前对话里的 Agent 在合适时自动选用。
- **Rules / Hooks：** 若插件带了规则或钩子，一般会**自动生效**，无需每次手动开启。

## 认证

根据 MCP 侧的 `STATUS.md`，该服务器需要先完成认证：在 Cursor 里对 **`plugin-figma-figma`** 调用 **`mcp_auth`**（空参数 `{}`）即可；认证成功后，该服务器上的工具应可用。

若在 Figma 桌面端切换账号、会话过期，或工具突然不可用，可再触发一次认证，或按插件内提示重新连接。
