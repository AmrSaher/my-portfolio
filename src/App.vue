<template>
  <Header />
  <LandSection />
  <AboutMeSection />
</template>

<script>
import Header from "@/components/Header.vue";
import LandSection from "@/components/LandSection.vue";
import AboutMeSection from "@/components/AboutMeSection.vue";

export default {
  name: "App",
  components: {
    Header,
    LandSection,
    AboutMeSection
  },
};
</script>