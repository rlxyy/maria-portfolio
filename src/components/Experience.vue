<template>
  <section id="experience" class="section-shell py-12 scroll-mt-20">
    <GlassCard class="fade-up">
      <div class="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p class="text-sm font-bold uppercase tracking-widest text-accent-primary">Experience</p>
          <h2 class="mt-2 text-3xl font-black text-light-text dark:text-dark-text">Frontend Developer Intern</h2>
          <p class="mt-2 text-lg font-semibold text-accent-primary">Geographic Innovations for Development Solutions, Inc.</p>
        </div>
        <span class="inline-flex w-fit items-center gap-2 rounded-full border border-light-border bg-light-surface/50 px-4 py-2 text-sm font-semibold text-light-text dark:border-dark-border dark:bg-dark-surface/50 dark:text-dark-text">
          <BriefcaseIcon class="h-5 w-5 text-accent-primary" aria-hidden="true" />
          Feb 2026 - June 2026
        </span>
      </div>
      <ul class="mt-8 grid gap-4 md:grid-cols-2">
        <li
          v-for="bullet in experienceBullets"
          :key="bullet"
          class="flex gap-3 rounded-xl border border-light-border bg-light-surface/50 p-4 text-light-text-secondary dark:border-dark-border dark:bg-dark-surface/50 dark:text-dark-text-secondary"
        >
          <CheckBadgeIcon class="mt-0.5 h-5 w-5 shrink-0 text-accent-primary" aria-hidden="true" />
          <span>{{ bullet }}</span>
        </li>
      </ul>
    </GlassCard>
  </section>
</template>

<script setup>
import GlassCard from './GlassCard.vue'
import { BriefcaseIcon, CheckBadgeIcon } from '@heroicons/vue/24/outline'

const experienceBullets = [
  'Developed responsive user interfaces using Vue 3 and Tailwind CSS, improving usability and accessibility across multiple web application modules.',
  'Integrated Firebase authentication and real-time database services, enhancing system security and supporting efficient data management.',
  'Collaborated with developers and stakeholders to gather requirements and implement functional features that aligned with project objectives.',
  'Maintained technical documentation, daily progress reports, and issue-tracking records, ensuring organized project coordination and timely task completion.',
  'Assisted in testing, debugging, and optimizing web applications, improving performance and delivering a seamless user experience.',
  'Participated in team meetings and project discussions, providing updates and contributing solutions that supported development milestones and project timelines.',
]
</script>
