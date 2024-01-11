<template>
  <li
    class="text-sm font-light text-[#bbbbbb] px-2 py-1 border border-[#333333] bg-[#232323] rounded-sm"
  >
    {{ text }}
  </li>
</template>

<script setup>
const { text } = defineProps(["text"]);
</script>
