<template>
  <header
    class="Header fixed top-8 max-sm:top-4 left-[50%] -translate-x-1/2 px-3 h-[60px] rounded-[2rem] flex items-center text-[#ffffffe5] z-30 transition-[background] max-sm:scale-y-[70%] max-sm:scale-x-[60%]"
    :class="{
      'border border-[#404040b5] bg-[#72727233] backdrop-blur-sm': showBg,
    }"
  >
    <nav class="w-full">
      <span
        class="w-[100px] h-[40px] rounded-3xl bg-[#4f4f4f66] absolute -z-10 transition-all"
        :style="`left: ${sliderX}px`"
      ></span>
      <ul class="w-full flex items-center gap-3">
        <li class="w-[100px] h-[40px] flex items-center justify-center">
          <a href="#" @click="navigate(1)">Home</a>
        </li>
        <li class="w-[100px] h-[40px] flex items-center justify-center">
          <a href="#about" @click="navigate(2)">About</a>
        </li>
        <li class="w-[100px] h-[40px] flex items-center justify-center">
          <a href="#skills" @click="navigate(3)">Skills</a>
        </li>
        <li class="w-[100px] h-[40px] flex items-center justify-center">
          <a href="#experience" @click="navigate(4)">Experience</a>
        </li>
        <li class="w-[100px] h-[40px] flex items-center justify-center">
          <a href="#projects" @click="navigate(5)">Projects</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
const sliderX = ref(12);
const showBg = ref(false);

// Highlight active links
const navigate = (n) => {
  sliderX.value = 12 + (n - 1) * 112;
};

// Show header after scrolling
onMounted(() => {
  window.addEventListener("scroll", () => {
    showBg.value = window.scrollY > 6;
  });
});
</script>
