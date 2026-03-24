<template>
  <section v-if="testimonials.length > 0" class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-center text-4xl mb-12">
        My <span class="text-red-500">Testimonial</span>
      </h2>
      
      <div class="max-w-6xl mx-auto relative px-8 md:px-0">
        <!-- Carousel Container -->
        <div class="overflow-hidden">
          <div 
            class="flex transition-transform duration-500 ease-out"
            :style="{ transform: `translateX(-${currentIndex * (100 / carouselItemsPerView)}%)` }"
            @mouseenter="pauseAutoplay"
            @mouseleave="resumeAutoplay"
          >
            <div
              v-for="(testimonial, index) in testimonials"
              :key="index"
              :class="[
                'flex-shrink-0 px-2 md:px-3',
                cardWidthClass
              ]"
            >
              <div
                :class="[
                  testimonial.featured ? 'bg-red-500 text-white border-red-500' : 'bg-gray-100 border-gray-200 hover:bg-red-500 hover:border-red-500 hover:text-white',
                  'p-8 border-2 flex flex-col items-center text-center space-y-4 h-full transition-all duration-300 cursor-pointer group'
                ]"
              >
                <div :class="[
                  testimonial.featured ? 'bg-white text-red-500' : 'bg-gray-300 group-hover:bg-white group-hover:text-red-500',
                  'w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300'
                ]">
                  <Quote :size="32" />
                </div>
                
                <p :class="[
                  testimonial.featured ? 'text-white' : 'text-gray-700 group-hover:text-white',
                  'leading-relaxed transition-colors duration-300'
                ]">
                  "{{ testimonial.text }}"
                </p>
                
                <div>
                  <div class="mb-1 font-semibold">{{ testimonial.author }}</div>
                  <div :class="[
                    'text-sm',
                    testimonial.featured ? 'text-white opacity-90' : 'text-gray-600 group-hover:text-white group-hover:opacity-90',
                    'transition-colors duration-300'
                  ]">
                    {{ testimonial.role }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <button
          v-if="currentIndex > 0"
          @click="prev"
          :class="[
            'absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12',
            'w-10 h-10 md:w-12 md:h-12 bg-white border-2 border-black hover:bg-red-500 hover:border-red-500 hover:text-white',
            'flex items-center justify-center transition-all duration-300',
            'shadow-lg z-10'
          ]"
        >
          <ChevronLeft :size="20" class="md:hidden" />
          <ChevronLeft :size="24" class="hidden md:block" />
        </button>

        <button
          v-if="currentIndex < maxIndex"
          @click="next"
          :class="[
            'absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12',
            'w-10 h-10 md:w-12 md:h-12 bg-white border-2 border-black hover:bg-red-500 hover:border-red-500 hover:text-white',
            'flex items-center justify-center transition-all duration-300',
            'shadow-lg z-10'
          ]"
        >
          <ChevronRight :size="20" class="md:hidden" />
          <ChevronRight :size="24" class="hidden md:block" />
        </button>

        <!-- Dots Indicator -->
        <div class="flex justify-center gap-2 mt-8">
          <button
            v-for="(_, index) in totalPages"
            :key="index"
            @click="goToPage(index)"
            :class="[
              'w-3 h-3 rounded-full transition-all duration-300',
              currentPage === index ? 'bg-red-500 w-8' : 'bg-gray-300 hover:bg-gray-400'
            ]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onUnmounted } from 'vue'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { useCarousel } from '@/composables/useCarousel'
import type { Testimonial } from '@/types'

export default defineComponent({
  name: 'Testimonials',
  components: {
    Quote,
    ChevronLeft,
    ChevronRight
  },
  setup() {
    const testimonials = ref<Testimonial[]>([])

    // Responsive items per view
    const itemsPerView = ref(3)
    
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        itemsPerView.value = 1 // Mobile: 1 card
      } else {
        itemsPerView.value = 3 // Desktop: 3 cards
      }
    }

    // Computed width class based on items per view
    const cardWidthClass = computed(() => {
      return itemsPerView.value === 1 ? 'w-full' : 'w-full md:w-1/3'
    })

    const {
      currentIndex,
      maxIndex,
      totalPages,
      currentPage,
      itemsPerView: carouselItemsPerView,
      next,
      prev,
      goToPage,
      pauseAutoplay,
      resumeAutoplay
    } = useCarousel<Testimonial>(testimonials, itemsPerView, 5000)

    onMounted(() => {
      updateItemsPerView()
      window.addEventListener('resize', updateItemsPerView)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', updateItemsPerView)
    })

    return {
      testimonials,
      currentIndex,
      maxIndex,
      totalPages,
      currentPage,
      carouselItemsPerView,
      cardWidthClass,
      next,
      prev,
      goToPage,
      pauseAutoplay,
      resumeAutoplay
    }
  }
})
</script>
