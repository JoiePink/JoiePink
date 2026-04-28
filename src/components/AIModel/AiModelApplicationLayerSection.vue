<template>
  <div>
    <ul>
      <li>
        <strong>
          最上层是应用层，经济价值在此产生，比如药物研发平台、工业机器人、法律助手、自动驾驶汽车等。
        </strong>
      </li>
    </ul>

    <p class="text-neutral-400">
      同样的底层架构（能源→芯片→基础设施→模型），在不同场景里会被“包装”为不同的产品与系统，最终以应用的形式进入真实世界并产生价值。
    </p>

    <div
      class="my-8 overflow-hidden rounded-[28px] border border-neutral-200/70 bg-gradient-to-br from-white via-emerald-50/30 to-amber-50/30 p-6 shadow-[0_18px_60px_-28px_rgba(15,23,42,0.25)] dark:border-neutral-800/80 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      <div class="mb-5 text-center">
        <p class="text-xs uppercase tracking-[0.28em] text-neutral-400">Application Layer</p>
        <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">价值不是“在云里”，而是在具体应用里被兑现。</p>
      </div>

      <div class="rounded-3xl border border-neutral-200/70 bg-white/70 p-5 dark:border-neutral-800/80 dark:bg-neutral-900/60">
        <p class="mb-4 text-center text-sm font-medium text-neutral-700 dark:text-neutral-300">
          从同一套架构到不同成果，可以画成这样一条链路：
        </p>
        <div class="flex flex-wrap items-center justify-center gap-3 text-center">
          <div
            class="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-500/15 dark:text-slate-300">
            五层架构</div>
          <div class="text-neutral-300 dark:text-neutral-700">→</div>
          <div
            class="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">
            场景约束</div>
          <div class="text-neutral-300 dark:text-neutral-700">+</div>
          <div
            class="rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">
            产品形态</div>
          <div class="text-neutral-300 dark:text-neutral-700">→</div>
          <div
            class="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
            真实应用</div>
          <div class="text-neutral-300 dark:text-neutral-700">→</div>
          <div
            class="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
            经济价值</div>
        </div>
      </div>

      <div class="mt-5 grid gap-4 md:grid-cols-2">
        <div
          class="rounded-3xl border border-sky-200/70 bg-gradient-to-br from-sky-50 to-white p-5 shadow-sm dark:border-sky-400/20 dark:from-sky-500/10 dark:to-neutral-950">
          <div
            class="mb-3 inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">
            机器应用</div>
          <h3 class="text-base font-semibold text-sky-900 dark:text-sky-100">自动驾驶汽车</h3>
          <p class="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            自动驾驶是 AI “机器应用”的具体表现：系统要在道路环境中持续感知、预测与决策，并把决策转化为对车辆的控制。
          </p>
          <div class="mt-4 flex flex-wrap gap-2 text-xs">
            <span class="rounded-full bg-sky-100 px-3 py-1 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">感知</span>
            <span class="rounded-full bg-cyan-100 px-3 py-1 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300">规划</span>
            <span class="rounded-full bg-indigo-100 px-3 py-1 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300">控制</span>
            <span class="rounded-full bg-violet-100 px-3 py-1 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">安全约束</span>
          </div>
        </div>

        <div
          class="rounded-3xl border border-rose-200/70 bg-gradient-to-br from-rose-50 to-white p-5 shadow-sm dark:border-rose-400/20 dark:from-rose-500/10 dark:to-neutral-950">
          <div
            class="mb-3 inline-flex rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-rose-700 dark:bg-rose-500/15 dark:text-rose-300">
            具身应用</div>
          <h3 class="text-base font-semibold text-rose-900 dark:text-rose-100">人形机器人</h3>
          <p class="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            人形机器人是 AI “具身应用”的具体表现：模型不仅要理解指令，还要在物理世界里完成动作、保持稳定，并通过反馈不断调整。
          </p>
          <div class="mt-4 flex flex-wrap gap-2 text-xs">
            <span class="rounded-full bg-rose-100 px-3 py-1 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300">感知</span>
            <span class="rounded-full bg-pink-100 px-3 py-1 text-pink-700 dark:bg-pink-500/15 dark:text-pink-300">动作</span>
            <span class="rounded-full bg-fuchsia-100 px-3 py-1 text-fuchsia-700 dark:bg-fuchsia-500/15 dark:text-fuchsia-300">闭环反馈</span>
            <span class="rounded-full bg-orange-100 px-3 py-1 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300">现实约束</span>
          </div>
        </div>
      </div>

      <div
        class="mt-5 rounded-3xl border border-neutral-200/70 bg-white/70 p-5 dark:border-neutral-800/80 dark:bg-neutral-900/60">
        <p class="mb-3 text-center text-sm font-medium text-neutral-700 dark:text-neutral-300">
          同一套架构，也能在不同领域开花结果：
        </p>
        <div class="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div
            class="rounded-3xl border border-emerald-200/70 bg-gradient-to-br from-emerald-50 to-white p-5 shadow-sm dark:border-emerald-400/20 dark:from-emerald-500/10 dark:to-neutral-950">
            <h3 class="text-base font-semibold text-emerald-900 dark:text-emerald-100">科研 / 生物医药</h3>
            <div class="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <div class="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-emerald-100 dark:bg-neutral-900/60 dark:ring-emerald-400/10">
                <div class="font-semibold text-emerald-900 dark:text-emerald-100">药物研发平台</div>
                <div class="mt-1 leading-7">把“靶点/疾病 → 候选分子 → 实验结果”串成流程，做检索、生成、打分与实验决策辅助，加快研发迭代。</div>
              </div>
              <div class="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-teal-100 dark:bg-neutral-900/60 dark:ring-teal-400/10">
                <div class="font-semibold text-teal-900 dark:text-teal-100">蛋白质结构预测</div>
                <div class="mt-1 leading-7">输入氨基酸序列，预测三维结构/相互作用，帮助理解功能、设计突变与筛选潜在药物结合位点。</div>
              </div>
              <div class="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-cyan-100 dark:bg-neutral-900/60 dark:ring-cyan-400/10">
                <div class="font-semibold text-cyan-900 dark:text-cyan-100">分子生成 / 筛选</div>
                <div class="mt-1 leading-7">自动提出新分子结构，并根据溶解性、毒性、合成可行性等指标打分，缩小“要做实验的候选集合”。</div>
              </div>
              <div class="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-sky-100 dark:bg-neutral-900/60 dark:ring-sky-400/10">
                <div class="font-semibold text-sky-900 dark:text-sky-100">文献与实验助手</div>
                <div class="mt-1 leading-7">从论文/报告里抽取结论、对比方法、生成实验方案与记录模板，减少研究人员在信息整理上的时间。</div>
              </div>
            </div>
          </div>

          <div
            class="rounded-3xl border border-sky-200/70 bg-gradient-to-br from-sky-50 to-white p-5 shadow-sm dark:border-sky-400/20 dark:from-sky-500/10 dark:to-neutral-950">
            <h3 class="text-base font-semibold text-sky-900 dark:text-sky-100">企业效率（ToB）</h3>
            <div class="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <div class="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-sky-100 dark:bg-neutral-900/60 dark:ring-sky-400/10">
                <div class="font-semibold text-sky-900 dark:text-sky-100">客服/工单助手</div>
                <div class="mt-1 leading-7">理解用户问题、自动分类与路由，基于知识库生成建议回复/排障步骤，并把对话转成结构化工单字段。</div>
              </div>
              <div class="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-indigo-100 dark:bg-neutral-900/60 dark:ring-indigo-400/10">
                <div class="font-semibold text-indigo-900 dark:text-indigo-100">会议纪要与总结</div>
                <div class="mt-1 leading-7">从录音/字幕提炼议题、结论、风险点与待办（谁/何时/做什么），让“会议产出”可追踪、可执行。</div>
              </div>
              <div class="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-violet-100 dark:bg-neutral-900/60 dark:ring-violet-400/10">
                <div class="font-semibold text-violet-900 dark:text-violet-100">企业知识库问答</div>
                <div class="mt-1 leading-7">把制度、文档、SOP、历史案例变成可问可答的入口，支持引用来源、权限控制与面向岗位的答案风格。</div>
              </div>
              <div class="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-fuchsia-100 dark:bg-neutral-900/60 dark:ring-fuchsia-400/10">
                <div class="font-semibold text-fuchsia-900 dark:text-fuchsia-100">代码助手 / Copilot</div>
                <div class="mt-1 leading-7">根据上下文补全代码、生成单测、解释报错与重构建议，降低重复劳动并提升交付速度（需要配合代码规范与评审）。</div>
              </div>
            </div>
          </div>

          <div
            class="rounded-3xl border border-violet-200/70 bg-gradient-to-br from-violet-50 to-white p-5 shadow-sm dark:border-violet-400/20 dark:from-violet-500/10 dark:to-neutral-950">
            <h3 class="text-base font-semibold text-violet-900 dark:text-violet-100">法律 / 金融 / 医疗</h3>
            <div class="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <div class="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-violet-100 dark:bg-neutral-900/60 dark:ring-violet-400/10">
                <div class="font-semibold text-violet-900 dark:text-violet-100">法律助手</div>
                <div class="mt-1 leading-7">检索法规/判例、归纳争点、生成法律文书草稿与答复要点，但最终结论仍需专业人士把关。</div>
              </div>
              <div class="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-purple-100 dark:bg-neutral-900/60 dark:ring-purple-400/10">
                <div class="font-semibold text-purple-900 dark:text-purple-100">合同审阅</div>
                <div class="mt-1 leading-7">对条款做风险标注（违约/赔偿/保密/交付/管辖等），给出修改建议与对比版本，提升审阅速度与一致性。</div>
              </div>
              <div class="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-fuchsia-100 dark:bg-neutral-900/60 dark:ring-fuchsia-400/10">
                <div class="font-semibold text-fuchsia-900 dark:text-fuchsia-100">投研/风控辅助</div>
                <div class="mt-1 leading-7">整理财报、新闻与研报，提炼变量与假设，生成情景分析；在风控上做预警与解释性摘要（不等同于自动交易）。</div>
              </div>
              <div class="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-pink-100 dark:bg-neutral-900/60 dark:ring-pink-400/10">
                <div class="font-semibold text-pink-900 dark:text-pink-100">医学影像/病历助理</div>
                <div class="mt-1 leading-7">对影像做初筛提示、对病历做结构化归纳与随访建议草稿，帮助医生减负，但诊断与处方必须由医生负责。</div>
              </div>
            </div>
          </div>

          <div
            class="rounded-3xl border border-amber-200/70 bg-gradient-to-br from-amber-50 to-white p-5 shadow-sm dark:border-amber-400/20 dark:from-amber-500/10 dark:to-neutral-950">
            <h3 class="text-base font-semibold text-amber-900 dark:text-amber-100">内容与创作（ToC）</h3>
            <div class="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <div class="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-amber-100 dark:bg-neutral-900/60 dark:ring-amber-400/10">
                <div class="font-semibold text-amber-900 dark:text-amber-100">写作/改写/润色</div>
                <div class="mt-1 leading-7">根据目的与受众生成初稿，调整语气与结构，做标题/摘要/要点提炼；也能把口语内容整理成文章。</div>
              </div>
              <div class="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-orange-100 dark:bg-neutral-900/60 dark:ring-orange-400/10">
                <div class="font-semibold text-orange-900 dark:text-orange-100">短视频脚本</div>
                <div class="mt-1 leading-7">给出分镜、台词、节奏点与转场建议，按“开头吸引—铺垫—高潮—收尾”结构组织内容，提高可拍性。</div>
              </div>
              <div class="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-rose-100 dark:bg-neutral-900/60 dark:ring-rose-400/10">
                <div class="font-semibold text-rose-900 dark:text-rose-100">图像生成</div>
                <div class="mt-1 leading-7">用提示词生成海报/插画/素材图，支持风格一致性与局部重绘，常用于电商图、设计草案与内容配图。</div>
              </div>
              <div class="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-pink-100 dark:bg-neutral-900/60 dark:ring-pink-400/10">
                <div class="font-semibold text-pink-900 dark:text-pink-100">配音/音频生成</div>
                <div class="mt-1 leading-7">把文本变成语音，或做配音与音色迁移，适合播客、有声书、视频旁白与多语言本地化。</div>
              </div>
            </div>
          </div>

          <div
            class="rounded-3xl border border-rose-200/70 bg-gradient-to-br from-rose-50 to-white p-5 shadow-sm dark:border-rose-400/20 dark:from-rose-500/10 dark:to-neutral-950">
            <h3 class="text-base font-semibold text-rose-900 dark:text-rose-100">制造业 / 工业现场</h3>
            <div class="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <div class="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-rose-100 dark:bg-neutral-900/60 dark:ring-rose-400/10">
                <div class="font-semibold text-rose-900 dark:text-rose-100">工业机器人</div>
                <div class="mt-1 leading-7">在装配、搬运、焊接、喷涂等任务中提升自动化程度；AI 让它更“会看、会判断”，而不只是按固定轨迹重复动作。</div>
              </div>
              <div class="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-red-100 dark:bg-neutral-900/60 dark:ring-red-400/10">
                <div class="font-semibold text-red-900 dark:text-red-100">质检视觉</div>
                <div class="mt-1 leading-7">用相机/传感器识别瑕疵、缺陷与尺寸偏差，输出合格/不合格与缺陷类型，减少漏检并提升一致性。</div>
              </div>
              <div class="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-orange-100 dark:bg-neutral-900/60 dark:ring-orange-400/10">
                <div class="font-semibold text-orange-900 dark:text-orange-100">预测性维护</div>
                <div class="mt-1 leading-7">根据振动、温度、电流等时序数据预测故障概率与剩余寿命，提前安排检修与备件，降低停机损失。</div>
              </div>
              <div class="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-amber-100 dark:bg-neutral-900/60 dark:ring-amber-400/10">
                <div class="font-semibold text-amber-900 dark:text-amber-100">数字孪生/仿真</div>
                <div class="mt-1 leading-7">用可计算的“虚拟工厂/虚拟产线”做布局、节拍与能耗优化，在真实改造前先在仿真里验证方案。</div>
              </div>
            </div>
          </div>

          <div
            class="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-slate-50 to-white p-5 shadow-sm dark:border-slate-400/20 dark:from-slate-500/10 dark:to-neutral-950">
            <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100">具身 / 交通与城市</h3>
            <div class="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <div class="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-slate-100 dark:bg-neutral-900/60 dark:ring-slate-400/10">
                <div class="font-semibold text-slate-900 dark:text-slate-100">自动驾驶</div>
                <div class="mt-1 leading-7">把道路环境（车道线、行人、车辆、信号灯）转成决策与控制指令，在复杂交通场景中做到安全、舒适与高可用。</div>
              </div>
              <div class="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-zinc-100 dark:bg-neutral-900/60 dark:ring-zinc-400/10">
                <div class="font-semibold text-zinc-900 dark:text-zinc-100">人形机器人</div>
                <div class="mt-1 leading-7">在真实世界执行多样任务（抓取、搬运、开门、整理等），强调通用性与“人类环境兼容”，难点在平衡控制与安全。</div>
              </div>
              <div class="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-gray-100 dark:bg-neutral-900/60 dark:ring-gray-400/10">
                <div class="font-semibold text-gray-900 dark:text-gray-100">仓储/配送机器人</div>
                <div class="mt-1 leading-7">在仓库/园区做路径规划、避障与任务分配，实现拣货、搬运、末端配送等，提高周转效率并降低人工强度。</div>
              </div>
              <div class="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-stone-100 dark:bg-neutral-900/60 dark:ring-stone-400/10">
                <div class="font-semibold text-stone-900 dark:text-stone-100">智能交通调度</div>
                <div class="mt-1 leading-7">融合路网数据、实时流量与事件信息，优化信号灯配时、车队调度与拥堵预警，提升整体通行效率。</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

