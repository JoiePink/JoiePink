<template>
  <div>
    <ul>
      <li><strong>芯片之上是基础设施层。这包括土地、供电、冷却系统、建筑工程、网络通信，以及将成千上万处理器编排到一台机器的系统。</strong></li>
    </ul>

    <div class="my-8 overflow-hidden rounded-[28px] border border-neutral-200/70 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/30 p-6 shadow-[0_18px_60px_-28px_rgba(15,23,42,0.25)] dark:border-neutral-800/80 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      <div class="mb-5 text-center">
        <p class="text-xs uppercase tracking-[0.28em] text-neutral-400">Infrastructure Above Chips</p>
        <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">有了芯片，还不等于就有了 AI 能力；还必须把大量芯片、电力、网络和机房系统组织起来，才能形成真正可运行的大规模 AI 生产体系。</p>
      </div>

      <div class="rounded-3xl border border-slate-200/70 bg-white/70 p-5 dark:border-neutral-800/80 dark:bg-neutral-900/60">
        <p class="text-sm leading-7 text-neutral-600 dark:text-neutral-300">
          芯片只是单个计算部件，像发动机零件。AI 真正运行，尤其是大模型训练和大规模推理，依赖的不是一两块芯片，而是一整套让大量芯片协同工作的工程体系。
        </p>
        <div class="mt-4 flex flex-wrap items-center justify-center gap-3 text-center">
          <div class="rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">芯片装进服务器</div>
          <div class="text-neutral-300 dark:text-neutral-700">→</div>
          <div class="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">服务器放进机房</div>
          <div class="text-neutral-300 dark:text-neutral-700">→</div>
          <div class="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">供电散热网络到位</div>
          <div class="text-neutral-300 dark:text-neutral-700">→</div>
          <div class="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">集群统一调度</div>
        </div>
      </div>

      <div class="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <div class="rounded-3xl border border-amber-200/70 bg-gradient-to-br from-amber-50 to-white p-5 shadow-sm dark:border-amber-400/20 dark:from-amber-500/10 dark:to-neutral-950">
          <div class="mb-3 inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">01</div>
          <h3 class="text-base font-semibold text-amber-900 dark:text-amber-100">土地</h3>
          <p class="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            数据中心、算力中心要建楼、建园区，需要真实的物理空间。AI 不是漂在云上的，它最终也要落在真实土地上。
          </p>
        </div>

        <div class="rounded-3xl border border-yellow-200/70 bg-gradient-to-br from-yellow-50 to-white p-5 shadow-sm dark:border-yellow-400/20 dark:from-yellow-500/10 dark:to-neutral-950">
          <div class="mb-3 inline-flex rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-300">02</div>
          <h3 class="text-base font-semibold text-yellow-900 dark:text-yellow-100">供电</h3>
          <p class="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            大量服务器运行非常耗电，没有稳定供电，算力就无法持续输出。芯片再强，也必须先保证电力系统持续可靠。
          </p>
        </div>

        <div class="rounded-3xl border border-cyan-200/70 bg-gradient-to-br from-cyan-50 to-white p-5 shadow-sm dark:border-cyan-400/20 dark:from-cyan-500/10 dark:to-neutral-950">
          <div class="mb-3 inline-flex rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300">03</div>
          <h3 class="text-base font-semibold text-cyan-900 dark:text-cyan-100">冷却系统</h3>
          <p class="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            芯片运算会产生大量热，尤其是 GPU 集群。如果散热跟不上，设备会降频、报错，甚至停机。
          </p>
        </div>

        <div class="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-slate-50 to-white p-5 shadow-sm dark:border-slate-400/20 dark:from-slate-500/10 dark:to-neutral-950">
          <div class="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-slate-700 dark:bg-slate-500/15 dark:text-slate-300">04</div>
          <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100">建筑工程</h3>
          <p class="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            AI 基础设施不是摆几台电脑那么简单，而是需要专业机房、承重、布线、消防、空调、机柜等完整工程建设。
          </p>
        </div>

        <div class="rounded-3xl border border-violet-200/70 bg-gradient-to-br from-violet-50 to-white p-5 shadow-sm dark:border-violet-400/20 dark:from-violet-500/10 dark:to-neutral-950">
          <div class="mb-3 inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">05</div>
          <h3 class="text-base font-semibold text-violet-900 dark:text-violet-100">网络通信</h3>
          <p class="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            大模型往往需要很多服务器一起工作。如果机器之间网络慢，数据传输就会卡，整体效率会明显下降。
          </p>
        </div>

        <div class="rounded-3xl border border-rose-200/70 bg-gradient-to-br from-rose-50 to-white p-5 shadow-sm dark:border-rose-400/20 dark:from-rose-500/10 dark:to-neutral-950">
          <div class="mb-3 inline-flex rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-rose-700 dark:bg-rose-500/15 dark:text-rose-300">06</div>
          <h3 class="text-base font-semibold text-rose-900 dark:text-rose-100">处理器编排系统</h3>
          <p class="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            这不是把成千上万块芯片真的变成一台物理机器，而是通过软件和系统设计，把它们组织成一个统一协同的超级计算系统。
          </p>
        </div>
      </div>

      <div class="mt-5 rounded-3xl border border-neutral-200/70 bg-white/70 p-5 dark:border-neutral-800/80 dark:bg-neutral-900/60">
        <p class="mb-4 text-center text-sm font-medium text-neutral-700 dark:text-neutral-300">基础设施层真正解决的问题，是让大量芯片“像一个整体”工作：</p>
        <div class="flex flex-wrap items-center justify-center gap-3 text-center">
          <div class="rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">大量芯片</div>
          <div class="text-neutral-300 dark:text-neutral-700">→</div>
          <div class="rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300">服务器与机房</div>
          <div class="text-neutral-300 dark:text-neutral-700">→</div>
          <div class="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">供电/散热/联网</div>
          <div class="text-neutral-300 dark:text-neutral-700">→</div>
          <div class="rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700 dark:bg-rose-500/15 dark:text-rose-300">统一编排调度</div>
          <div class="text-neutral-300 dark:text-neutral-700">→</div>
          <div class="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">大规模训练与推理</div>
        </div>
      </div>
    </div>

    <ul>
      <li><strong>这些系统就是 AI 工厂。它们的设计目的并非存储信息，而是制造智能。</strong></li>
    </ul>

    <div class="my-8 overflow-hidden rounded-[28px] border border-neutral-200/70 bg-gradient-to-br from-white via-orange-50/25 to-pink-50/25 p-6 shadow-[0_18px_60px_-28px_rgba(15,23,42,0.25)] dark:border-neutral-800/80 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      <div class="mb-5 text-center">
        <p class="text-xs uppercase tracking-[0.28em] text-neutral-400">AI Factory</p>
        <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">今天的大型 AI 基础设施，已经不像传统机房那样只是“存数据、放文件”，而更像一个持续产出智能能力的工厂。</p>
      </div>

      <div class="grid gap-4 md:grid-cols-2">
        <div class="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-slate-50 to-white p-5 shadow-sm dark:border-slate-400/20 dark:from-slate-500/10 dark:to-neutral-950">
          <div class="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-slate-700 dark:bg-slate-500/15 dark:text-slate-300">传统机房</div>
          <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100">更像仓库</h3>
          <p class="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            传统信息系统更偏向保存和传递信息，它的核心任务通常是把内容存好、查到、传出去，而不是持续把信息加工成新的能力。
          </p>
          <div class="mt-4 flex flex-wrap gap-2 text-xs">
            <span class="rounded-full bg-slate-100 px-3 py-1 text-slate-700 dark:bg-slate-500/15 dark:text-slate-300">存数据库</span>
            <span class="rounded-full bg-zinc-100 px-3 py-1 text-zinc-700 dark:bg-zinc-500/15 dark:text-zinc-300">存网页</span>
            <span class="rounded-full bg-gray-100 px-3 py-1 text-gray-700 dark:bg-gray-500/15 dark:text-gray-300">存图片和视频</span>
            <span class="rounded-full bg-stone-100 px-3 py-1 text-stone-700 dark:bg-stone-500/15 dark:text-stone-300">检索和传输</span>
          </div>
          <div class="mt-4 rounded-2xl bg-white/80 px-4 py-3 text-sm text-slate-800 ring-1 ring-slate-100 dark:bg-neutral-900/60 dark:text-slate-200 dark:ring-slate-400/10">
            它的核心价值主要是“保存信息”和“传递信息”。
          </div>
        </div>

        <div class="rounded-3xl border border-rose-200/70 bg-gradient-to-br from-rose-50 to-white p-5 shadow-sm dark:border-rose-400/20 dark:from-rose-500/10 dark:to-neutral-950">
          <div class="mb-3 inline-flex rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-rose-700 dark:bg-rose-500/15 dark:text-rose-300">AI 工厂</div>
          <h3 class="text-base font-semibold text-rose-900 dark:text-rose-100">更像生产车间</h3>
          <p class="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            AI 基础设施不是静态摆在那里，而是在持续“生产”智能输出。它把数据、模型和算力组织起来，转化成回答、识别、预测和决策等可用能力。
          </p>
          <div class="mt-4 flex flex-wrap gap-2 text-xs">
            <span class="rounded-full bg-rose-100 px-3 py-1 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300">模型训练结果</span>
            <span class="rounded-full bg-pink-100 px-3 py-1 text-pink-700 dark:bg-pink-500/15 dark:text-pink-300">推理服务</span>
            <span class="rounded-full bg-fuchsia-100 px-3 py-1 text-fuchsia-700 dark:bg-fuchsia-500/15 dark:text-fuchsia-300">自动生成内容</span>
            <span class="rounded-full bg-orange-100 px-3 py-1 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300">识别/预测/决策能力</span>
          </div>
          <div class="mt-4 rounded-2xl bg-white/80 px-4 py-3 text-sm text-rose-800 ring-1 ring-rose-100 dark:bg-neutral-900/60 dark:text-rose-200 dark:ring-rose-400/10">
            它生产的不是实物，而是持续可调用的智能输出。
          </div>
        </div>
      </div>

      <div class="mt-5 rounded-3xl border border-neutral-200/70 bg-white/70 p-5 dark:border-neutral-800/80 dark:bg-neutral-900/60">
        <p class="mb-4 text-center text-sm font-medium text-neutral-700 dark:text-neutral-300">“制造智能”可以理解成这样一条链路：</p>
        <div class="flex flex-wrap items-center justify-center gap-3 text-center">
          <div class="rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">数据</div>
          <div class="text-neutral-300 dark:text-neutral-700">+</div>
          <div class="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">模型</div>
          <div class="text-neutral-300 dark:text-neutral-700">+</div>
          <div class="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">算力</div>
          <div class="text-neutral-300 dark:text-neutral-700">+</div>
          <div class="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">基础设施</div>
          <div class="text-neutral-300 dark:text-neutral-700">→</div>
          <div class="rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700 dark:bg-rose-500/15 dark:text-rose-300">智能输出</div>
        </div>
        <p class="mt-4 text-center text-sm leading-7 text-neutral-500 dark:text-neutral-400">
          更通俗地说：传统机房像仓库，主要负责存东西；AI 工厂像生产车间，主要负责把数据加工成回答、判断、预测和决策这些智能结果。
        </p>
      </div>
    </div>
  </div>
</template>
