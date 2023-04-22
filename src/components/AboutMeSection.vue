<template>
  <section class="section about_me" id="about-me-section">
    <div class="container">
      <div class="text">
        <h2 data-aos="zoom-in">About <span>me</span></h2>
        <p data-aos="fade-up">
          {{ readMore ? aboutMe1 + aboutMe2 : aboutMe1
          }}<a @click="readMore = !readMore"
            >Read {{ readMore ? "less" : "more" }}</a
          >
        </p>
        <img src="@/assets/imgs/light.png" alt="light" class="light" />
        <img src="@/assets/imgs/music.png" alt="music" class="music" />
        <img src="@/assets/imgs/arrow-2.png" alt="arrow" class="arrow" />
      </div>
      <div class="img-container" data-aos="fade-down">
        <img src="@/assets/imgs/bg-2.png" alt="background" class="bg" />
        <img src="@/assets/imgs/person-2.png" alt="person" class="person" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutMeSection",
  data() {
    return {
      readMore: false,
      aboutMe1: `Hello, my name is Amr Saher and I am a 16-year-old software developer with a passion for programming. I started learning programming at the age of 12 and since then I have gained extensive experience in various programming languages such as HTML, CSS, JavaScript, Vue.js, Nuxt.js, `,
      aboutMe2: `PHP, MySQL, Laravel, Python, Django, PyQt5, and more. Currently, I am learning C# and ASP.net and plan to learn TypeScript in the near future. Apart from programming, I am also interested in fitness and spend time in the gym regularly. When I am not coding or working out, I enjoy playing video games. With my dedication and passion for software development, I am excited to take on new challenges and grow as a developer. `,
    };
  },
};
</script>

<style lang="scss" scoped>
.about_me {
  .container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text {
      width: 40%;
      display: flex;
      flex-direction: column;
      position: relative;
      height: 100%;
      justify-content: center;
      h2 {
        font-size: 3rem;
        span {
          color: var(--main-color);
        }
      }
      p {
        font-weight: 400;
        opacity: 0.8;
        a {
          color: var(--main-color);
          opacity: 1;
          font-weight: 500;
          cursor: pointer;
        }
      }
      .music,
      .arrow,
      .light {
        position: absolute;
      }
      .music {
        top: 60px;
      }
      .light {
        right: 50px;
        top: 110px;
        @media (max-width: 992px) {
          top: 100px;
          height: 80px;
          right: 0;
        }
      }
      .arrow {
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 150px;
        @media (max-width: 992px) {
          height: 120px;
        }
      }
      @media (max-width: 768px) {
        width: 100%;
      }
    }
    .img-container {
      width: 60%;
      position: relative;
      height: 100%;
      .bg {
        position: absolute;
        width: 90%;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        z-index: -1;
      }
      .person {
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        @media (max-width: 992px) {
          width: 350px;
        }
      }
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
}
</style>
