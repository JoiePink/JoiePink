---
title: Guide to the Figma MCP server
date: '2026-05-02T08:00:00Z'
lang: zh
duration: 5min
---

[[toc]]

## Who can use this feature

- 远程服务对于所有席位和方案都是可用的
- 桌面服务器在所有付费计划的开发版或完整版席位上可用
- 你必须使用一个代码编辑器或者应用来支持MCP服务 (i.e. VS Code, Cursor, Windsurf, Claude Code, Codex) 阅读我们支持的客户端清单列表[See our MCP catalog for a full list of supported clients](https://figma.com/mcp-catalog).
- 用量和剩余用量的信息，你可以在Figma开发文档中查看 查看Figma开发者文档中的计划、访问权限和权限。[Plans, access, and permissions](https://developers.figma.com/docs/figma-mcp-server/plans-access-and-permissions/)

Figma MCP可以帮助开发者非常快速准确的实现设计：

- 使用你的代理工具可以在 Figma Design和FigJam直接创建并修改原生Figma内容
- 从你的Figma设计、FigJam和Make文件中获取设计上下文和代码
- 将您的实时 UI 捕获为设计图层，将您的代码呈现的界面带入 Figma 设计文件
- 提升您与设计组件和代码连接的工作方式

带有Figma MCP服务的工具可以将Figma中的相关上下位带给你的工作流，因此你的代码不仅与现有系统保持一致，还能与设计保持一致。

MCP 服务器是 AI 代理通过模型上下文协议与数据源交互的标准化接口的一部分。

[See our Figma MCP Collection to learn more about the MCP server and bringing Figma into your workflow →](https://help.figma.com/hc/en-us/sections/35280374295831-Figma-MCP-collection)

提示：这个页面是一个对于Figma MCP的整体概述，更详细的介绍和代码示例，你可以在[Figma MCP server developer documentation](https://developers.figma.com/docs/figma-mcp-server) 中查看

在服务支持的情况下，你可以：

- 让你的agent直接在**Figma Design and FigJam**中修改画布

用你的MCP客户端直接创建和修改原生Figma内容，在正确的skills的使用下，agents在你的Figma文件中可以使用设计系统作为真实来源来构建和更新框架, 组件, 变量和自动布局

这个功能正在被持续优化，如果你遇到了问题，你可以using [Fig, our support chatbot](https://help.figma.com/hc/en-us/articles/360041057214-Explore-Figma-s-help-and-support-resources#h_01KBJZP4HEVHZSHXBV6PFQBPH0), or by [emailing support (paid plans)](https://help.figma.com/hc/en-us/articles/360041057214-Explore-Figma-s-help-and-support-resources#h_01KBJZP4JHXDEZM922NWPF3P9D)来报告问题

[Learn more about writing to the canvas](https://developers.figma.com/docs/figma-mcp-server/write-to-canvas/)了解更多关于在画布上写作的内容

- 从您的网页应用和网站的实时用户界面生成设计

将浏览器中的实时UI（生产、暂存或本地主机）转化为Figma中的可编辑设计层,将页面、元素或整个流程发送到 Figma 设计进行探索、对齐和完善。

- 从选择的框架中生成代码

选择一个Figma Frame并且把它生成代码，这对于产品团队构建新流程或者迭代APP功能是非常棒的

- 提取设计上下文

直接将变量、组件和布局数据拉入您的IDE，这对于设计软件系统和基于组件的工作流真的非常有用

- 检索FigJam资源

访问你在 FigJam 图表中的内容并且把它在你的代码生成工作流中使用。将早期的想法、流程图或者架构图直接融入开发中

- 将你设计系统的组件和代码联系到一起

通过服用你的实际组件来提升输出的质量。Code Connect 使你生成的代码与你的代码库保持一致。

## Set up the MCP server

- 你可以通过以下两种方法来连接Figma MCP服务：远程 MCP 服务器（推荐）：直接连接到 Figma 托管的端点 https://mcp.figma.com/mcp。了解如何安装远程 MCP 服务器。
- 桌面 MCP 服务器：通过 Figma 桌面应用在本地运行。了解如何安装桌面 MCP 服务器。桌面 MCP 服务器主要用于组织和企业的特定用例。若要获得最广泛的功能，请使用远程 MCP 服务器。

### Connect the MCP server to your editor

按照你所使用的特定编辑器的说明，将其连接到 Figma MCP 服务器（可以是本地或远程）。某些客户端还支持技能，这些技能会添加代理级别的指令，帮助 AI 工具更有效地处理 Figma 设计

### About Skills

技能为代理如何完成特定任务提供指导，使用MCP工具调用和详细说明的组合。

虽然 Figma MCP 服务器提供了各个独立的工具，但 Skills 帮助代理理解应使用哪些工具、如何对它们进行排序，以及在处理 Figma 设计时如何应用这些结果。

技能可以引导代理通过如下工作流程：

- **借助 Code Connect 将 Figma 设计组件与代码组件进行映射关联**
- **自动生成与你现有代码库保持一致的设计系统规范**
- **将设计稿转换为可直接用于生产环境的代码**

技能并不会取代 MCP 连接或增加新的 MCP 功能。它们通过将推荐的工作流程打包成可重用的指令，来减少设置和猜测。

## Prompt your MCP client

Figma MCP服务提供了一系列工具帮助大模型转换 Figma 设计，连接之后，你可以指示你的MCP客户端访问一个特定的设计节点

首先，请按照说明为您首选的 MCP 客户端安装 Figma MCP 服务器。我们提供以下说明：

- [Claude Code](https://help.figma.com/hc/en-us/articles/39888612464151-Claude-Code-and-Figma-Set-up-the-MCP-server#h_01KPPEJMXTZGNJS32R62SCME0S)
- [Codex by OpenAI](https://help.figma.com/hc/en-us/articles/39888629089175-Codex-and-Figma-Set-up-the-MCP-server#h_01KPPFC952S5ZRG6KQCTVRAKCG)
- [Cursor](https://help.figma.com/hc/en-us/articles/39889260656407-Cursor-and-Figma-Set-up-the-MCP-server#h_01KPPGE8VQMJAXZ6CSZ0M32VHY)
- [Gemini CLI](https://help.figma.com/hc/en-us/articles/39889246888855-Gemini-CLI-and-Figma-Set-up-the-MCP-server#h_01KPPGHCQTQAC1KQSB1YS03ETE)
- [VS Code](https://help.figma.com/hc/en-us/articles/39890361040535-VS-Code-and-Figma-Set-up-the-MCP-server#h_01KPPGM2WBVB21ZYNEXJYDH16P)

