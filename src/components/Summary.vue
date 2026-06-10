<template>
  <section id="summary" class="section-shell py-12 scroll-mt-20">
    <GlassCard class="fade-up">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-start">
        <AtSymbolIcon class="h-10 w-10 shrink-0 text-accent" aria-hidden="true" />
        <div>
          <p class="text-sm font-bold uppercase tracking-widest text-accent">Professional Summary</p>
          <h2 class="mt-2 text-3xl font-black text-text-primary">Calm, capable support with a developer's eye.</h2>
          <p class="mt-4 text-lg leading-8 text-text-primary/70">
            Highly organized and reliable Virtual Assistant with strong administrative, communication, and technology skills. Experienced in using Google Workspace, Microsoft Office, Canva, and AI productivity tools to manage tasks, organize information, and support business operations. Recognized for attention to detail, adaptability, problem-solving abilities, and a commitment to delivering high-quality support in fast-paced remote work environments.
          </p>
        </div>
      </div>
    </GlassCard>
  </section>
</template>

<script setup>
import GlassCard from './GlassCard.vue'
import { AtSymbolIcon } from '@heroicons/vue/24/outline'
</script>
