<template>
  <section class="section land" id="land-section">
    <div class="container">
      <div class="text">
        <h2>
          FULL STACK<br />
          <span>DEVELOPER</span>
        </h2>
        <div class="btns">
          <button class="btn btn-main">Hire me</button>
          <button class="btn btn-dark">
            Download CV <i class="bi bi-download"></i>
          </button>
        </div>
        <img src="@/assets/imgs/arrow-1.png" alt="arrow" class="arrow" />
        <a href="#about-me-section" class="arrow-down">
          <i class="bi bi-arrow-down"></i>
        </a>
      </div>
      <div class="img-container">
        <img src="@/assets/imgs/bg-1.png" alt="background" class="bg" />
        <img src="@/assets/imgs/person-1.png" alt="person" class="person" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LandSection",
};
</script>

<style lang="scss" scoped>
.land {
  height: calc(100vh - 80px);
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    .text {
      display: flex;
      flex-direction: column;
      gap: 20px;
      position: relative;
      h2 {
        font-size: 4rem;
        span {
          color: var(--main-color);
        }
        @media (max-width: 992px) {
          font-size: 3rem;
        }
        @media (max-width: 768px) {
          font-size: 3.5rem;
        }
      }
      .btns {
        display: flex;
        align-items: center;
        gap: 20px;
      }
      .arrow {
        position: absolute;
        height: 220px;
        top: 30px;
        left: -80px;
        @media (max-width: 768px) {
          display: none;
        }
      }
      .arrow-down {
        width: 60px;
        height: 60px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        background-color: var(--btn-color);
        color: var(--text-color);
        margin: auto;
        margin-top: 30%;
        transition: 0.3s opacity ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
        i {
          font-size: 1.4rem;
        }
        &:hover {
          opacity: 0.8;
        }
        &:active {
          opacity: 1;
        }
        @media (max-width: 500px) {
          margin-top: 30%;
        }
        @media (max-width: 768px) {
          margin-top: 15%;
          width: 70px;
          height: 70px;
        }
      }
      @media (max-width: 768px) {
        width: 100%;
      }
    }
    .img-container {
      position: relative;
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .bg {
        position: absolute;
        z-index: -1;
        right: 0;
        bottom: 0;
        @media (max-width: 992px) {
          width: 100%;
          top: 50%;
          transform: translateY(-50%);
          right: 0;
        }
      }
      .person {
        position: absolute;
        bottom: 0;
        @media (max-width: 992px) {
          width: 80%;
          top: 30%;
        }
      }
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
  @media (max-width: 768px) {
    background-image: url(../assets/imgs/bg-1.png);
    background-position: 130px;
    background-size: 150%;
    background-repeat: no-repeat;
  }
}
</style>
