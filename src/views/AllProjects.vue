<template>
  <section class="py-16 bg-black text-white min-h-screen pt-32">
      <div class="container mx-auto px-4">
        <h2 class="text-center text-4xl mb-16">
          All <span class="text-red-500">Projects</span>
        </h2>
        <div class="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="(project, index) in projects" :key="index" class="bg-zinc-900 border-2 border-zinc-700 rounded-lg overflow-hidden flex flex-col">
            <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div class="text-xl text-red-500 font-bold mb-2">{{ project.title }}</div>
                <p class="text-gray-400 mb-4">{{ project.description }}</p>
                <p class="text-sm text-gray-500 mb-2">Year: {{ project.year }}</p>
              </div>
              <div class="mt-auto">
                <a :href="project.link || '#'" target="_blank" class="btn btn-primary">See Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { projects as allProjects } from '@/data/projects'

export default defineComponent({
  name: 'AllProjects',
  components: {},
  setup() {
    // Sort by year descending
    const projects = computed(() => {
      return [...allProjects].sort((a, b) => b.year - a.year)
    })
    return { projects }
  }
})
</script>
