<template>
  <section class="section works" id="works-section">
    <div class="container">
      <h2>My recent <span>works</span></h2>
      <ul class="cats">
        <li>All</li>
        <li>Front-End</li>
        <li>Back-End</li>
        <li>Laravel</li>
        <li>Vue js</li>
        <li>PHP</li>
      </ul>
      <div class="cards">
        <a href="#" class="card">
          <img src="@/assets/imgs/project-1.png" alt="project image" />
        </a>
        <a href="#" class="card">
          <img src="@/assets/imgs/project-1.png" alt="project image" />
        </a>
        <a href="#" class="card">
          <img src="@/assets/imgs/project-1.png" alt="project image" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WorksSection",
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
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
      .card {
        width: fit-content;
        border-radius: 15px;
        background-color: var(--btn-color);
        opacity: 0.8;
        padding: 30px 10px;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
