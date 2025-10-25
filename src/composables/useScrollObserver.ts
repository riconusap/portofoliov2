import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollObserver() {
  const activeSection = ref('home')
  let observer: IntersectionObserver | null = null

  const observeSections = () => {
    const sections = document.querySelectorAll('section[id]')
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }
    
    const observerInstance = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    }, observerOptions)
    
    sections.forEach((section) => {
      observerInstance.observe(section)
    })
    
    return observerInstance
  }

  onMounted(() => {
    setTimeout(() => {
      observer = observeSections()
    }, 100)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    activeSection
  }
}
