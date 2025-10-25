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
          <h3 class="text-2xl">I'm RIKO NUSA</h3>
          <p class="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p class="text-gray-600 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p class="text-gray-600 leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
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
