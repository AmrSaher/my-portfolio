<template>
  <MainSection title="Experience">
    <ul class="flex flex-col gap-5">
      <ExperienceSectionItem v-for="(job, n) in jobs" :key="n" :job="job" />
    </ul>
  </MainSection>
</template>

<script setup>
const jobs = ref([
  {
    from: "Sep 2023",
    to: "Jun 2024",
    position: "Backend Developer",
    companyName: "Twision",
    description:
      "Working on chatbot solutions, our goal is to drive global digital transformation. In my role, I focus on developing intuitive user interfaces and backend APIs. We leverage AI technologies, including ChatGPT, to support city digitization initiatives and enhance public service delivery.",
    skills: ["PHP", "Laravel", "MySql", "Backend"],
  },
]);
</script>
