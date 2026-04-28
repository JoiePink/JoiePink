<template>
    <div>
        <ul>
            <li>
                <strong>
                    基础设施层之上是模型层。AI
                    模型能够理解多种类型的信息：语言、生物学、化学、物理学、金融学、医学以及物理世界本身。
                </strong>
            </li>
        </ul>
        <p class="text-neutral-400">机房、电力、网络、服务器这些“基础设施”只是提供算力与运行环境；真正让 AI 产生智能能力（能理解、能推理、能生成、能预测）的，是运行在其上的模型。</p>
        <p class="text-neutral-400">AI 不只会处理文字（语言），还可以学习和处理很多领域/数据形式的规律，比如生物（序列、蛋白质）、化学（分子、反应）、物理（系统规律、仿真）、金融（时间序列、风险）、医学（影像、病历），以及物理世界本身（视觉、声音、动作、环境反馈）。</p>
        <ul>
            <li>
                <strong>
                  语言模型只是其中一个类别。
                </strong>
            </li>
        </ul>

        <div
          class="my-6 overflow-hidden rounded-[28px] border border-neutral-200/70 bg-gradient-to-br from-white via-sky-50/30 to-violet-50/30 p-6 shadow-[0_18px_60px_-28px_rgba(15,23,42,0.25)] dark:border-neutral-800/80 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
          <div class="mb-5 text-center">
            <p class="text-xs uppercase tracking-[0.28em] text-neutral-400">Language Model (LM)</p>
            <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              专门用来理解与生成“语言/文字”的 AI 模型。
            </p>
          </div>

          <div class="rounded-3xl border border-neutral-200/70 bg-white/70 p-5 dark:border-neutral-800/80 dark:bg-neutral-900/60">
            <p class="mb-4 text-center text-sm font-medium text-neutral-700 dark:text-neutral-300">
              你可以把语言模型理解成一条“输入 → 编码 → 预测 → 输出”的流水线：
            </p>
            <div class="flex flex-wrap items-center justify-center gap-3 text-center">
              <div
                class="rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">
                文本输入</div>
              <div class="text-neutral-300 dark:text-neutral-700">→</div>
              <div
                class="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300">
                分词/编码（tokens）</div>
              <div class="text-neutral-300 dark:text-neutral-700">→</div>
              <div
                class="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">
                语言模型（LM）</div>
              <div class="text-neutral-300 dark:text-neutral-700">→</div>
              <div
                class="rounded-full bg-fuchsia-100 px-4 py-2 text-sm font-medium text-fuchsia-700 dark:bg-fuchsia-500/15 dark:text-fuchsia-300">
                预测下一个 token</div>
              <div class="text-neutral-300 dark:text-neutral-700">→</div>
              <div
                class="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                文本输出</div>
            </div>
            <p class="mt-4 text-center text-sm leading-7 text-neutral-500 dark:text-neutral-400">
              本质上就是：给定上下文，持续预测“下一个最合理的 token 序列”。
            </p>
          </div>

          <div class="mt-5 grid gap-4 md:grid-cols-3">
            <div
              class="rounded-3xl border border-sky-200/70 bg-gradient-to-br from-sky-50 to-white p-5 shadow-sm dark:border-sky-400/20 dark:from-sky-500/10 dark:to-neutral-950">
              <h3 class="text-base font-semibold text-sky-900 dark:text-sky-100">它学什么</h3>
              <p class="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
                从大量文本里学习词与词、句与句之间的规律：语法、语义、上下文关系，以及常识模式等。
              </p>
            </div>

            <div
              class="rounded-3xl border border-violet-200/70 bg-gradient-to-br from-violet-50 to-white p-5 shadow-sm dark:border-violet-400/20 dark:from-violet-500/10 dark:to-neutral-950">
              <h3 class="text-base font-semibold text-violet-900 dark:text-violet-100">它能做什么</h3>
              <p class="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
                续写、改写、总结、翻译、问答、对话、写代码等，都是在同一套“语言生成”能力上组合出来的任务形态。
              </p>
            </div>

            <div
              class="rounded-3xl border border-emerald-200/70 bg-gradient-to-br from-emerald-50 to-white p-5 shadow-sm dark:border-emerald-400/20 dark:from-emerald-500/10 dark:to-neutral-950">
              <h3 class="text-base font-semibold text-emerald-900 dark:text-emerald-100">为什么只是一个类别</h3>
              <p class="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
                因为还有很多模型并不以文字为主：蛋白质模型（序列/结构）、化学模型（分子/反应）、物理模拟模型、机器人与自主系统模型（感知-行动）等。
              </p>
            </div>
          </div>

          <div
            class="mt-5 rounded-3xl border border-neutral-200/70 bg-white/70 p-5 text-center text-sm leading-7 text-neutral-600 dark:border-neutral-800/80 dark:bg-neutral-900/60 dark:text-neutral-300">
            像 ChatGPT、Claude 这类对话 AI 的核心通常就是（或包含）语言模型。
          </div>
        </div>
        <ul>
            <li>
                <strong>
                  一些最具变革性的工作正发生在蛋白质 AI、化学 AI、物理模拟、机器人技术和自主系统等领域。
                </strong>
            </li>
        </ul>
    </div>
</template>
