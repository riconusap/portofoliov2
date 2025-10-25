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
        title: 'Lead Photographer at Studio',
        company: 'Creative Studio Ltd.',
        period: '2021 - Present',
        description: 'Leading photography projects and managing a team of creative professionals.',
        current: false,
      },
      {
        title: 'Senior Designer at Agency',
        company: 'Design Agency Inc.',
        period: '2019 - 2021',
        description: 'Created visual content for major brands and handled client relationships.',
        current: false,
      },
      {
        title: 'Junior Freelance UI/UX',
        company: 'Various Clients',
        period: '2017 - 2019',
        description: 'Worked on diverse projects improving user experience and interface design.',
        current: false,
      },
    ]

    return {
      experiences
    }
  }
})
</script>
