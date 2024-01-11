<template>
  <div
    class="HeroSectionGlowing relative max-w-[700px] h-[100px] m-auto origin-right even:origin-left"
    v-for="i in [1, 2, 3, 4]"
    :key="i"
  >
    <span
      v-for="i in [1, 2, 3]"
      :key="i"
      :class="`
        absolute top-[${80 * i}px] bottom-[${80 * i}px] right-[${
        80 * i
      }px] left-[${80 * i}px]
      `"
      :style="`--i: ${i}`"
    ></span>
  </div>
</template>

<style lang="scss" scoped>
.HeroSectionGlowing {
  animation: colorChange 5s linear infinite;
  span {
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: -8px;
      width: 15px;
      height: 15px;
      background: #f00;
      border-radius: 50%;
    }
    &:nth-child(3n + 1) {
      animation: animate 10s alternate infinite;
      &::before {
        background: rgba(134, 255, 0, 1);
        box-shadow: 0 0 20px rgba(134, 255, 0, 1), 0 0 40px rgba(134, 255, 0, 1),
          0 0 60px rgba(134, 255, 0, 1), 0 0 80px rgba(134, 255, 0, 1),
          0 0 0 8px rgba(134, 255, 0, 0.1);
      }
    }
    &:nth-child(3n + 2) {
      animation: animate-reverse 3s alternate infinite;
      &::before {
        background: rgba(255, 214, 0, 1);
        box-shadow: 0 0 20px rgba(255, 214, 0, 1), 0 0 40px rgba(255, 214, 0, 1),
          0 0 60px rgba(255, 214, 0, 1), 0 0 80px rgba(255, 214, 0, 1),
          0 0 0 8px rgba(255, 214, 0, 0.1);
      }
    }
    &:nth-child(3n + 3) {
      animation: animate 8s alternate infinite;
      &::before {
        background: rgba(0, 226, 255, 1);
        box-shadow: 0 0 20px rgba(0, 226, 255, 1), 0 0 40px rgba(0, 226, 255, 1),
          0 0 60px rgba(0, 226, 255, 1), 0 0 80px rgba(0, 226, 255, 1),
          0 0 0 8px rgba(0, 226, 255, 0.1);
      }
    }
  }
}
@keyframes colorChange {
  0% {
    filter: hue-rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes animate {
  0% {
    transform: rotate(180deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes animate-reverse {
  0% {
    transform: rotate(360deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
