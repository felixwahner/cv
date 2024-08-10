<script setup lang="ts">
import CurriculumVitae from '../components/CurriculumVitae.vue'
import ContactSidebar from '../components/ContactSidebar.vue'
</script>

<template>
  <main class="main">
    <header class="header">
      <h1 property="name">Felix Wahner</h1>
      <h2>{ Fullstack Web Developer }</h2>
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
  margin-top: 12px;
  color: var(--vt-c-black-mute);
  font-size: 2.2rem;
  margin-bottom: 0;
  line-height: 1;
  padding-left: 24px;
}


h2 {
  color: var(--purple-brand);
  padding-left: 24px;
  line-height: 1;
  margin-bottom: 68px;
  font-size: 1.3rem;
}
@media (min-width: 1080px)  {
  h1 {
    padding-left: 144px;
    font-size: 3rem;
  }
  h2 {
    padding-left: 144px;
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
.header {
  position: relative;
}
@media (min-width: 1080px)  {
  .header::before {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: rgba(151, 18, 84, 0.2);
    content: '>';
    position: absolute;
    color: var(--purple-brand);
    font-size: 8em;
    font-weight: 800;
    left: 12px;
    top: -12px;
    line-height: 0.5;
    padding-left: 12px;
    color: #fff;
  }
}
@media (min-width: 1312px)  {
  .header::before {
    left: 0;
  }
}
</style>
