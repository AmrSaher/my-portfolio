<template>
  <Header />
  <LandSection />
</template>

<script>
import Header from "@/components/Header.vue";
import LandSection from "@/components/LandSection.vue";

export default {
  name: "App",
  components: {
    Header,
    LandSection
  },
};
</script>