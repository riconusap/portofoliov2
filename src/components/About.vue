<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-center text-4xl mb-12">
        About <span class="text-red-500">Me</span>
      </h2>
      
      <div class="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
        <div class="flex-1 flex justify-center">
          <div class="w-full max-w-sm aspect-square bg-gray-100 border-2 border-black p-8 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1676195470090-7c90bf539b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGlsbHVzdHJhdGlvbiUyMHBlcnNvbnxlbnwxfHx8fDE3NjA4NTQ2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="About illustration" 
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div class="flex-1 space-y-4">
          <div class="flex gap-2">
            <h3 class="text-2xl ">I'm</h3> <h3 class="text-2xl text-red-500">Riko Nusa Pratama</h3>
          </div>
          <p class="text-gray-600 leading-relaxed">
            I am a Senior Frontend Developer focused on building scalable, user-centered
            web applications with Vue.js and TypeScript. Over the last four years, I have
            delivered digital products across full-stack workflows, especially in public
            service and government platforms.
          </p>
          <p class="text-gray-600 leading-relaxed">
            I started my professional journey at Sagara Technology, then continued my
            growth at PT Kabayan Aishwarya Nusantara. My experience spans frontend
            architecture, migration projects, and collaboration with cross-functional teams
            to deliver reliable and maintainable systems.
          </p>
          <p class="text-gray-600 leading-relaxed">
            I hold a Bachelor's degree in Information Systems from Gunadarma University
            (2017 - 2021), and I continue to sharpen both engineering and UI/UX skills to
            bridge technical quality with great product experience.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'About'
})
</script>
