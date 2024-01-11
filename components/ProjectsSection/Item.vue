<template>
  <article
    class="bg-[#1c1c1c] rounded-md flex flex-col items-center gap-5 p-5 border border-[#2d2d2d] cursor-pointer hover:border-[#4c4c4c] transition-colors"
  >
    <div class="w-full flex items-center justify-end gap-5">
      <a
        :href="project.github"
        class="text-[#bbbbbb] hover:text-[#ededed] transition-colors"
      >
        <Icon class="text-2xl" name="uil:github" />
      </a>
      <a
        :href="project.url"
        class="text-[#bbbbbb] hover:text-[#ededed] transition-colors"
      >
        <Icon class="text-2xl" name="uil:link" />
      </a>
    </div>
    <h3 class="text-lg">{{ project.name }}</h3>
    <ul class="w-full flex items-center justify-center gap-3">
      <li
        class="font-light text-[#bbbbbb]"
        v-for="(skill, n) in project.skills"
        :key="n"
      >
        {{ skill }}
      </li>
    </ul>
  </article>
</template>

<script setup>
const { project } = defineProps(["project"]);
</script>
