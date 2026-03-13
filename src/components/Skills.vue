<template>
  <section id="skills" class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-center text-4xl mb-12">
        My <span class="text-red-500">Skills</span>
      </h2>
      
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          :class="[
            skill.color, 
            skill.textColor || 'text-black', 
            'p-6 border-2 border-black flex flex-col items-center justify-center gap-3',
            'hover:bg-red-500 hover:text-white hover:border-red-500 hover:scale-105 hover:-translate-y-1',
            'transition-all duration-300 cursor-pointer group'
          ]"
        >
          <span v-if="typeof skill.icon === 'string'">
            <i :class="skill.icon + ' text-[32px] group-hover:scale-110 transition-transform duration-300'" />
          </span>
          <component v-else :is="skill.icon" :size="32" class="group-hover:scale-110 transition-transform duration-300" />
          <span class="text-center text-sm font-medium">{{ skill.title }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Skills',
  components: {},
  setup() {
    const skills = [
      { icon: 'devicon-javascript-plain', title: 'JavaScript', color: 'bg-white' },
      { icon: 'devicon-css3-plain', title: 'CSS', color: 'bg-white' },
      { icon: 'devicon-nodejs-plain', title: 'Node.js', color: 'bg-white' },
      { icon: 'devicon-git-plain', title: 'Git', color: 'bg-white' },
      { icon: 'devicon-typescript-plain', title: 'TypeScript', color: 'bg-white' },
      { icon: 'devicon-figma-plain', title: 'UI/UX Design', color: 'bg-white' },
      { icon: 'devicon-php-plain', title: 'PHP', color: 'bg-white' },
      { icon: 'devicon-laravel-plain', title: 'Laravel', color: 'bg-white' },
      { icon: 'devicon-postgresql-plain', title: 'PostgreSQL', color: 'bg-white' },
      { icon: 'devicon-mysql-plain', title: 'MySQL', color: 'bg-white' },
    ]

    return {
      skills
    }
  }
})
</script>
