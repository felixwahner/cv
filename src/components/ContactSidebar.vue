<script setup lang="ts">
import { intervalToDuration } from 'date-fns'
import { computed } from 'vue'

const ageCounter = computed(() => {
  return intervalToDuration({
    start: new Date(1981, 5, 18, 12, 0, 0),
    end: new Date()
  })
})
setTimeout(() => {
  ageCounter.effect.run()
}, 1000)
</script>

<template>
  <div class="outer">
    <h2>About me</h2>
    <div vocab="https://schema.org/" typeof="Person">
      <div class="contact">
        <img v-bind:src="'./fw.png'" alt="C`est moi" width="200" height="200" />
        <address property="address" typeof="PostalAddress">
          <strong class="name" property="name">Felix Wahner</strong><br />
          <span property="streetAddress">Wichmannstraße 27</span><br />
          <span property="postalCode">30519</span> <span property="addressLocality">Hannover</span
          ><br />
          Tel:<a property="telephone" href="tel:+491621061659">(+49) 162 1061659</a><br />
          eMail:<a property="email" href="mailto:felix@o315.de">felix@o315.de</a>
        </address>
      </div>
    </div>
    <p>
      Since I first got my hands dirty on a C64 keyboard, I have been in love with technology. I
      started building websites when
      <a target="_blank" href="https://en.wikipedia.org/wiki/GeoCities">Geocities</a>,
      <a target="_blank" href="https://en.wikipedia.org/wiki/NetObjects_Fusion"
        >NetObjects Fusion</a
      >
      and Internet Explorer 3 were still a thing. The year was 1996. I guess time flies by when
      you're having fun 🎉.
    </p>
    <p>
      Growing up, I realized that I could earn money by doing what I did for fun all day long. So
      here I am,
      <strong>{{ ageCounter.years }}</strong> years, {{ ageCounter.days }} days,
      {{ ageCounter.minutes }} minutes and {{ ageCounter.seconds }} seconds later. I have grown a
      little and gained some skills along the way, but I am still hyped for building beautiful and
      purposeful digital products.
    </p>
    <p>
      In the meantime, I worked on, led, and launched tons of projects ranging from marketing
      websites based on several CMS and frameworks
      <span class="subtle">(including wordpress, Typo3, processwire, webboard|cms...)</span>, APIs
      <span class="subtle">(built with Laravel, express.js, feathers.js...)</span>, mobile apps
      <span class="subtle"
        >(cross-compiled for iOS and Android using Apache cordova, Ionic, capacitor,
        Flutter...)</span
      >, to real-time web applications rendering thousands of datasets fueled by websockets,
      displayed in custom-made WebGL maps
      <span class="subtle">(powered by Angular, RxJS, pixi.js...)</span>.
    </p>
    <p>
      Apart from writing code, my education as a media designer enabled me to develop UX concepts
      and designs for dozens of applications and websites together with different teams and
      customers all over the world
      <span class="subtle">(using Figma, Photoshop, Illustrator, Axure RP, Balsamiq...)</span>.
    </p>
    <p>
      Even though I've seen a lot, internally I'm still the boy from 1995, restlessly sitting in
      front of his 60-Hz tube monitor at 2 AM, excited about new technology with all its chances and
      possibilities, eager to learn something new every day.
    </p>
    <p>
      In my free time, you most likely meet me driving my mountainbike down a trail, in a
      <a href="https://www.instagram.com/dreamlinehannover">dirtpark</a>
      with my two kids Justus <span class="subtle">(7)</span> and Moritz
      <span class="subtle">(13)</span> or at home, enjoying
      <a target="_blank" href="https://playvalorant.com/en-us/">videogames</a>.
    </p>
  </div>
</template>
<style scoped>
h2,
p,
address {
  margin-bottom: 1.5rem;
}
h2 {
  color: var(--purple-brand);
  text-transform: uppercase;
}
p {
  font-size: 1rem;
}
.contact {
  display: flex;
}
img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  margin-right: 30px;
  border: 1px solid rgba(255, 255, 255, 0.6);
}
address {
  font-style: normal;
}
strong {
  font-weight: 500;
}
.subtle {
  color: rgba(0, 0, 0, 0.5);
}
.outer {
  background: rgb(246 246 246);
  padding: 24px;
  border-radius: 12px;
  margin-top: 48px;
}
</style>
