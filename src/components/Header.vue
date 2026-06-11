<template>
  <header class="fixed top-0 z-30 w-full border-b border-white/20 bg-white/30 backdrop-blur-md dark:border-gray-800/50 dark:bg-gray-900/30">
    <nav class="section-shell mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
      <a href="#" class="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white">
        <SparklesIcon class="h-5 w-5 text-pink-500 dark:text-pink-400" aria-hidden="true" />
        rlxy
      </a>
      
      <div class="flex items-center gap-6">
        <div class="hidden items-center gap-6 text-sm sm:flex">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="nav-link"
            :class="{ 'active': activeSection === item.label.toLowerCase() }"
            @click.prevent="scrollToSection(item.href)"
          >
            {{ item.label }}
          </a>
        </div>
        
        <button
          @click="toggleTheme"
          class="rounded-full p-2 transition-all duration-300 hover:scale-110 hover:bg-pink-500/20 hover:ring-2 hover:ring-pink-500/40"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <SunIcon v-if="isDark" class="h-5 w-5 text-pink-500 dark:text-pink-400" />
          <MoonIcon v-else class="h-5 w-5 text-gray-900 dark:text-white" />
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { SparklesIcon, SunIcon, MoonIcon } from '@heroicons/vue/24/outline'
import { useTheme } from '../composables/useTheme'

const { isDark, toggleTheme } = useTheme()
const activeSection = ref('summary')

const navItems = [
  { label: 'Summary', href: '#summary' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Readiness', href: '#readiness' },
  { label: 'Contact', href: '#contact' },
]

const scrollToSection = (href) => {
  const element = document.querySelector(href)
  if (element) {
    const offset = 80
    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    })
  }
}

const updateActiveSection = () => {
  const scrollPosition = window.scrollY + 100
  
  for (const item of navItems) {
    const section = document.querySelector(item.href)
    if (section) {
      const sectionTop = section.offsetTop
      const sectionBottom = sectionTop + section.offsetHeight
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSection.value = item.label.toLowerCase()
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<style scoped>
/* GLASSMORPHISM + PINK INDICATOR */
.nav-link {
  color: rgba(0, 0, 0, 0.7);
  padding-bottom: 4px;
  position: relative;
  transition: all 0.2s ease;
  text-decoration: none;
  font-weight: 500;
}

.dark .nav-link {
  color: rgba(255, 255, 255, 0.7);
}

.nav-link:hover {
  color: #ec4899; /* PINK */
}

/* Active link - PINK */
.nav-link.active {
  color: #ec4899; /* PINK */
  font-weight: 500;
}

/* Bottom border indicator - PINK with glow (glassmorphism effect) */
.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #ec4899, #f472b6, #ec4899);
  border-radius: 2px;
  animation: slideIn 0.2s ease-out;
  box-shadow: 0 0 8px rgba(236, 72, 153, 0.5);
}

/* Hover effect - PINK with glow */
.nav-link::before {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #ec4899, #f472b6, #ec4899);
  border-radius: 2px;
  transition: width 0.2s ease-out;
  opacity: 0.6;
  box-shadow: 0 0 4px rgba(236, 72, 153, 0.3);
}

.nav-link:hover::before {
  width: 100%;
}

.nav-link.active:hover::before {
  width: 0;
}

@keyframes slideIn {
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 100%;
    opacity: 1;
  }
}
</style>