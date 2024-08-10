<script setup lang="ts">
import { intervalToDuration } from 'date-fns'
import { computed } from 'vue'
import { NotebookTabs, Download } from 'lucide-vue-next';

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
    <h2>Contact info</h2>
    <a class="vcard-link nostyle" download href="vcard_felix_wahner.vcf" title="Download vcard">
      <Download class="download-icon" color="currentColor" :size="32" :stroke-width="1" />
      <div class="vcard" vocab="https://schema.org/" typeof="Person">
        <div class="contact">
          <NotebookTabs class="contact-icon" color="currentColor" :size="48" :stroke-width="1" />
          <address property="address" typeof="PostalAddress">
            <strong class="name" property="name">Felix Wahner</strong><br />
            <span property="streetAddress">Wichmannstraße 27</span><br />
            <span property="postalCode">30519</span> <span property="addressLocality">Hannover</span
            ><br /><br />
            Tel:<a property="telephone" href="tel:+491621061659">(+49) 162 1061659</a><br />
            eMail:<a property="email" href="mailto:felix@o315.de">felix@o315.de</a><br />
            <a target="_blank" href="https://www.linkedin.com/in/felix-wahner-aa083b83/">LinkedIn</a> |  <a target="_blank" href="https://www.xing.com/profile/Felix_Wahner">XING</a>
          </address>
        </div>
      </div>
    </a>
    <h2>About me</h2>
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
  padding: 0;
  &:hover {
    background-color: transparent;
  }
}
.vcard-link {
  display: block;
  color: inherit;
  position: relative;
  .download-icon {
    opacity: 0;
    position: absolute;
    right: 24px;
    top: 14px;
    color: var(--purple-brand);
    transition: all .3s ease-in-out;
  }
  &:hover {
    .download-icon {
      opacity: 1;
      top: 16px
    }
  }
}
.contact-icon {
  color: #ccc;
  position: relative;
  top: 6px;
  margin-left: 12px;
}
address {
  font-style: normal;
}
strong {
  font-weight: 500;
}
.vcard {
  margin-bottom: 36px;
  padding: 16px 8px 8px 8px;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.6);
}
.subtle {
  color: rgba(0, 0, 0, 0.5);
}
.contact-icon {
  color: #ccc;
  margin-right: 24px;
}
.outer {
  background: rgb(246 246 246);
  padding: 24px;
  border-radius: 12px;
  margin-top: 82px;
}
</style>
