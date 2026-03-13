<template>
  <section class="py-16 bg-black text-white">
    <div class="container mx-auto px-4">
      <h2 class="text-center text-4xl mb-12">
        My <span class="text-red-500">Experience</span>
      </h2>
      
      <div class="max-w-4xl mx-auto space-y-6">
        <div
          v-for="(exp, index) in experiences"
          :key="index"
          :class="[
            exp.current ? 'bg-red-500 border-red-500' : 'bg-zinc-900 border-zinc-700 hover:bg-red-500 hover:border-red-500',
            'p-6 border-2 transition-all duration-300 cursor-pointer group'
          ]"
        >
          <div class="flex items-start justify-between gap-4 flex-wrap">
            <div class="flex items-start gap-4">
              <div :class="[
                exp.current ? 'bg-white text-red-500' : 'bg-red-500 group-hover:bg-white group-hover:text-red-500',
                'w-12 h-12 flex items-center justify-center transition-all duration-300'
              ]">
                <Building2 :size="24" />
              </div>
              <div>
                <h3 class="text-xl mb-1">{{ exp.title }}</h3>
                <p class="text-sm opacity-90 mb-2">{{ exp.company }}</p>
                <p class="text-sm opacity-80">{{ exp.description }}</p>
              </div>
            </div>
            <span class="text-sm opacity-90 whitespace-nowrap">{{ exp.period }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Building2 } from 'lucide-vue-next'

export default defineComponent({
  name: 'Experience',
  components: {
    Building2
  },
  setup() {
    const experiences = [
      {
        title: 'Frontend Developer',
        company: 'PT Kabayan Aishwarya Nusantara, Bandung',
        period: 'March 2022 - Present',
        description: 'Developing and leading frontend implementation for government application projects using Vue and TypeScript.',
        current: true,
      },
      {
        title: 'Fullstack Developer Specialist (Intern)',
        company: 'Sagara Technology, Jakarta',
        period: 'August 2021 - October 2021',
        description: 'Contributed to full-stack development tasks with a focus on building product features and backend integration.',
        current: false,
      },
    ]

    return {
      experiences
    }
  }
})
</script>
