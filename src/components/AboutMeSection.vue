<template>
  <section class="section about_me" id="about-me-section">
    <div class="container">
      <div class="text">
        <h2 data-aos="zoom-in">About <span>me</span></h2>
        <p data-aos="fade-up">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat at ab
          in nam sequi, vel provident id. Veritatis deserunt, odit dignissimos
          temporibus assumenda minima, itaque suscipit fuga possimus mollitia
          laborum... <a>Read more</a>
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
import AOS from 'aos';

export default {
  name: "AboutMeSection",
  mounted() {
    AOS.init({
        delay: 400,
      duration: 1200,
    })
  }
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
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
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
