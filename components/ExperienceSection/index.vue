<template>
  <MainSection class="ExperienceSection" title="Experience" id="experience">
    <ul class="flex flex-col gap-5">
      <ExperienceSectionItem v-for="(job, n) in jobs" :key="n" :job="job" />
    </ul>
  </MainSection>
</template>

<script setup>
const jobs = ref([
  {
    from: "May 2021",
    to: "Aug 2021",
    position: "Backend Developer - Internship",
    companyName: "Twision",
    description:
      "As a Backend Developer at Twision, I played a key role in enhancing our clients' digital presence. I focused on designing and implementing robust backend systems, collaborating with frontend developers, and contributing to strategic marketing plans. My work ensured seamless web development and solidified Twision's reputation as an innovative digital marketing agency.",
    skills: ["PHP", "Laravel", "MySql", "Backend", "Apache"],
  },
]);
</script>
