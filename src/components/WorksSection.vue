<template>
  <section class="section works" id="works-section">
    <div class="container">
      <h2 data-aos="fade-right">My recent <span>works</span></h2>
      <ul class="cats">
        <li
          v-for="(cat, i) in categories"
          v-text="cat"
          @click="category = cat"
        ></li>
      </ul>
      <div class="cards">
        <a
          :href="project.link"
          class="card"
          :data-aos="project.animation"
          v-for="(project, i) in projects"
          :key="i"
        >
          <img :src="project.img" alt="project image" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WorksSection",
  data() {
    return {
      category: "All",
      categories: ["All", "HTML & CSS", "Vue.js", "PHP", "Laravel"],
      works: [
        {
          img: "https://raw.githubusercontent.com/AmrSaher/glass-app/main/website.png",
          link: "https://github.com/AmrSaher/glass-app",
          animation: "fade-left",
          cats: ["HTML & CSS", "Vue.js"],
        },
        {
          img: "https://raw.githubusercontent.com/AmrSaher/image-editor/master/website.png",
          link: "https://github.com/AmrSaher/image-editor",
          animation: "fade-up",
          cats: ["HTML & CSS", "Vue.js"],
        },
        {
          img: "https://raw.githubusercontent.com/AmrSaher/iphone-x/master/website.png",
          link: "https://github.com/AmrSaher/iphone-x",
          animation: "fade-right",
          cats: ["HTML & CSS", "Vue.js"],
        },
      ],
    };
  },
  computed: {
    projects() {
      if (this.category == "All") {
        return this.works;
      } else {
        return this.works.filter((work) => {
          if (work.cats.includes(this.category)) return true;
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.works {
  background-image: url(../assets/imgs/bg-3.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: auto;
  padding: 50px 0;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    gap: 20px;
    h2 {
      font-size: 3rem;
      span {
        color: var(--main-color);
      }
    }
    .cats {
      display: flex;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
      li {
        padding: 7px 15px;
        background-color: var(--main-color);
        border-radius: 20px;
        cursor: pointer;
        font-size: 15px;
      }
    }
    .cards {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      flex-wrap: wrap;
      .card {
        width: fit-content;
        border-radius: 15px;
        background-color: var(--btn-color);
        opacity: 0.8;
        padding: 30px 10px;
        width: 100%;
        img {
          width: 100%;
        }
      }
      @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>
