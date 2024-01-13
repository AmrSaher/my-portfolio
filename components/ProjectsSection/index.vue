<template>
  <MainSection class="ProjectsSection" title="Projects" id="projects">
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
    github: "https://github.com/AmrSaher/rana-raies-works",
    url: "https://reliable-mermaid-91f3c3.netlify.app/",
    name: "Rana Raies Works (Movie App)",
    skills: ["Vue.js", "Firebase", "Google Drive"],
  },
  {
    github: "https://github.com/AmrSaher/nft-marketplace",
    name: "NFT Marketplace",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    github: "https://github.com/AmrSaher/image-editor",
    name: "Photo Editor",
    skills: ["Vue.js", "JavaScript", "Canvas API"],
  },
  {
    github: "https://github.com/AmrSaher/iphone-x",
    name: "Iphone X",
    skills: ["Vue.js", "CSS"],
  },
  {
    github: "https://github.com/AmrSaher/glass-app",
    name: "MACOS",
    skills: ["Vue.js", "CSS"],
  },
  {
    github: "https://github.com/AmrSaher/lms-website",
    name: "Library Management System",
    skills: ["Python", "Django", "Sqlite"],
  },
  {
    github: "https://github.com/AmrSaher/busn-manage-system",
    name: "Business Management System",
    skills: ["Python", "PyQt5", "MySql"],
  },
  {
    github: "https://github.com/AmrSaher/student-management-system",
    name: "Student Management System",
    skills: ["PHP", "Laravel", "MySql"],
  },
  {
    github: "https://github.com/AmrSaher/link-shortener-php",
    name: "Link Shortener",
    skills: ["PHP", "MySql"],
  },
  {
    github: "https://github.com/AmrSaher/php-mvc-framework",
    name: "PHP MVC Framework",
    skills: ["PHP", "OOP", "Dependency Injection"],
  },
  {
    github: "https://github.com/AmrSaher/draw-app",
    url: "https://startling-kataifi-84d269.netlify.app",
    name: "Draw App",
    skills: ["Vue.js", "JavaScript", "Canvas API"],
  },
  {
    github: "https://github.com/AmrSaher/expense-tracker-php-mvc",
    name: "Expense Tracker",
    skills: ["PHP", "MySql", "OOP"],
  },
  {
    github: "https://github.com/AmrSaher/salary-organizer-frontend",
    name: "Salary Organizer",
    skills: ["Nuxt.js", "Tailwind CSS", "Laravel", "MySql"],
  },
  {
    github: "https://github.com/AmrSaher/laravel-pharmacy-system",
    name: "Pharmacy System",
    skills: ["PHP", "Laravel", "MySql"],
  },
]);
</script>
