<template>
  <header class="fixed top-0 left-0 right-0 bg-white z-50 border-b">
    <nav class="container mx-auto px-4 py-4 flex items-center justify-between">
      <div class="text-xl cursor-pointer" @click="$router.push('/')">
        <span class="text-red-500">◆</span>RIKONUSA.
      </div>

      <ul class="hidden md:flex items-center gap-8">
        <li>
          <a
            href="/"
            :class="['hover:text-red-500 transition-colors', (activeSection === 'home' && !isProjectPage) ? 'text-red-500 font-semibold' : '']"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/#skills"
            :class="['hover:text-red-500 transition-colors', (activeSection === 'skills' && !isProjectPage) ? 'text-red-500 font-semibold' : '']"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="/#project"
            :class="['hover:text-red-500 transition-colors', (activeSection === 'project' || isProjectPage) ? 'text-red-500 font-semibold' : '']"
          >
            Project
          </a>
        </li>
        <li>
          <a
            href="/#contact"
            :class="['hover:text-red-500 transition-colors', (activeSection === 'contact' && !isProjectPage) ? 'text-red-500 font-semibold' : '']"
          >
            Contact Me
          </a>
        </li>
      </ul>

      <button class="hidden md:block btn btn-primary">
        Hire me
      </button>

      <button
        class="md:hidden"
        @click="isMenuOpen = !isMenuOpen"
        aria-label="Open navigation menu"
      >
        <Menu :size="24" />
      </button>
      <!-- Mobile Nav -->
      <transition name="fade">
        <div
          v-if="isMenuOpen"
          class="fixed inset-0 z-50 bg-black/40 md:hidden"
          @click.self="isMenuOpen = false"
        >
          <nav class="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg p-8 flex flex-col gap-6 animate-slide-in">
            <button
              class="self-end mb-8"
              @click="isMenuOpen = false"
              aria-label="Close navigation menu"
            >
              <Menu
                :size="24"
                class="rotate-90"
              />
            </button>
            <a
              href="/"
              @click="isMenuOpen = false"
              :class="['block py-2 px-4 rounded hover:bg-red-100', (activeSection === 'home' && !isProjectPage) ? 'text-red-500 font-semibold' : '']"
            >Home</a>
            <a
              href="/#skills"
              @click="isMenuOpen = false"
              :class="['block py-2 px-4 rounded hover:bg-red-100', (activeSection === 'skills' && !isProjectPage) ? 'text-red-500 font-semibold' : '']"
            >Skills</a>
            <a
              href="/#project"
              @click="isMenuOpen = false"
              :class="['block py-2 px-4 rounded hover:bg-red-100', (activeSection === 'project' || isProjectPage) ? 'text-red-500 font-semibold' : '']"
            >Project</a>
            <a
              href="/#contact"
              @click="isMenuOpen = false"
              :class="['block py-2 px-4 rounded hover:bg-red-100', (activeSection === 'contact' && !isProjectPage) ? 'text-red-500 font-semibold' : '']"
            >Contact Me</a>
            <a
              href="#contact"
              @click="isMenuOpen = false"
              class="block mt-4 btn btn-primary w-full text-center"
            >Hire me</a>
          </nav>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { Menu } from "lucide-vue-next";
import { useScrollObserver } from "@/composables/useScrollObserver";

export default defineComponent({
  name: "Header",
  components: {
    Menu,
  },
  setup() {
    const route = useRoute();
    const { activeSection } = useScrollObserver();
    const isMenuOpen = ref(false);
    
    const isProjectPage = computed(() => route.path === '/projects');
    
    return {
      activeSection,
      isMenuOpen,
      isProjectPage
    };
  },
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
@keyframes slide-in {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
.animate-slide-in {
  animation: slide-in 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>