<script setup>
import { ref } from "vue";
import LanguageSwitcher from "./components/LanguageSwitcher.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";

const currentView = ref("home");

function navigateTo(view) {
  currentView.value = view;
}
</script>

<template>
  <div class="app-container" :class="{ rtl: $i18n.locale === 'ar' }">
    <header>
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <h1>ELEGANZA<span class="logo-accent">CLINIC</span></h1>
          </div>
          <nav>
            <ul>
              <li>
                <a
                  href="#"
                  @click.prevent="navigateTo('home')"
                  :class="{ active: currentView === 'home' }"
                >
                  {{ $t("menu.home") }}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  @click.prevent="navigateTo('about')"
                  :class="{ active: currentView === 'about' }"
                >
                  {{ $t("menu.about") }}
                </a>
              </li>
              <li>
                <a href="#">{{ $t("menu.contact") }}</a>
              </li>
            </ul>
          </nav>
          <LanguageSwitcher class="header-language-switcher" />
        </div>
      </div>
    </header>

    <main>
      <div class="container">
        <component :is="currentView === 'home' ? Home : About" />
      </div>
    </main>

    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>ELEGANZA<span class="logo-accent">CLINIC</span></h3>
            <p>&copy; {{ new Date().getFullYear() }} All Rights Reserved.</p>
          </div>
          <div class="footer-section">
            <h3>{{ $t("menu.contact") }}</h3>
            <p>info@eleganzaclinic.example</p>
            <p>+81 03-1234-5678</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* グローバルスタイル */
:root {
  font-family: "Cormorant Garamond", "Noto Serif JP", serif;
  line-height: 1.5;
  font-weight: 400;
  color: #333;
  background-color: #faf8f5;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-width: 320px;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.rtl {
  direction: rtl;
  text-align: right;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  font-family: inherit;
}

ul {
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 300;
  letter-spacing: 1px;
}

p {
  font-weight: 300;
}
</style>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.logo h1 {
  color: #8c7569;
  font-size: 1.8rem;
  font-weight: 300;
  letter-spacing: 3px;
}

.logo-accent {
  font-weight: 300;
  color: #d4b08c;
  font-style: italic;
}

nav ul {
  display: flex;
  gap: 25px;
}

nav ul li a {
  color: #8c7569;
  font-weight: 400;
  padding: 8px 0;
  position: relative;
  transition: color 0.3s;
  letter-spacing: 1px;
  font-size: 1.1rem;
}

nav ul li a:hover,
nav ul li a.active {
  color: #d4b08c;
}

nav ul li a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background-color: #d4b08c;
  transition: width 0.3s;
}

nav ul li a:hover::after,
nav ul li a.active::after {
  width: 100%;
}

.header-language-switcher {
  margin: 0;
}

main {
  flex: 1;
  padding: 60px 0;
}

footer {
  background-color: #362e29;
  color: #fff;
  padding: 60px 0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
}

.footer-section {
  flex: 1;
  min-width: 250px;
}

.footer-section h3 {
  margin-bottom: 20px;
  font-size: 1.2rem;
  color: #d4b08c;
  letter-spacing: 2px;
}

.footer-section p {
  margin-bottom: 10px;
  color: #e0dcd8;
  font-weight: 300;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  nav ul {
    margin-top: 10px;
  }

  .header-language-switcher {
    margin-top: 10px;
    align-self: flex-start;
  }
}
</style>
