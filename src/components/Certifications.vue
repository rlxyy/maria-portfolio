ito yung code ko sa certifications.vue 


<template>
  <section id="certifications" class="section-shell py-12 scroll-mt-20">
    <div class="fade-up mb-8">
      <p class="text-sm font-bold uppercase tracking-widest text-accent-primary">Certifications</p>
      <h2 class="mt-2 text-3xl font-black text-light-text dark:text-dark-text">Recent credentials across productivity and security.</h2>
    </div>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <GlassCard v-for="[name, year] in certifications" :key="name" class="fade-up">
        <ShieldCheckIcon class="h-8 w-8 text-accent-primary" aria-hidden="true" />
        <h3 class="mt-4 min-h-14 text-lg font-black text-light-text dark:text-dark-text">{{ name }}</h3>
        <p class="mt-3 text-sm font-semibold text-accent-primary">{{ year }}</p>
      </GlassCard>
    </div>
  </section>
</template>

<script setup>
import GlassCard from './GlassCard.vue'
import { ShieldCheckIcon } from '@heroicons/vue/24/outline'

const certifications = [
  ['Google Workspace Administrator Professional Certificate', '2026'],
  ['Microsoft Cybersecurity: Security, Compliance, Identity', '2026'],
  ['Network Security - Cisco', '2026'],
  ['Linux Essentials - Cisco', '2026'],
  ['Operating Systems Basics - Cisco', '2025'],
  ['Intro to Cybersecurity - Cisco', '2025'],
]
</script>