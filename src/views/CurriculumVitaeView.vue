<script setup lang="ts">
import CurriculumVitae from '../components/CurriculumVitae.vue'
import ContactSidebar from '../components/ContactSidebar.vue'
</script>

<template>
  <main class="main">
    <header class="header">
      <div class="header-inner">
        <img class="profile-pic" v-bind:src="'./fw.png'" alt="C`est moi" width="200" height="200" />
        <div class="headings">
          <h1 property="name">Felix Wahner</h1>
          <h2>{ Fullstack Web Developer }</h2>
        </div>
      </div>
      <hr class="divider" />
    </header>
    <div class="content">
      <div class="cv">
        <CurriculumVitae />
      </div>
      <aside class="sidebar">
        <ContactSidebar />
      </aside>
    </div>
  </main>
</template>
<style scoped>
h1 {
  text-transform: uppercase;
  font-weight: 800;
  margin-bottom: 6px;
  color: var(--vt-c-black-mute);
  font-size: 2.2rem;
  margin-bottom: 0;
  line-height: 1;
}
h2 {
  color: var(--purple-brand);
  line-height: 1;
  font-size: 1.3rem;
}
@media (min-width: 1312px)  {
  h1 {
    padding-left: 0;
    font-size: 3rem;
  }
  h2 {
    padding-left: 0;
    font-size: 1.75rem;
  }
}
.divider {
  display: block;
  border: none;
  height: 12px;
  width: 100%;
  background-color: var(--vt-c-black-mute);
  margin-bottom: 24px;
}
.profile-pic {
  width: 120px;
  height: 120px;
  margin-left: 12px;
  margin-right: 24px;
  border-radius: 50%;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.6);
}
@media (min-width: 1312px)  {
  .profile-pic {
    margin-left: 0;
    margin-right: 32px;
  }
}
.header-inner {
  display: flex;
  align-items: center;
  margin-bottom: 48px;
}
.main {
  padding: 48px 0;
  margin: 0 24px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
@media (min-width: 1080px)  {
  .content {
    display: grid;
    grid-template-columns: 1.61803398875fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 40px;
    grid-row-gap: 24px;
  }
}
</style>
