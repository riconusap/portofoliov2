<template>
  <div class="min-h-screen bg-white">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    Header,
    Footer
  }
})
</script>
