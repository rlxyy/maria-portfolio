<template>
  <section id="certifications" class="section-shell py-12 scroll-mt-20">
    <div class="fade-up mb-8">
      <p class="text-sm font-bold uppercase tracking-widest text-accent-primary">Certifications</p>
      <h2 class="mt-2 text-3xl font-black text-light-text dark:text-dark-text">Recent credentials across productivity and security.</h2>
    </div>
    
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="cert in certifications"
        :key="cert.name"
        class="group relative fade-up"
        @dblclick="expandImage(cert)"
      >
        <GlassCard class="relative transition-all duration-300 group-hover:scale-105 group-hover:border-accent-primary/50 group-hover:shadow-xl group-hover:shadow-accent-primary/10">
          <ShieldCheckIcon class="h-8 w-8 text-accent-primary" aria-hidden="true" />
          <h3 class="mt-4 min-h-14 text-lg font-black text-light-text dark:text-dark-text">{{ cert.name }}</h3>
          <p class="mt-3 text-sm font-semibold text-accent-primary">{{ cert.year }}</p>
          
          <!-- Hover preview - kita agad ang certificate -->
          <div class="absolute left-1/2 top-full z-20 mt-2 hidden w-80 -translate-x-1/2 rounded-xl bg-light-bg dark:bg-dark-bg shadow-2xl border border-accent-primary/20 group-hover:block">
            <div class="p-3">
              <img
                v-if="cert.image"
                :src="cert.image"
                :alt="cert.name"
                class="w-full h-52 object-cover rounded-lg shadow-md"
              />
              <div v-else class="h-52 w-full rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <ShieldCheckIcon class="h-12 w-12 text-gray-400" />
              </div>
              <p class="mt-2 text-center text-xs text-light-text/60 dark:text-dark-text/60">
                ✨ Double click to expand ✨
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>

    <!-- Expanded view (double click) - full screen -->
    <Teleport to="body">
      <div
        v-if="expandedCert"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md transition-all duration-300"
        @click="expandedCert = null"
      >
        <div class="relative max-h-[90vh] max-w-[90vw]" @click.stop>
          <img
            :src="expandedCert.image"
            :alt="expandedCert.name"
            class="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
          />
          <button
            @click="expandedCert = null"
            class="absolute -top-12 right-0 rounded-full bg-red-500/20 p-2 text-red-500 transition hover:bg-red-500 hover:text-white"
          >
            <XMarkIcon class="h-6 w-6" />
          </button>
          <div class="absolute -bottom-12 left-0 text-white text-sm bg-black/50 px-3 py-1 rounded-lg">
            {{ expandedCert.name }} • {{ expandedCert.year }}
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import GlassCard from './GlassCard.vue'
import { ShieldCheckIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const certifications = ref([
  {
    name: 'Google Workspace Administrator Professional Certificate',
    year: '2026',
    issuer: 'Google',
    image: '/certificates/google-workspace.jpg'
  },
  {
    name: 'Microsoft Cybersecurity: Security, Compliance, Identity',
    year: '2026',
    issuer: 'Microsoft',
    image: '/certificates/Microsoft.jpg'
  },
  {
    name: 'Network Security - Cisco',
    year: '2026',
    issuer: 'Cisco',
    image: '/certificates/Network Security.jpg'
  },
  {
    name: 'Linux Essentials - Cisco',
    year: '2026',
    issuer: 'Cisco',
    image: '/certificates/Linux.jpg'
  },
  {
    name: 'Operating Systems Basics - Cisco',
    year: '2025',
    issuer: 'Cisco',
    image: '/certificates/cisco-os-basics.jpg'
  },
  {
    name: 'Intro to Cybersecurity - Cisco',
    year: '2025',
    issuer: 'Cisco',
    image: '/certificates/cisco-cybersecurity-intro.jpg'
  }
])

const expandedCert = ref(null)

const expandImage = (cert) => {
  if (cert.image) {
    expandedCert.value = cert
  }
}
</script>

<style scoped>
.fade-up {
  animation: fadeUp 0.6s ease-out forwards;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>