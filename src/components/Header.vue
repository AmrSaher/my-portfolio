<template>
  <header class="header">
    <div class="container">
      <h1 class="logo">Amr Saher</h1>
      <nav class="links" :class="{ active: isActive }">
        <ul>
          <li>
            <a href="#land-section">Home</a>
          </li>
          <li>
            <a href="#about-me-section">About Me</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <button class="toggle" @click="isActive = !isActive">
        <i class="bi bi-list-nested"></i>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid var(--hr-color);
  z-index: 999;
  background-color: var(--bg-color);
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    .logo {
      font-size: 1.2rem;
    }
    .links {
      ul {
        display: flex;
        align-items: center;
        gap: 20px;
        a {
          color: var(--text-color);
          font-size: 0.9rem;
          font-weight: 400;
          opacity: 0.9;
          position: relative;
          &::before {
            content: "";
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            background-color: var(--text-color);
            opacity: 0.9;
            height: 1px;
            border-radius: 5px;
            transition: 0.3s width ease-in-out;
          }
          &:hover::before {
            width: 100%;
          }
        }
        @media (max-width: 450px) {
          width: 100%;
          flex-direction: column;
          justify-content: center;
        }
      }
      @media (max-width: 450px) {
        position: fixed;
        top: 0;
        left: -80%;
        width: 80%;
        height: 100%;
        background-color: #2a323d;
        transition: 0.3s left ease-in-out;
        padding: 40px 0;
        z-index: 99999;
        &.active {
          left: 0;
        }
      }
    }
    .toggle {
      border: none;
      background-color: transparent;
      cursor: pointer;
      display: none;
      i {
        font-size: 1.5rem;
        color: var(--text-color);
      }
      @media (max-width: 450px) {
        display: block;
      }
    }
  }
}
</style>
