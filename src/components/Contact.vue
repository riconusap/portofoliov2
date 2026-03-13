<template>
  <section id="contact" class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-center text-4xl mb-4">
          Let's <span class="text-red-500">meet</span> for
        </h2>
        <h3 class="text-center text-3xl mb-2">Something special</h3>
        <p class="text-center text-gray-600 mb-8">
          rikonusapratama@gmail.com<br />
          +62 878-0964-9967
        </p>
        
        <form class="space-y-4 mb-8" @submit.prevent="handleSubmit">
          <input
            v-model="formData.name"
            type="text"
            placeholder="Name"
            class="w-full px-4 py-3 border-2 border-black bg-white focus:outline-none focus:border-red-500"
          />
          <input
            v-model="formData.email"
            type="email"
            placeholder="Email"
            class="w-full px-4 py-3 border-2 border-black bg-white focus:outline-none focus:border-red-500"
          />
          <textarea
            v-model="formData.message"
            placeholder="Message"
            rows="6"
            class="w-full px-4 py-3 border-2 border-black bg-white focus:outline-none focus:border-red-500 resize-none"
          />
          
          <div class="flex items-center gap-4">
            <button
              type="submit"
              class="btn btn-primary"
            >
              Send now
            </button>
            
            <div class="flex items-center gap-3">
              <a href="#" class="social-btn">
                <i class="devicon-figma-plain text-[20px]" />
              </a>
              <a href="#" class="social-btn">
                <i class="devicon-github-original text-[20px]" />
              </a>
              <a href="#" class="social-btn">
                <Instagram :size="20" />
              </a>
              <a href="#" class="social-btn">
                <Linkedin :size="20" />
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Instagram, Linkedin } from 'lucide-vue-next'

export default defineComponent({
  name: 'Contact',
  components: {
    Instagram,
    Linkedin
  },
  setup() {
    const formData = ref({
      name: '',
      email: '',
      message: ''
    })

    const handleSubmit = () => {
      console.log('Form submitted:', formData.value)
      // Add your form submission logic here
    }

    return {
      formData,
      handleSubmit
    }
  }
})
</script>
