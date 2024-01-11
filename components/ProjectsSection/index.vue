<template>
  <MainSection class="ProjectsSection" title="Projects">
    <div class="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
      <ProjectsSectionItem
        v-for="(project, n) in projects"
        :key="n"
        :project="project"
      />
    </div>
  </MainSection>
</template>

<script setup>
const projects = ref([
  {
    github: "",
    url: "",
    name: "TIC TAC TOE",
    skills: ["HTML", "CSS"],
  },
]);
</script>
