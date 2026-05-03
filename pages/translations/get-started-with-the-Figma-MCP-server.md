---
title: Get started with the Figma MCP server
date: '2026-05-01T08:00:00Z'
lang: zh
duration: 8min
---

[[toc]]

Figma MCP使得Figma可以直接连接你的开发工作流，让AI Agent能够访问生成准确的、设计驱动的代码所需要的设计稿上下文。

Agents可以通过阅读Figma设计稿文件来提取组件、变量、布局数据和其他设计细节，能根据设计稿的构建方式生成对应代码而不是简单的根据这个设计稿的结果长什么样来生成代码。

Agent可以用新功能(在设计稿上写元素)直接新建或修改设计稿，能够在已经存在的设计稿系统上生成组件、变量和完整屏幕，代理不是生成扁平的视觉输出，而是使用真实的 Figma 原生组件进行构建，并复用你库中已有的内容。

新的写入画布功能目前仅对付费计划中的Full和Dev座位可用。开发人员座位仅在草稿之外具有只读访问权限。

我们正在快速的提升Figma支持AI agent的能力，这个甚至会变成一个付费功能，但是在目前的测试期间可以免费使用

这使代码和画布之间有了连续的工作流，当你的设计系统作为唯一的真实来源的时候，Agent可以在两个方向上移动

## **Set up the Figma MCP server**

为了建立远程Figma MCP服务，你需要在你的客户端按照以下步骤执行。Figma 提供了几个常见客户端的使用说明

- [Claude Code](https://help.figma.com/hc/en-us/articles/39888612464151-Claude-Code-and-Figma-Set-up-the-MCP-server#h_01KPPEJMXTZGNJS32R62SCME0S)
- [Codex](https://help.figma.com/hc/en-us/articles/39888629089175-Codex-and-Figma-Set-up-the-MCP-server#h_01KPPFC952S5ZRG6KQCTVRAKCG)
- [Cursor](https://help.figma.com/hc/en-us/articles/39889260656407-Cursor-and-Figma-Set-up-the-MCP-server#h_01KPPGE8VQMJAXZ6CSZ0M32VHY)
- [Gemini CLI](https://help.figma.com/hc/en-us/articles/39889246888855-Gemini-CLI-and-Figma-Set-up-the-MCP-server#h_01KPPGHCQTQAC1KQSB1YS03ETE)
- [VS Code](https://help.figma.com/hc/en-us/articles/39890361040535-VS-Code-and-Figma-Set-up-the-MCP-server#h_01KPPGM2WBVB21ZYNEXJYDH16P)

使用说明和客户端是息息相关的，至于其他客户端的SKills下载的使用说明，你需要知道你的客户端是如何添加服务的或者查询你的客户端使用文档 [Supported MCP clients](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server#h_01K25F7RBRZKCATVJHNXCS6KXW)

## **Start using the Figma MCP server**

这里是一些帮助你快速开始的提示词例子

- /figma-use 你能帮我使用我的设计系统组件创建一个新的 Figma 设计吗？并将它放入一个新的 Figma 文件中。
- 在 `<Figma 文件链接>` 中，将我的应用首页 UI 提取为画板（Frames）
- 使用 Figma MCP generate_diagram 工具为用户身份验证流程创建一个流程图

当你使用远程Figma MCP服务进行工作的时候，有一对重要的概念你需要理解：tools和skills

- 能够让你的MCP客户端在Figma文件中执行动作操作的是Tools, 您可以在这里查看可用的工具和示例提示。
- SKills可以告诉你的MCP客户端如何去高效得使用Tools，使用Skill你可以获得更加高质量的、更加可信赖的结果

当你远程建立了Figma MCP服务之后， skills是开始提示的最佳方式：[Use skills with the Figma MCP server](https://help.figma.com/hc/en-us/articles/39287396773399).

你还可以进一步了解 Figma 所提供的技能: [Figma skills for MCP](https://help.figma.com/hc/en-us/articles/39166810751895)

## **Check out the Figma Community**

Figma社区是一个日益增强的SKills博物馆，可以帮助你更好的使用Figma MCP服务。你可以进来看一看目前可使用的Skills，为你正在设计的场景挑选一个合适的Skill来方便你的设计工作。 [Skills in the Figma Community](https://www.figma.com/community/skills)

## **Create your own skills**

你可以创建你自己的Skills来告诉你的agent你的团队是如何使用Figma来工作的，自定义的skills可以帮助你将重复的工作流打包并且从Figma MCP服务获得一致风格的结果: [Create skills for the Figma MCP server](https://developers.figma.com/docs/figma-mcp-server/create-skills/)

## **What’s next?**

- 阅读 [Figma MCP collection](https://help.figma.com/hc/en-us/sections/35280374295831-Figma-MCP-collection) 来深入探究如何使用Figma MCP服务
- 阅读下面的文章来获取一些MCP服务最新的信息
  - [Agents, meet the Figma canvas](https://www.figma.com/blog/the-figma-canvas-is-now-open-to-agents/)
  - [The future of design is code and canvas](https://www.figma.com/blog/the-future-of-design-is-code-and-canvas/)
- 阅读[Guide to the Figma MCP server](https://help.figma.com/hc/en-us/articles/32132100833559) 查看支持的客户端表格以及我们提供的功能概览
- 探索我们的 [developer documentation](https://developers.figma.com/docs/figma-mcp-server/) 了解有关使用 Figma MCP 服务器及其所有功能的最细致的详细信息