<template>
  <section
    class="HeroSection min-h-[550px] overflow-hidden relative max-sm:min-h-[450px]"
  >
    <HeroSectionGlowing />
    <div
      class="absolute top-[50%] -translate-y-1/2 w-full flex flex-col items-center text-center z-20 max-sm:top-[60%]"
    >
      <h1
        class="text-7xl flex flex-col items-center gap-3 mb-5 max-sm:text-4xl"
      >
        <span>Hi. I'm Amr.</span>
        <span class="position">A .NET Developer.</span>
      </h1>
      <p
        class="text-lg font-light text-[#bbbbbb] tracking-wider max-w-[750px] max-sm:text-base px-4"
      >
        Passionate software engineer dedicated to crafting elegant and efficient
        solutions that transcend code, turning complex challenges into seamless
        experiences.
      </p>
    </div>
    <div
      class="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#131313] to-transparent z-10"
    ></div>
  </section>
</template>

<style lang="scss" scoped>
.position {
  background: -webkit-linear-gradient(#5fe9d6, #0e949e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
