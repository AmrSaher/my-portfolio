<template>
  <li class="ExperienceSectionItem flex items-start gap-3 max-sm:flex-col">
    <span
      class="w-[25%] text-[#bbbbbb] font-light text-nowrap tracking-wider max-sm:w-full"
      >{{ job.from }} - {{ job.to }}</span
    >
    <div class="w-full flex flex-col gap-2 max-sm:w-full">
      <h3 class="tracking-wider">{{ job.companyName }} - {{ job.position }}</h3>
      <p class="text-[#bbbbbb] font-light tracking-wider">
        {{ job.description }}
      </p>
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
