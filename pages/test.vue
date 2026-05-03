<template>
  <!--
    Source: Mr.Love 优惠券「无门槛」
    https://www.figma.com/design/8FT2WPlUUAdlgkbziff2iM/Mr.Love--%E5%B0%8F%E7%A8%8B%E5%BA%8F--%E6%9C%80%E7%BB%88---%E6%8F%90%E4%BE%9B%E6%95%88%E6%9E%9C%E5%9B%BE-?node-id=5458-2942
  -->
  <div
    class=" coupon-root box-border w-[300px] py-[8px] px-[12.8px] antialiased select-none"
    data-node-id="5458:2942"
  >
    <div class="relative h-[80px] w-full shrink-0 overflow-hidden rounded-[8px] bg-white">
      <!-- 分割线 + 检票口刻度（SVG 资源，与原稿一致） -->
      <div
        class="absolute left-[190.4px] top-0 h-[80px] w-[18.4px]"
        data-node-id="5458:2945"
      >
        <div class="absolute inset-[-10.69%_0_-10.31%_0]">
          <img
            alt=""
            class="block max-w-none h-full w-full"
            src="/coupon-divider-frame2036082466.svg"
          />
        </div>
      </div>

      <p
        class="-translate-x-1/2 absolute left-[236.9px] top-[calc(50%-6.4px)] text-center whitespace-nowrap text-[11.2px] leading-[12.8px] font-normal not-italic text-[#1b1b1b] tracking-[-0.2px]"
        data-node-id="5458:2949"
      >
        立即收下
      </p>

      <div
        class="absolute left-[22.2px] top-[24.8px] flex shrink-0 items-baseline whitespace-nowrap text-[#1b1b1b]"
        data-node-id="5458:2950"
      >
        <span
          class="relative shrink-0 text-[8.8px] font-normal leading-none not-italic"
          data-node-id="5458:2952"
        >
          ￥
        </span>
        <span
          class="price-num relative shrink-0 text-[25.6px] font-normal leading-none not-italic"
          data-node-id="5458:2953"
        >
          50
        </span>
      </div>

      <div
        class="absolute left-[79.2px] top-[16.8px] flex flex-col items-start gap-[4.8px] whitespace-nowrap"
        data-node-id="5458:2954"
      >
        <p
          class="relative shrink-0 text-[12.8px] leading-none font-normal not-italic text-[#1b1b1b]"
          data-node-id="5458:2955"
        >
          全品类立减
        </p>
        <div
          class="flex flex-col shrink-0 items-start text-[8.8px] leading-normal font-normal not-italic text-[rgba(0,0,0,0.5)]"
          data-node-id="5458:2956"
        >
          <span data-node-id="5458:2957">无门槛</span>
          <div class="relative flex shrink-0 items-start gap-[1.6px]" data-node-id="5458:2958">
            <span data-node-id="5458:2959">2025.09.08</span>
            <span data-node-id="5458:2960">-</span>
            <span data-node-id="5458:2961">2025.10.09</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.coupon-root {
  font-family: system-ui, -apple-system, 'PingFang SC', sans-serif;
}

/* 设计稿计价数字字体：SF UI Display Regular */
.price-num {
  font-family:
    ui-sans-serif,
    system-ui,
    sans-serif,
    'SF_UI_Display',
    'SF Pro Display',
    -apple-system;
}
</style>
