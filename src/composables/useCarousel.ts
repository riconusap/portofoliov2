import { ref, computed, onMounted, onUnmounted, type Ref } from 'vue'

export function useCarousel<T>(
  items: Ref<T[]>, 
  itemsPerView: Ref<number> | number = 1,
  autoplayInterval: number = 5000
) {
  const currentIndex = ref(0)
  let autoplayTimer: number | null = null

  const itemsPerViewValue = computed(() => {
    return typeof itemsPerView === 'number' ? itemsPerView : itemsPerView.value
  })

  const maxIndex = computed(() => {
    return Math.max(0, items.value.length - itemsPerViewValue.value)
  })

  const totalPages = computed(() => {
    return Math.ceil(items.value.length / itemsPerViewValue.value)
  })

  const currentPage = computed(() => {
    return Math.floor(currentIndex.value / itemsPerViewValue.value)
  })

  const next = () => {
    if (currentIndex.value < maxIndex.value) {
      currentIndex.value++
    } else {
      currentIndex.value = 0 // Loop back to start
    }
  }

  const prev = () => {
    if (currentIndex.value > 0) {
      currentIndex.value--
    } else {
      currentIndex.value = maxIndex.value // Loop to end
    }
  }

  const goToPage = (pageIndex: number) => {
    currentIndex.value = pageIndex * itemsPerViewValue.value
    if (currentIndex.value > maxIndex.value) {
      currentIndex.value = maxIndex.value
    }
  }

  const startAutoplay = () => {
    if (autoplayTimer) return
    autoplayTimer = window.setInterval(() => {
      next()
    }, autoplayInterval)
  }

  const stopAutoplay = () => {
    if (autoplayTimer) {
      clearInterval(autoplayTimer)
      autoplayTimer = null
    }
  }

  const pauseAutoplay = () => {
    stopAutoplay()
  }

  const resumeAutoplay = () => {
    startAutoplay()
  }

  onMounted(() => {
    if (autoplayInterval > 0) {
      startAutoplay()
    }
  })

  onUnmounted(() => {
    stopAutoplay()
  })

  return {
    currentIndex,
    maxIndex,
    totalPages,
    currentPage,
    itemsPerView: itemsPerViewValue,
    next,
    prev,
    goToPage,
    pauseAutoplay,
    resumeAutoplay
  }
}
