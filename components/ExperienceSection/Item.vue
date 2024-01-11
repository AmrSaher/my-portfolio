<template>
  <li
    class="ExperienceSectionItem flex items-start justify-between max-sm:flex-col max-sm:gap-2"
  >
    <span class="w-[15%] text-[#bbbbbb] font-light text-nowrap"
      >{{ job.from }} - {{ job.to }}</span
    >
    <div class="w-[85%] flex flex-col gap-2">
      <h3>{{ job.companyName }} - {{ job.position }}</h3>
      <p class="text-[#bbbbbb] font-light">{{ job.description }}</p>
      <ul class="flex flex-wrap gap-3 w-full">
        <SkillsSectionItem
          v-for="(skill, n) in job.skills"
          :key="n"
          :text="skill"
          :is-colored="true"
        />
      </ul>
    </div>
  </li>
</template>

<script setup>
const { job } = defineProps(["job"]);
</script>
