<template>
  <footer class="bg-black text-white py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="text-center md:text-left">
          <img src="@/assets/img/logo-white.png" alt="">
        </div>
        
        <div class="text-center text-sm text-gray-400">
          © 2025 RIKO NUSA. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer'
})
</script>
