<template>
  <li
    class="SkillsSectionItem text-sm font-light text-[#bbbbbb] px-2 py-1 border border-[#333333] bg-[#232323] rounded-sm"
    :class="{
      'border-[#5fe9d6] text-[#5fe9d6] bg-[#5fe9d61a]': isColored,
    }"
  >
    {{ text }}
  </li>
</template>

<script setup>
const { text, isColored } = defineProps(["text", "isColored"]);
</script>
