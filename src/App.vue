<template>
  <Header />
  <LandSection />
  <AboutMeSection />
  <WorksSection />
  <ContactSection />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import LandSection from "@/components/LandSection.vue";
import AboutMeSection from "@/components/AboutMeSection.vue";
import WorksSection from "@/components/WorksSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import Footer from "@/components/Footer.vue";
import AOS from "aos";
import "@/assets/css/aos.css";

export default {
  name: "App",
  components: {
    Header,
    LandSection,
    AboutMeSection,
    WorksSection,
    ContactSection,
    Footer,
  },
  computed: {
    aosOptions() {
      return this.$store.getters.aosOptions;
    },
  },
  mounted() {
    AOS.init(this.aosOptions);
  },
};
</script>
