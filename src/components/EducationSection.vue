<template>
  <section class="section-shell grid gap-5 py-12 lg:grid-cols-[1.1fr_.9fr]">
    <GlassCard class="fade-up">
      <AcademicCapIcon class="h-9 w-9 text-accent-primary" aria-hidden="true" />
      <p class="mt-4 text-sm font-bold uppercase tracking-widest text-accent-primary">Education</p>
      <h2 class="mt-2 text-3xl font-black text-light-text dark:text-dark-text">BS Information Technology</h2>
      <p class="mt-2 text-lg font-semibold text-accent-primary">
        Laguna State Polytechnic University (2026)
      </p>
      <p class="mt-5 leading-7 text-light-text-secondary dark:text-dark-text-secondary">
        Relevant coursework: Business Communication, Computer Applications, Database Management, Web Development and Information Systems
      </p>
    </GlassCard>

    <GlassCard class="fade-up">
      <LanguageIcon class="h-9 w-9 text-accent-primary" aria-hidden="true" />
      <p class="mt-4 text-sm font-bold uppercase tracking-widest text-accent-primary">Languages</p>
      <h2 class="mt-2 text-3xl font-black text-light-text dark:text-dark-text">English & Filipino</h2>
      <p class="mt-5 leading-7 text-light-text-secondary dark:text-dark-text-secondary">English (Proficient) · Filipino (Native)</p>
      <div class="mt-6 flex gap-3">
        <span class="rounded-full border border-light-border bg-light-surface/50 px-4 py-2 text-sm font-semibold text-light-text dark:border-dark-border dark:bg-dark-surface/50 dark:text-dark-text">English</span>
        <span class="rounded-full border border-light-border bg-light-surface/50 px-4 py-2 text-sm font-semibold text-light-text dark:border-dark-border dark:bg-dark-surface/50 dark:text-dark-text">Filipino</span>
      </div>
    </GlassCard>
  </section>
</template>

<script setup>
import GlassCard from './GlassCard.vue'
import { AcademicCapIcon, LanguageIcon } from '@heroicons/vue/24/outline'
</script>