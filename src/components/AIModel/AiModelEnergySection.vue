<template>
  <div>
    <ul>
      <li><strong>最底层是能源。实时生成的智能需要实时产生的电力支持。</strong></li>
    </ul>

    <p class="text-neutral-400">能源, 例如火电、水电、核电、风电、光伏、储能系统、电网输配电，是非常现实的东西</p>

    <p class="text-neutral-400">大模型每生成一个 token，背后都要发生真实的物理过程：</p>

    <div class="my-6 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      <div class="flex flex-col items-center gap-3">
        <div class="rounded-xl bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800 dark:bg-amber-500/15 dark:text-amber-300">
          电力持续供应
        </div>
        <div class="text-neutral-400">↓</div>
        <div class="grid w-full gap-3 md:grid-cols-4">
          <div class="rounded-xl bg-blue-50 px-4 py-3 text-center text-sm font-medium text-blue-700 dark:bg-blue-500/15 dark:text-blue-300">
            服务器通电
          </div>
          <div class="rounded-xl bg-violet-50 px-4 py-3 text-center text-sm font-medium text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">
            GPU / AI 芯片运行
          </div>
          <div class="rounded-xl bg-emerald-50 px-4 py-3 text-center text-sm font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
            内存和网络交换数据
          </div>
          <div class="rounded-xl bg-rose-50 px-4 py-3 text-center text-sm font-medium text-rose-700 dark:bg-rose-500/15 dark:text-rose-300">
            机房散热和制冷
          </div>
        </div>
        <div class="hidden w-full items-center justify-between px-4 text-neutral-400 md:flex">
          <span>→</span>
          <span>→</span>
          <span>→</span>
        </div>
        <div class="flex flex-col items-center gap-2 text-neutral-400 md:hidden">
          <span>↓</span>
          <span>↓</span>
          <span>↓</span>
        </div>
      </div>
    </div>

    <details class="my-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300">
      <summary class="cursor-pointer select-none font-medium text-neutral-900 marker:hidden dark:text-neutral-100">
        不理解这些词？点我展开说明
      </summary>

      <div class="mt-4 space-y-3 leading-7">
        <p><strong>电力：</strong>给整个系统提供能量的来源，没有电，服务器和芯片都不能工作。</p>
        <p><strong>服务器：</strong>承载计算任务的机器，相当于运行 AI 的整机平台，里面会装 CPU、GPU、内存、网卡等硬件。</p>
        <p><strong>GPU：</strong>原本擅长图形计算的芯片，现在也非常适合做大规模并行计算，所以常被用来训练和推理大模型。</p>
        <p><strong>AI 芯片：</strong>专门为人工智能计算优化的芯片，GPU 算其中一种；有些公司也会设计更专用的 NPU、TPU、ASIC。</p>
        <p><strong>内存：</strong>芯片运行时临时存放数据的地方，比如中间计算结果、参数片段、缓存内容。</p>
        <p><strong>网络交换：</strong>不同服务器、不同芯片之间传输数据的过程。大模型往往不是一块卡单独完成，需要频繁通信。</p>
        <p><strong>机房：</strong>集中摆放服务器的地方，提供电力、网络、散热、消防和运维环境，可以理解成大模型运行的物理场所。</p>
      </div>
    </details>

    <p class="text-pink-400">❗ AI 的每一次推理、训练、回答问题，本质上都在消耗电。没有稳定、便宜、充足的电力，就没有大规模 AI。AI 先是一个耗能系统，之后才是一个智能系统</p>

    <ul>
      <li><strong>每一个生成的 token，都是电子流动、热量管理以及能量转化为计算的结果。</strong></li>
    </ul>

    <p class="text-neutral-400">
      用户看到的是 AI 在“回答问题”，但机器内部真正发生的是一连串物理过程。
      也就是说，token 不是凭空冒出来的，而是靠电、芯片、散热和计算一步步“算出来”的。
    </p>

    <div class="my-8 overflow-hidden rounded-[28px] border border-neutral-200/70 bg-gradient-to-br from-white via-pink-50/30 to-orange-50/30 p-6 shadow-[0_18px_60px_-28px_rgba(15,23,42,0.25)] dark:border-neutral-800/80 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      <div class="mb-5 text-center">
        <p class="text-xs uppercase tracking-[0.28em] text-neutral-400">How A Token Is Physically Produced</p>
        <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">从电子运动到热量控制，模型输出背后是一整套持续发生的物理过程。</p>
      </div>

      <div class="grid gap-4 md:grid-cols-3">
        <div class="rounded-3xl border border-sky-200/70 bg-gradient-to-br from-sky-50 to-white p-5 shadow-sm dark:border-sky-400/20 dark:from-sky-500/10 dark:to-neutral-950">
          <div class="mb-3 inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">01</div>
          <h3 class="text-base font-semibold text-sky-900 dark:text-sky-100">电子流动</h3>
          <p class="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            服务器通电后，芯片里的晶体管开始工作，电流在电路中流动。这些电子信号完成加法、乘法、矩阵运算，模型才能做推理。
          </p>
          <div class="mt-4 rounded-2xl bg-white/80 px-4 py-3 text-sm text-sky-800 ring-1 ring-sky-100 dark:bg-neutral-900/60 dark:text-sky-200 dark:ring-sky-400/10">
            所谓电子流动，就是 token 的生成底层是芯片电路在工作。
          </div>
        </div>
        <div class="rounded-3xl border border-violet-200/70 bg-gradient-to-br from-violet-50 to-white p-5 shadow-sm dark:border-violet-400/20 dark:from-violet-500/10 dark:to-neutral-950">
          <div class="mb-3 inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">02</div>
          <h3 class="text-base font-semibold text-violet-900 dark:text-violet-100">能量转化为计算</h3>
          <p class="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            电能进入 GPU、CPU、内存、网络设备后，不是白白消失，而是被用来完成计算任务。比如模型要判断下一个 token 最可能是什么，就要做大量数学运算。
          </p>
          <div class="mt-4 rounded-2xl bg-white/80 px-4 py-3 text-sm text-violet-800 ring-1 ring-violet-100 dark:bg-neutral-900/60 dark:text-violet-200 dark:ring-violet-400/10">
            电能被转成了算力，算力再转成模型输出。
          </div>
        </div>
        <div class="rounded-3xl border border-rose-200/70 bg-gradient-to-br from-rose-50 to-white p-5 shadow-sm dark:border-rose-400/20 dark:from-rose-500/10 dark:to-neutral-950">
          <div class="mb-3 inline-flex rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-rose-700 dark:bg-rose-500/15 dark:text-rose-300">03</div>
          <h3 class="text-base font-semibold text-rose-900 dark:text-rose-100">热量管理</h3>
          <p class="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            只要芯片高速运算，就会发热。如果热量散不出去，芯片就会降频、出错，甚至损坏，所以数据中心必须配套风冷、液冷、空调系统和热交换系统。
          </p>
          <div class="mt-4 flex flex-wrap gap-2 text-xs">
            <span class="rounded-full bg-rose-100 px-3 py-1 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300">风冷</span>
            <span class="rounded-full bg-orange-100 px-3 py-1 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300">液冷</span>
            <span class="rounded-full bg-pink-100 px-3 py-1 text-pink-700 dark:bg-pink-500/15 dark:text-pink-300">空调系统</span>
            <span class="rounded-full bg-red-100 px-3 py-1 text-red-700 dark:bg-red-500/15 dark:text-red-300">热交换系统</span>
          </div>
          <div class="mt-4 rounded-2xl bg-white/80 px-4 py-3 text-sm text-rose-800 ring-1 ring-rose-100 dark:bg-neutral-900/60 dark:text-rose-200 dark:ring-rose-400/10">
            token 不只是算出来的，也是在散热系统保障下稳定产出的。
          </div>
        </div>
      </div>

      <div class="mt-5 rounded-3xl border border-neutral-200/70 bg-white/70 p-5 dark:border-neutral-800/80 dark:bg-neutral-900/60">
        <p class="mb-4 text-center text-sm font-medium text-neutral-700 dark:text-neutral-300">用一条链路看，可以理解成：</p>
        <div class="flex flex-wrap items-center justify-center gap-3 text-center">
          <div class="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">发电</div>
          <div class="text-neutral-300 dark:text-neutral-700">→</div>
          <div class="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-300">供电</div>
          <div class="text-neutral-300 dark:text-neutral-700">→</div>
          <div class="rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">芯片通电</div>
          <div class="text-neutral-300 dark:text-neutral-700">→</div>
          <div class="rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300">电子运动</div>
          <div class="text-neutral-300 dark:text-neutral-700">→</div>
          <div class="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">执行计算</div>
          <div class="text-neutral-300 dark:text-neutral-700">→</div>
          <div class="rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700 dark:bg-rose-500/15 dark:text-rose-300">产生热量</div>
          <div class="text-neutral-300 dark:text-neutral-700">→</div>
          <div class="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700 dark:bg-orange-500/15 dark:text-orange-300">散热降温</div>
          <div class="text-neutral-300 dark:text-neutral-700">→</div>
          <div class="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">输出下一个 token</div>
        </div>
        <p class="mt-4 text-center text-sm leading-7 text-neutral-500 dark:text-neutral-400">
          所以你打一句话给 AI，表面上是语言交互，本质上是一次复杂的物理和工程过程。
        </p>
      </div>
    </div>

    <p class="text-pink-400">❗ AI 输出的每一个 token 背后都要消耗真实电力，占用真实芯片，产生真实热量，都是电力驱动硬件计算、并在散热系统保障下完成的一次物理产物。</p>

    <ul>
      <li><strong>在这一层面之下，没有抽象层。能源是 AI 基础设施的首要原则，也是制约系统能产生多少智能的瓶颈因素</strong></li>
    </ul>

    <p class="text-neutral-400">AI 的智能能力虽然表面上看由模型决定，但模型要运行起来，必须靠算力；算力要持续输出，必须靠能源支撑。没有足够电力，芯片跑不起来；电力太贵，推理和训练成本就会很高；供电和散热跟不上，再强的模型也无法大规模部署。所以，AI 的上限，不只由算法决定，也被电力和能源基础设施决定。</p>
  </div>
</template>
