<template>
  <Header />
  <LandSection />
  <AboutMeSection />
  <WorksSection />
</template>

<script>
import Header from "@/components/Header.vue";
import LandSection from "@/components/LandSection.vue";
import AboutMeSection from "@/components/AboutMeSection.vue";
import WorksSection from "@/components/WorksSection.vue";

export default {
  name: "App",
  components: {
    Header,
    LandSection,
    AboutMeSection,
    WorksSection,
  },
};
</script>
