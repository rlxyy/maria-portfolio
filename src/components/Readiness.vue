<template>
  <section id="readiness" class="section-shell py-12 scroll-mt-20">
    <div class="fade-up mb-8">
      <p class="text-sm font-bold uppercase tracking-widest text-accent-primary">Remote Work Readiness</p>
      <h2 class="mt-2 text-3xl font-black text-light-text dark:text-dark-text">Prepared for focused, dependable remote work.</h2>
    </div>
    <div class="grid gap-5 md:grid-cols-2">
      <GlassCard v-for="item in readiness" :key="item.label" class="fade-up">
        <component :is="item.icon" class="h-9 w-9 text-accent-primary" aria-hidden="true" />
        <h3 class="mt-4 text-xl font-black text-light-text dark:text-dark-text">{{ item.label }}</h3>
        <p class="mt-3 leading-7 text-light-text-secondary dark:text-dark-text-secondary">{{ item.value }}</p>
      </GlassCard>
    </div>
  </section>
</template>

<script setup>
import GlassCard from './GlassCard.vue'
import { CloudIcon, BoltIcon, VideoCameraIcon, MoonIcon } from '@heroicons/vue/24/outline'

const readiness = [
  { label: 'Internet', value: 'PLDT Fiber 200 Mbps + Globe 5G backup', icon: CloudIcon },
  { label: 'Power', value: 'UPS 2h battery + coworking space', icon: BoltIcon },
  { label: 'Equipment', value: 'Desktop (Ryzen 5), Laptop (Ryzen 5), noise-cancelling headset, HD webcam', icon: VideoCameraIcon },
  { label: 'Availability', value: 'Flexible, US/UK/AU time zones, graveyard shift', icon: MoonIcon },
]
</script>
