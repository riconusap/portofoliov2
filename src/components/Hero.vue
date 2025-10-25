<template>
  <section id="home" class="pt-24 pb-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div class="flex-1 space-y-6">
          <h1 class="text-5xl lg:text-6xl">
            Hello I'am <span class="text-red-500">RIKO NUSA</span>
            <br />
            <span class="text-red-500">Frontend Dev</span>
            <br />
            Based in <span>Indonesia.</span>
          </h1>
          
          <p class="text-gray-600 max-w-xl">
            Hey, I'm Riko. I've been a frontend developer for about four years, spending most of my time working with Vue.js and TypeScript. But I'm not just a frontend guy; I'm also really comfortable on the backend, especially when it comes to building with Laravel and working with PostgreSQL and MySQL. This means I have a solid full-stack view and can really get the whole picture of a project.
          </p>
          
          <div class="flex flex-col md:flex-row items-start gap-4">
            <a
              class="btn btn-primary group"
              @click.prevent="downloadCv"
            >
              Download CV
              <Download :size="18" class="ml-2 transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
            <div class="flex flex-row items-center gap-4">
              <a href="#" class="social-btn">
                <i class="devicon-figma-plain text-[20px]" />
              </a>
              <a href="#" class="social-btn">
                <i class="devicon-github-original text-[20px]" />
              </a>
              <a href="#" class="social-btn">
                <Instagram :size="20" />
              </a>
              <a href="#" class="social-btn">
                <Linkedin :size="20" />
              </a>
            </div>
          </div>
        </div>
        
        <div class="flex-1 flex justify-center">
          <img :src="heroGif" alt="Hero illustration" class="max-w-md w-full" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import heroGif from '@/assets/img/hero.gif'
import cvPdf from '@/assets/pdf/cv.pdf'
import { Facebook, Instagram, Linkedin, Twitter, Download } from 'lucide-vue-next'

export default defineComponent({
  name: 'Hero',
  components: {
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    Download
  },
  setup() {
    const downloadCv = () => {
      const url = cvPdf as string
      const filename = 'Riko-Nusa-CV.pdf'
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', filename)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }

    return {
      heroGif,
      downloadCv
    }
  }
})
</script>
