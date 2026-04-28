<template>
  <div>
    <ul>
      <li><strong>第二层是芯片。AI 模型的运行需要依赖芯片的计算能力。</strong></li>
    </ul>
    <p class="text-neutral-400">AI 模型本身只是算法和参数，真正让它“跑起来”的，是芯片提供的计算能力。电力是基础，但真正执行 AI 运算任务的是芯片。</p>

    <div
      class="my-8 overflow-hidden rounded-[28px] border border-neutral-200/70 bg-gradient-to-br from-white via-violet-50/40 to-cyan-50/40 p-6 shadow-[0_18px_60px_-28px_rgba(15,23,42,0.25)] dark:border-neutral-800/80 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      <div class="mb-5 text-center">
        <p class="text-xs uppercase tracking-[0.28em] text-neutral-400">How Chips Turn Energy Into Compute</p>
        <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">模型负责“怎么思考”，芯片负责“把这种思考算出来”。</p>
      </div>

      <div class="grid gap-4 md:grid-cols-3">
        <div
          class="rounded-3xl border border-sky-200/70 bg-gradient-to-br from-sky-50 to-white p-5 shadow-sm dark:border-sky-400/20 dark:from-sky-500/10 dark:to-neutral-950">
          <div
            class="mb-3 inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">
            01</div>
          <h3 class="text-base font-semibold text-sky-900 dark:text-sky-100">模型要做什么运算</h3>
          <div class="mt-4 grid grid-cols-2 gap-2 text-sm">
            <div class="rounded-2xl bg-sky-100/80 px-3 py-2 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">矩阵乘法
            </div>
            <div class="rounded-2xl bg-cyan-100/80 px-3 py-2 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300">向量计算
            </div>
            <div class="rounded-2xl bg-blue-100/80 px-3 py-2 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300">张量运算
            </div>
            <div
              class="rounded-2xl bg-indigo-100/80 px-3 py-2 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300">
              参数更新</div>
            <div
              class="rounded-2xl bg-violet-100/80 px-3 py-2 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">
              梯度计算</div>
            <div
              class="rounded-2xl bg-fuchsia-100/80 px-3 py-2 text-fuchsia-700 dark:bg-fuchsia-500/15 dark:text-fuchsia-300">
              概率预测</div>
            <div class="rounded-2xl bg-pink-100/80 px-3 py-2 text-pink-700 dark:bg-pink-500/15 dark:text-pink-300">注意力计算
            </div>
            <div class="rounded-2xl bg-rose-100/80 px-3 py-2 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300">缓存读写
            </div>
            <div
              class="rounded-2xl bg-purple-100/80 px-3 py-2 text-purple-700 dark:bg-purple-500/15 dark:text-purple-300">
              激活函数计算</div>
            <div class="rounded-2xl bg-slate-100/80 px-3 py-2 text-slate-700 dark:bg-slate-500/15 dark:text-slate-300">
              ……</div>
          </div>
          <div
            class="mt-4 rounded-2xl bg-white/80 px-4 py-3 text-sm text-sky-800 ring-1 ring-sky-100 dark:bg-neutral-900/60 dark:text-sky-200 dark:ring-sky-400/10">
            这些都不是“概念上的思考”，而是必须由硬件完成的大量数学运算。
          </div>
        </div>

        <div
          class="rounded-3xl border border-violet-200/70 bg-gradient-to-br from-violet-50 to-white p-5 shadow-sm dark:border-violet-400/20 dark:from-violet-500/10 dark:to-neutral-950">
          <div
            class="mb-3 inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">
            02</div>
          <h3 class="text-base font-semibold text-violet-900 dark:text-violet-100">是谁把它算出来</h3>
          <div class="mt-4 space-y-2 text-sm">
            <div
              class="rounded-2xl bg-violet-100/80 px-4 py-3 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">
              GPU: 并行计算主力，训练和推理最常见</div>
            <div
              class="rounded-2xl bg-fuchsia-100/80 px-4 py-3 text-fuchsia-700 dark:bg-fuchsia-500/15 dark:text-fuchsia-300">
              NPU: 面向 AI 场景优化的专用处理器</div>
            <div class="rounded-2xl bg-pink-100/80 px-4 py-3 text-pink-700 dark:bg-pink-500/15 dark:text-pink-300">TPU:
              为大规模机器学习设计的专用芯片</div>
            <div
              class="rounded-2xl bg-purple-100/80 px-4 py-3 text-purple-700 dark:bg-purple-500/15 dark:text-purple-300">
              CPU: 也能执行，但通常效率不如专门 AI 芯片</div>
          </div>
          <div
            class="mt-4 rounded-2xl bg-white/80 px-4 py-3 text-sm text-violet-800 ring-1 ring-violet-100 dark:bg-neutral-900/60 dark:text-violet-200 dark:ring-violet-400/10">
            模型决定“怎么思考”，芯片决定“能不能及时把它算完”。
          </div>
        </div>

        <div
          class="rounded-3xl border border-rose-200/70 bg-gradient-to-br from-rose-50 to-white p-5 shadow-sm dark:border-rose-400/20 dark:from-rose-500/10 dark:to-neutral-950">
          <div
            class="mb-3 inline-flex rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-rose-700 dark:bg-rose-500/15 dark:text-rose-300">
            03</div>
          <h3 class="text-base font-semibold text-rose-900 dark:text-rose-100">为什么说它是依赖</h3>
          <div class="mt-4 flex flex-wrap gap-2 text-xs">
            <span
              class="rounded-full bg-rose-100 px-3 py-1 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300">训练会变慢</span>
            <span
              class="rounded-full bg-orange-100 px-3 py-1 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300">推理会卡顿</span>
            <span
              class="rounded-full bg-pink-100 px-3 py-1 text-pink-700 dark:bg-pink-500/15 dark:text-pink-300">成本会变高</span>
            <span
              class="rounded-full bg-red-100 px-3 py-1 text-red-700 dark:bg-red-500/15 dark:text-red-300">大模型可能跑不起来</span>
          </div>
          <div
            class="mt-4 rounded-2xl bg-white/80 px-4 py-3 text-sm text-rose-800 ring-1 ring-rose-100 dark:bg-neutral-900/60 dark:text-rose-200 dark:ring-rose-400/10">
            同样一段回答，背后都要完成海量参数计算。芯片算力不够，部署和响应都会立刻受限。
          </div>
        </div>
      </div>

      <div
        class="mt-5 rounded-3xl border border-neutral-200/70 bg-white/70 p-5 dark:border-neutral-800/80 dark:bg-neutral-900/60">
        <p class="mb-4 text-center text-sm font-medium text-neutral-700 dark:text-neutral-300">把“能源层之上是芯片”画成一条链路，就是：</p>
        <div class="flex flex-wrap items-center justify-center gap-3 text-center">
          <div
            class="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
            电力输入</div>
          <div class="text-neutral-300 dark:text-neutral-700">→</div>
          <div
            class="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-300">
            芯片通电</div>
          <div class="text-neutral-300 dark:text-neutral-700">→</div>
          <div
            class="rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">
            执行矩阵/参数计算</div>
          <div class="text-neutral-300 dark:text-neutral-700">→</div>
          <div
            class="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">
            形成推理结果</div>
          <div class="text-neutral-300 dark:text-neutral-700">→</div>
          <div
            class="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
            输出 token</div>
        </div>
        <p class="mt-4 text-center text-sm leading-7 text-neutral-500 dark:text-neutral-400">
          所以“将能源高效转化为计算能力”说的就是：同样消耗电，更强、更先进的芯片能完成更多计算，并以更低成本支撑更大的模型。
        </p>
      </div>
    </div>

    <ul>
      <li><strong>AI 工作负载需要巨大的并行处理能力、高带宽内存和快速互连。</strong></li>
    </ul>

    <div
      class="my-8 overflow-hidden rounded-[28px] border border-neutral-200/70 bg-gradient-to-br from-white via-cyan-50/30 to-emerald-50/30 p-6 shadow-[0_18px_60px_-28px_rgba(15,23,42,0.25)] dark:border-neutral-800/80 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      <div class="mb-5 text-center">
        <p class="text-xs uppercase tracking-[0.28em] text-neutral-400">AI Workload Requirements</p>
        <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">AI 不是“单机慢慢算”的任务，而是“很多芯片一起算、很多数据快速流动”的任务。</p>
      </div>

      <div class="grid gap-4 md:grid-cols-3">
        <div
          class="rounded-3xl border border-sky-200/70 bg-gradient-to-br from-sky-50 to-white p-5 shadow-sm dark:border-sky-400/20 dark:from-sky-500/10 dark:to-neutral-950">
          <div
            class="mb-3 inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">
            01</div>
          <h3 class="text-base font-semibold text-sky-900 dark:text-sky-100">巨大的并行处理能力</h3>
          <p class="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            AI 的训练、推理、图像语音视频处理背后，都是海量、重复、同时发生的数学运算。这类任务适合让成千上万个计算单元一起工作，而不是一个接一个地算。
          </p>
          <div class="mt-4 flex flex-wrap gap-2 text-xs">
            <span
              class="rounded-full bg-sky-100 px-3 py-1 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">矩阵乘法</span>
            <span
              class="rounded-full bg-cyan-100 px-3 py-1 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300">向量运算</span>
            <span
              class="rounded-full bg-blue-100 px-3 py-1 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300">大量中间结果</span>
          </div>
          <div
            class="mt-4 rounded-2xl bg-white/80 px-4 py-3 text-sm text-sky-800 ring-1 ring-sky-100 dark:bg-neutral-900/60 dark:text-sky-200 dark:ring-sky-400/10">
            可以简单理解为：CPU 像少数几个很强的工人，GPU 像一大群同时干活的工人，AI 更需要后者。
          </div>
        </div>

        <div
          class="rounded-3xl border border-emerald-200/70 bg-gradient-to-br from-emerald-50 to-white p-5 shadow-sm dark:border-emerald-400/20 dark:from-emerald-500/10 dark:to-neutral-950">
          <div
            class="mb-3 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
            02</div>
          <h3 class="text-base font-semibold text-emerald-900 dark:text-emerald-100">高带宽内存</h3>
          <p class="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            芯片不仅要算得快，还要拿数据拿得快。模型参数、缓存和中间结果会被频繁读取与写回，如果显存和内存带宽不够，计算单元就会一直等数据。
          </p>
          <div class="mt-4 flex flex-wrap gap-2 text-xs">
            <span
              class="rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">参数读取</span>
            <span
              class="rounded-full bg-teal-100 px-3 py-1 text-teal-700 dark:bg-teal-500/15 dark:text-teal-300">缓存写回</span>
            <span
              class="rounded-full bg-green-100 px-3 py-1 text-green-700 dark:bg-green-500/15 dark:text-green-300">中间结果搬运</span>
          </div>
          <div
            class="mt-4 rounded-2xl bg-white/80 px-4 py-3 text-sm text-emerald-800 ring-1 ring-emerald-100 dark:bg-neutral-900/60 dark:text-emerald-200 dark:ring-emerald-400/10">
            所以 AI 系统不只是拼计算核心，也很拼显存容量和内存带宽；不然芯片再强，整体速度也会被拖慢。
          </div>
        </div>

        <div
          class="rounded-3xl border border-violet-200/70 bg-gradient-to-br from-violet-50 to-white p-5 shadow-sm dark:border-violet-400/20 dark:from-violet-500/10 dark:to-neutral-950">
          <div
            class="mb-3 inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">
            03</div>
          <h3 class="text-base font-semibold text-violet-900 dark:text-violet-100">快速互连</h3>
          <p class="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            大模型通常不是一张卡单独完成，而是多张 GPU、甚至多台服务器一起协同工作。它们之间必须高速交换参数和计算结果，否则多卡很多，整体提速也不明显。
          </p>
          <div class="mt-4 flex flex-wrap gap-2 text-xs">
            <span
              class="rounded-full bg-violet-100 px-3 py-1 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">多卡协同</span>
            <span
              class="rounded-full bg-fuchsia-100 px-3 py-1 text-fuchsia-700 dark:bg-fuchsia-500/15 dark:text-fuchsia-300">参数同步</span>
            <span
              class="rounded-full bg-pink-100 px-3 py-1 text-pink-700 dark:bg-pink-500/15 dark:text-pink-300">结果传递</span>
          </div>
          <div
            class="mt-4 rounded-2xl bg-white/80 px-4 py-3 text-sm text-violet-800 ring-1 ring-violet-100 dark:bg-neutral-900/60 dark:text-violet-200 dark:ring-violet-400/10">
            AI 集群不仅看单卡强不强，也看卡与卡、机器与机器之间连得快不快。
          </div>
        </div>
      </div>

      <div
        class="mt-5 rounded-3xl border border-neutral-200/70 bg-white/70 p-5 dark:border-neutral-800/80 dark:bg-neutral-900/60">
        <p class="mb-4 text-center text-sm font-medium text-neutral-700 dark:text-neutral-300">合起来看，就是一条“算力 + 数据流动 +
          集群协作”的链路：</p>
        <div class="flex flex-wrap items-center justify-center gap-3 text-center">
          <div
            class="rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">
            并行处理</div>
          <div class="text-neutral-300 dark:text-neutral-700">→</div>
          <div
            class="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
            高带宽内存</div>
          <div class="text-neutral-300 dark:text-neutral-700">→</div>
          <div
            class="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">
            快速互连</div>
          <div class="text-neutral-300 dark:text-neutral-700">→</div>
          <div
            class="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700 dark:bg-orange-500/15 dark:text-orange-300">
            高效训练与推理</div>
        </div>
        <p class="mt-4 text-center text-sm leading-7 text-neutral-500 dark:text-neutral-400">
          一句话说，就是：AI 要跑得快，不只是芯片算力要强，还必须让数据在芯片内部、内存之间、服务器之间都流得足够快。
        </p>
      </div>
    </div>
    <ul>
      <li><strong>芯片层的进展决定了 AI 的扩展速度以及智能的可适用性。</strong></li>
    </ul>

    <div class="my-8 overflow-hidden rounded-[28px] border border-neutral-200/70 bg-gradient-to-br from-white via-amber-50/30 to-lime-50/30 p-6 shadow-[0_18px_60px_-28px_rgba(15,23,42,0.25)] dark:border-neutral-800/80 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      <div class="mb-5 text-center">
        <p class="text-xs uppercase tracking-[0.28em] text-neutral-400">Why Chip Progress Matters</p>
        <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">芯片的性能、成本和能效，决定了 AI 能不能更快发展，并进入更多真实应用场景。</p>
      </div>

      <div class="grid gap-4 md:grid-cols-2">
        <div class="rounded-3xl border border-amber-200/70 bg-gradient-to-br from-amber-50 to-white p-5 shadow-sm dark:border-amber-400/20 dark:from-amber-500/10 dark:to-neutral-950">
          <div class="mb-3 inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">01</div>
          <h3 class="text-base font-semibold text-amber-900 dark:text-amber-100">决定 AI 的扩展速度</h3>
          <p class="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            这里的“扩展速度”，说的是 AI 从小模型走向大模型、从少量用户走向大规模应用的推进速度。芯片更强，训练更快、推理更便宜、部署规模更大，行业扩张也会更快。
          </p>
          <div class="mt-4 flex flex-wrap gap-2 text-xs">
            <span class="rounded-full bg-amber-100 px-3 py-1 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">训练更快</span>
            <span class="rounded-full bg-yellow-100 px-3 py-1 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-300">推理更便宜</span>
            <span class="rounded-full bg-orange-100 px-3 py-1 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300">部署规模更大</span>
            <span class="rounded-full bg-red-100 px-3 py-1 text-red-700 dark:bg-red-500/15 dark:text-red-300">服务更多用户</span>
          </div>
          <div class="mt-4 rounded-2xl bg-white/80 px-4 py-3 text-sm text-amber-800 ring-1 ring-amber-100 dark:bg-neutral-900/60 dark:text-amber-200 dark:ring-amber-400/10">
            芯片越先进，AI 从实验室走向大规模应用的速度就越快。
          </div>
        </div>

        <div class="rounded-3xl border border-lime-200/70 bg-gradient-to-br from-lime-50 to-white p-5 shadow-sm dark:border-lime-400/20 dark:from-lime-500/10 dark:to-neutral-950">
          <div class="mb-3 inline-flex rounded-full bg-lime-100 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-lime-700 dark:bg-lime-500/15 dark:text-lime-300">02</div>
          <h3 class="text-base font-semibold text-lime-900 dark:text-lime-100">决定智能的可适用性</h3>
          <p class="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            “可适用性”强调的不是 AI 能不能做，而是能不能在现实中好用、用得起、跑得动。芯片如果更强、更省电、更便宜，AI 就更容易进入更多真实场景。
          </p>
          <div class="mt-4 flex flex-wrap gap-2 text-xs">
            <span class="rounded-full bg-lime-100 px-3 py-1 text-lime-700 dark:bg-lime-500/15 dark:text-lime-300">手机</span>
            <span class="rounded-full bg-green-100 px-3 py-1 text-green-700 dark:bg-green-500/15 dark:text-green-300">汽车</span>
            <span class="rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">机器人</span>
            <span class="rounded-full bg-teal-100 px-3 py-1 text-teal-700 dark:bg-teal-500/15 dark:text-teal-300">摄像头</span>
            <span class="rounded-full bg-cyan-100 px-3 py-1 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300">工业设备</span>
            <span class="rounded-full bg-sky-100 px-3 py-1 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">边缘终端</span>
          </div>
          <div class="mt-4 rounded-2xl bg-white/80 px-4 py-3 text-sm text-lime-800 ring-1 ring-lime-100 dark:bg-neutral-900/60 dark:text-lime-200 dark:ring-lime-400/10">
            芯片进步决定的不只是 AI 能不能做出来，还决定它能不能普遍落地。
          </div>
        </div>
      </div>

      <div class="mt-5 rounded-3xl border border-neutral-200/70 bg-white/70 p-5 dark:border-neutral-800/80 dark:bg-neutral-900/60">
        <p class="mb-4 text-center text-sm font-medium text-neutral-700 dark:text-neutral-300">芯片层一旦突破，通常会同时带来：</p>
        <div class="flex flex-wrap items-center justify-center gap-3 text-center">
          <div class="rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">算得更快</div>
          <div class="text-neutral-300 dark:text-neutral-700">→</div>
          <div class="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">耗电更少</div>
          <div class="text-neutral-300 dark:text-neutral-700">→</div>
          <div class="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">成本更低</div>
          <div class="text-neutral-300 dark:text-neutral-700">→</div>
          <div class="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">体积更小</div>
          <div class="text-neutral-300 dark:text-neutral-700">→</div>
          <div class="rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700 dark:bg-rose-500/15 dark:text-rose-300">场景更多</div>
        </div>
        <p class="mt-4 text-center text-sm leading-7 text-neutral-500 dark:text-neutral-400">
          这也是为什么说：芯片进步决定 AI 扩张有多快，也决定 AI 最终能落地到哪里。
        </p>
      </div>
    </div>
  </div>
</template>
