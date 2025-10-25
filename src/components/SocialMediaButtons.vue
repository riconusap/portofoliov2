<template>
  <div class="flex items-center gap-4">
    <a v-for="(item, idx) in socialLinks" :key="idx" :href="item.href" class="social-btn" target="_blank" rel="noopener noreferrer">
      <component :is="item.icon" :size="20" />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-vue-next'

export default defineComponent({
  name: 'SocialMediaButtons',
  props: {
    links: {
      type: Array as PropType<Array<{ href: string; icon: any }>>,
      default: () => [
        { href: '#', icon: Facebook },
        { href: '#', icon: Twitter },
        { href: '#', icon: Instagram },
        { href: '#', icon: Linkedin }
      ]
    }
  },
  computed: {
    socialLinks(): Array<{ href: string; icon: any }> {
      return this.links
    }
  }
})
</script>
