<template>
  <section id="project" class="py-16 bg-black text-white">
    <div class="container mx-auto px-4">
      <h2 class="text-center text-4xl mb-16">
        My <span class="text-red-500">Projects</span>
      </h2>
      
      <div class="max-w-6xl mx-auto space-y-16">
        <div
          v-for="(project, index) in projects"
          :key="index"
          :class="['flex flex-col items-center gap-8', project.imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row']"
        >
          <div class="flex-1">
            <div class="aspect-video bg-zinc-900 border-2 border-zinc-700 overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div class="flex-1 space-y-4">
            <div class="text-6xl text-red-500">{{ project.number }}</div>
            <h3 class="text-2xl">{{ project.title }}</h3>
            <p class="text-gray-400 leading-relaxed">{{ project.description }}</p>
          </div>
        </div>
        <div class="flex justify-center mt-12">
          <router-link to="/projects" class="btn btn-primary text-lg">
            View More
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { projects as allProjects } from '@/data/projects'

export default defineComponent({
  name: 'Projects',
  setup() {
    // Sort by year descending, ambil 3 teratas
    const projects = computed(() => {
      return [...allProjects].sort((a, b) => b.year - a.year).slice(0, 3)
    })
    return {
      projects
    }
  }
})
</script>