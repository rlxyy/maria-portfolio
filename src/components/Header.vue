<template>
  <header class="fixed top-0 z-30 w-full border-b border-border-color bg-bg-main/95 backdrop-blur-md">
    <nav class="section-shell flex min-h-16 items-center justify-between gap-4">
      <a href="#" class="flex items-center gap-2 text-sm font-semibold text-text-primary">
        <SparklesIcon class="h-5 w-5 text-accent" aria-hidden="true" />
        Maria Andrade
      </a>
      
      <div class="flex items-center gap-6">
        <div class="hidden items-center gap-6 text-sm text-text-primary/70 sm:flex">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="transition hover:text-accent hover:underline underline-offset-4"
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
import { SparklesIcon, SunIcon, MoonIcon } from '@heroicons/vue/24/outline'
import { useTheme } from '../composables/useTheme'

const { isDark, toggleTheme } = useTheme()

const navItems = [
  { label: 'Summary', href: '#summary' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Readiness', href: '#readiness' },
  { label: 'Contact', href: '#contact' },
]
</script>
