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
        class="fade-up"
        @dblclick="expandImage(cert)"
      >
        <!-- Normal state (text) -->
        <GlassCard 
          class="relative min-h-[280px] cursor-pointer transition-all duration-300 hover:scale-105 hover:border-accent-primary/50 hover:shadow-xl hover:shadow-accent-primary/10"
          :class="{ 'hidden-card': hoveredCert === cert.name }"
          @mouseenter="hoveredCert = cert.name"
          @mouseleave="hoveredCert = null"
        >
          <div class="flex flex-col items-start justify-between h-full">
            <ShieldCheckIcon class="h-8 w-8 text-accent-primary" aria-hidden="true" />
            <div>
              <h3 class="mt-4 min-h-14 text-lg font-black text-light-text dark:text-dark-text">{{ cert.name }}</h3>
              <p class="mt-3 text-sm font-semibold text-accent-primary">{{ cert.year }}</p>
            </div>
          </div>
        </GlassCard>

        <!-- Hover state (certificate image) - same position, kapalit ng text card -->
        <GlassCard 
          v-if="hoveredCert === cert.name"
          class="relative min-h-[280px] cursor-pointer transition-all duration-300 scale-105 border-accent-primary/50 shadow-xl shadow-accent-primary/10"
          @mouseenter="hoveredCert = cert.name"
          @mouseleave="hoveredCert = null"
          @dblclick="expandImage(cert)"
        >
          <div class="flex flex-col items-center justify-center h-full p-4">
            <img
              v-if="cert.image"
              :src="cert.image"
              :alt="cert.name"
              class="max-h-[200px] w-full object-contain rounded-lg"
            />
            <div v-else class="h-[200px] w-full flex items-center justify-center">
              <div class="text-center">
                <ShieldCheckIcon class="h-12 w-12 text-gray-400 mx-auto" />
                <p class="text-xs text-gray-400 mt-2">No preview available</p>
              </div>
            </div>
            <p class="mt-2 text-[10px] text-light-text/40 dark:text-dark-text/40">
              ✨ Double click to expand ✨
            </p>
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

const hoveredCert = ref(null)
const expandedCert = ref(null)

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