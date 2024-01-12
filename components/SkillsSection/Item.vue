<template>
  <li
    class="SkillsSectionItem text-sm font-light text-[#bbbbbb] px-2 py-1 border border-[#333333] bg-[#232323] rounded-sm"
    :style="
      isColored
        ? 'border-color: #5fe9d6; color: #5fe9d6; background: #5fe9d61a;'
        : ''
    "
  >
    {{ text }}
  </li>
</template>

<script setup>
const { text, isColored } = defineProps(["text", "isColored"]);
</script>
