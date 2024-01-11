<template>
  <MainSection title="Skills">
    <ul class="flex gap-2 flex-wrap items-center w-full">
      <SkillsSectionItem v-for="(skill, n) in skills" :key="n" :text="skill" />
    </ul>
  </MainSection>
</template>

<script setup>
const skills = ref([
  "PHP",
  "Laravel",
  "MySql",
  "SQL",
  ".NET Framework",
  "C#",
  "LINQ",
  "Entity Framework",
  "ASP.NET Core",
  "MVC Design Pattern",
  "Dependency Injection",
  "OOP",
  "HTML",
  "CSS",
  "JavaScript",
  "Sass",
  "Tailwind CSS",
  "Vue.js",
  "Nuxt.js",
  "Vuex",
  "Pinia",
]);
</script>
