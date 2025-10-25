<template>
  <Hero />
  <Skills />
  <Experience />
  <About />
  <Projects />
  <Testimonials />
  <Contact />
  
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hero from '@/components/Hero.vue'
import Skills from '@/components/Skills.vue'
import Experience from '@/components/Experience.vue'
import About from '@/components/About.vue'
import Projects from '@/components/Projects.vue'
import Testimonials from '@/components/Testimonials.vue'
import Contact from '@/components/Contact.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    Hero,
    Skills,
    Experience,
    About,
    Projects,
    Testimonials,
    Contact
  }
})
</script>
