<template>
  <section class="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-10 py-16 lg:grid-cols-[1.1fr_.9fr] lg:py-20">
    <div class="fade-up">
      <p class="mb-4 inline-flex items-center gap-2 rounded-full border border-border-color bg-bg-card/80 px-4 py-2 text-sm font-medium text-text-primary/70 backdrop-blur-sm">
        <SparklesIcon class="h-4 w-4 text-accent" aria-hidden="true" />
        Organized · Detail-oriented · Tech-savvy
      </p>
      <h1 class="max-w-3xl text-5xl font-black leading-tight text-text-primary sm:text-6xl lg:text-7xl">
        Maria Alffin A. Andrade
      </h1>
      <p class="mt-5 text-2xl font-semibold text-accent sm:text-3xl">
        Virtual Assistant & Frontend Developer
      </p>
      <p class="mt-6 max-w-2xl text-lg leading-8 text-text-primary/70">
        Highly organized and reliable Virtual Assistant candidate with strong administrative, communication, and technology skills. Experienced in using Google Workspace, Microsoft Office, Canva, and AI productivity tools to manage tasks, organize information, and support business operations.
      </p>
      <div class="mt-8 flex flex-wrap gap-3">
        <a
          v-for="contact in contacts"
          :key="contact.label"
          :href="contact.href"
          target="_blank"
          rel="noreferrer"
          class="inline-flex min-h-12 items-center gap-2 rounded-full border border-border-color bg-bg-card px-5 py-3 text-sm font-semibold text-text-primary shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-md"
        >
          <component :is="contact.icon" class="h-5 w-5 text-accent" aria-hidden="true" />
          {{ contact.label }}
        </a>
      </div>
    </div>

    <div class="fade-up lg:justify-self-end">
      <GlassCard class="mx-auto max-w-md p-8 text-center">
        <!-- Profile photo replacing UserCircleIcon placeholder -->
        <div class="mx-auto h-56 w-56 overflow-hidden rounded-full border-2 border-accent/20 bg-gradient-to-br from-accent/10 to-accent/5">
          <img
            src="../assets/profile_nobg.png"
            alt="Maria Alffin A. Andrade"
            class="h-full w-full object-cover object-[center_15%]"
          />
        </div>
        <div class="mt-7 space-y-4">
          <div
            v-for="item in highlights"
            :key="item.label"
            class="flex items-center justify-between gap-4 rounded-xl border border-border-color bg-bg-card/50 px-4 py-3 text-left"
          >
            <span class="flex items-center gap-3 text-sm text-text-primary/70">
              <component :is="item.icon" class="h-5 w-5 text-accent" aria-hidden="true" />
              {{ item.label }}
            </span>
            <strong class="text-sm text-text-primary">{{ item.value }}</strong>
          </div>
        </div>
      </GlassCard>
    </div>
  </section>
</template>

<script setup>
import GlassCard from './GlassCard.vue'
import { SparklesIcon, EnvelopeIcon, LinkIcon, PhoneIcon, CodeBracketIcon, GlobeAltIcon, ShieldCheckIcon } from '@heroicons/vue/24/outline'

const contacts = [
  { label: 'Email', href: 'https://mail.google.com/mail/?view=cm&to=alffinandrade%40gmail.com&su=Job%20Opportunity%20for%20Maria%20Alffin&body=Hi%20Maria%2C%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity%20with%20you.%0A%0A', icon: EnvelopeIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/maalffinandrade', icon: LinkIcon },
  { label: 'Phone', href: 'https://web.whatsapp.com/send?phone=639559436707', icon: PhoneIcon },
]

const highlights = [
  { label: 'Frontend', value: 'Vue 3', icon: CodeBracketIcon },
  { label: 'Remote Ready', value: 'Global time zones', icon: GlobeAltIcon },
  { label: 'Reliable', value: 'Detail-focused', icon: ShieldCheckIcon },
]
</script>
