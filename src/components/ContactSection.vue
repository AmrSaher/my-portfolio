<template>
  <section class="section contact" id="contact-section">
    <div class="container">
      <div class="left">
        <h2 data-aos="fade-right">Got a project in <br /><span>mind?</span></h2>
        <div class="img-container" data-aos="fade-up">
          <img src="@/assets/imgs/arrow-3.png" alt="arrow" class="arrow" />
          <img src="@/assets/imgs/person-3.png" alt="person" class="person" />
        </div>
      </div>
      <div class="right">
        <img src="@/assets/imgs/keyboard.png" alt="keyboard" class="keyboard">
        <img src="@/assets/imgs/mail.png" alt="main" class="mail">
        <form>
          <h2>Got a project in <span>mind?</span></h2>
          <div class="top">
            <div class="field" data-aos="fade-down">
              <label for="name">Your name</label>
              <input
                type="text"
                id="name"
                class="inp"
                placeholder="Name"
                required
              />
            </div>
            <div class="field" data-aos="fade-up">
              <label for="email">Your email</label>
              <input
                type="email"
                id="email"
                class="inp"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div class="field" data-aos="fade-up">
            <label for="message">Your message</label>
            <textarea
              class="inp"
              required
              id="message"
              placeholder="Message"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-main" data-aos="fade-right">
            Send Message <i class="bi bi-send"></i>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from 'aos';

export default {
  name: "ContactSection",
  mounted() {
    AOS.init({
        delay: 400,
      duration: 1200,
    })
  }
};
</script>

<style lang="scss" scoped>
.contact {
  .container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 3rem;
      span {
        color: var(--main-color);
      }
    }
    .left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
      height: 100%;
      .img-container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        .arrow {
          height: 100px;
        }
        .person {
          width: 200px;
        }
      }
      @media (max-width: 992px) {
        display: none;
      }
    }
    .right {
        position: relative;
      height: 100%;
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      .keyboard,
      .mail {
        position: absolute;
        @media (max-width: 628px) {
            display: none;
        }
      }
      .keyboard {
        left: 50px;
        top: 0;
        width: 120px;
      }
      .mail {
        right: 50px;
        bottom: 50px;
        width: 70px;
      }
      h2 {
        @media (min-width: 992px) {
            display: none;
        }
      }
      form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        .top {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .field {
          display: flex;
          flex-direction: column;
          gap: 5px;
          label {
            font-weight: 500;
          }
          .inp {
            width: 100%;
            padding: 10px;
            border: none;
            outline: none;
            border-radius: 10px;
            background-color: var(--btn-color);
            color: var(--text-color);
          }
          textarea {
            resize: vertical;
            min-height: 150px;
            max-height: 300px;
          }
        }
        .btn {
          width: fit-content;
        }
      }
      @media (max-width: 992px) {
        width: 100%;
      }
    }
  }
}
</style>
