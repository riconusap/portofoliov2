<template>
  <section id="home" class="pt-24 pb-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div class="flex-1 space-y-6">
          <h1 class="text-5xl lg:text-6xl">
            Hello I'm <span class="text-red-500">RIKO NUSA</span>
            <br />
            <span class="text-red-500">Sr. Developer</span>
            <br />
            Based in <span>Bandung, Indonesia.</span>
          </h1>
          
          <p class="text-gray-600 max-w-xl">
            Senior Frontend Developer with 4 years of experience in Vue.js and TypeScript.
            Strong full-stack skills with VueTS, Laravel, PostgreSQL, and MySQL.
            Started as a full-stack developer on the SIMPEG RS project and now leads
            government application development projects.
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
import { Instagram, Linkedin, Download } from 'lucide-vue-next'

export default defineComponent({
  name: 'Hero',
  components: {
    Instagram,
    Linkedin,
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
