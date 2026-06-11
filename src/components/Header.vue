<template>
  <header class="fixed top-0 z-30 w-full border-b border-border-color bg-bg-main/95 backdrop-blur-md">
    <nav class="section-shell flex min-h-16 items-center justify-between gap-4">
      <a href="#" class="flex items-center gap-2 text-sm font-semibold text-text-primary">
        <SparklesIcon class="h-5 w-5 text-accent" aria-hidden="true" />
        rlxy
      </a>
      
      <div class="flex items-center gap-6">
        <div class="hidden items-center gap-6 text-sm text-text-primary/70 sm:flex">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="nav-link relative transition-all duration-200"
            :class="{ 'active': activeSection === item.label.toLowerCase() }"
            @click.prevent="scrollToSection(item.href)"
          >
            {{ item.label }}
          </a>
        </div>
        
        <button
          @click="toggleTheme"
          class="rounded-full p-2 transition-all duration-300 hover:scale-110 hover:bg-accent/20 hover:ring-2 hover:ring-accent/40"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <SunIcon v-if="isDark" class="h-5 w-5 text-accent" />
          <MoonIcon v-else class="h-5 w-5 text-text-primary" />
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
    const offset = 80 // header height + padding
    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    })
  }
}

const updateActiveSection = () => {
  const scrollPosition = window.scrollY + 100 // offset para sa header
  
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
  updateActiveSection() // initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<style scoped>
.nav-link {
  @apply text-text-primary/70 hover:text-accent;
  padding-bottom: 4px;
}

/* Active indicator: bottom border + accent color */
.nav-link.active {
  @apply text-accent;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: currentColor;
  border-radius: 2px;
  animation: slideIn 0.2s ease-out;
}

/* Hover underline effect (optional, hindi nakikipag-collide sa active) */
.nav-link::before {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: currentColor;
  border-radius: 2px;
  transition: width 0.2s ease-out;
}

.nav-link:hover::before {
  width: 100%;
}

/* Para hindi mag-overlap ang hover at active indicators */
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