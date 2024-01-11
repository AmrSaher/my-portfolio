<template>
  <section class="MainSection py-8">
    <UIContainer>
      <h2 class="text-2xl mb-5">{{ title }}</h2>
      <div class="w-full">
        <slot />
      </div>
    </UIContainer>
  </section>
</template>

<script setup>
const { title } = defineProps(["title"]);
</script>
