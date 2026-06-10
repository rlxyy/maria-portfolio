<template>
  <footer class="relative z-10 border-t border-border-color bg-bg-main/80 py-8 backdrop-blur-md">
    <div class="section-shell flex flex-col items-center justify-between gap-4 text-center text-sm text-text-primary/60 sm:flex-row sm:text-left">
      <p>© 2026 Maria Alffin A. Andrade. All rights reserved.</p>
      <div class="flex gap-3">
        <a
          href="https://linkedin.com/in/maalffinandrade"
          target="_blank"
          rel="noreferrer"
          class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-color bg-bg-card transition hover:border-accent hover:text-accent"
          aria-label="LinkedIn"
        >
          <LinkIcon class="h-5 w-5" aria-hidden="true" />
        </a>
        <a
          href="mailto:alffinandrade@gmail.com"
          class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-color bg-bg-card transition hover:border-accent hover:text-accent"
          aria-label="Email"
        >
          <EnvelopeIcon class="h-5 w-5" aria-hidden="true" />
        </a>
        <a
          href="tel:+639559436707"
          class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-color bg-bg-card transition hover:border-accent hover:text-accent"
          aria-label="Phone"
        >
          <DevicePhoneMobileIcon class="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { LinkIcon, EnvelopeIcon, DevicePhoneMobileIcon } from '@heroicons/vue/24/outline'
</script>