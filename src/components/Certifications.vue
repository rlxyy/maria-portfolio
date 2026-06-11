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
        class="group relative cursor-pointer fade-up"
        @click="openModal(cert)"
      >
        <GlassCard class="relative transition-all duration-300 group-hover:scale-105 group-hover:border-accent-primary/50 group-hover:shadow-xl group-hover:shadow-accent-primary/10">
          <ShieldCheckIcon class="h-8 w-8 text-accent-primary" aria-hidden="true" />
          <h3 class="mt-4 min-h-14 text-lg font-black text-light-text dark:text-dark-text">{{ cert.name }}</h3>
          <p class="mt-3 text-sm font-semibold text-accent-primary">{{ cert.year }}</p>
          
          <!-- Hover preview overlay -->
          <div class="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div class="text-center text-white">
              <p class="text-sm font-medium">👆 Click to view</p>
              <p class="text-xs mt-1 text-white/70">Certificate JPEG</p>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>

    <!-- Modal for JPEG preview -->
    <Teleport to="body">
      <div
        v-if="selectedCert"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-all duration-300"
        @click="closeModal"
      >
        <div
          class="relative max-h-[90vh] w-[90vw] max-w-4xl overflow-auto rounded-2xl bg-light-bg dark:bg-dark-bg p-6 shadow-2xl"
          @click.stop
        >
          <button
            @click="closeModal"
            class="absolute right-4 top-4 rounded-full bg-red-500/20 p-2 text-red-500 transition hover:bg-red-500 hover:text-white z-10"
          >
            <XMarkIcon class="h-5 w-5" />
          </button>
          
          <div class="flex items-start gap-4 pr-8">
            <ShieldCheckIcon class="h-10 w-10 text-accent-primary flex-shrink-0" />
            <div>
              <h3 class="text-xl font-bold text-light-text dark:text-dark-text">{{ selectedCert.name }}</h3>
              <p class="text-accent-primary mt-1 font-semibold">{{ selectedCert.year }} • {{ selectedCert.issuer }}</p>
            </div>
          </div>
          
          <!-- JPEG Image Viewer -->
          <div class="mt-6 rounded-xl border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card overflow-hidden">
            <img
              v-if="selectedCert.image"
              :src="selectedCert.image"
              :alt="selectedCert.name"
              class="w-full h-auto rounded-lg"
            />
            <div v-else class="flex h-96 items-center justify-center text-light-text/50 dark:text-dark-text/50">
              <div class="text-center">
                <ShieldCheckIcon class="h-16 w-16 mx-auto mb-3" />
                <p>JPEG certificate preview</p>
                <p class="text-sm mt-2">Place JPEG files in: /public/certificates/</p>
              </div>
            </div>
          </div>
          
          <!-- Action Buttons -->
          <div class="mt-4 flex gap-3">
            <a
              v-if="selectedCert.image"
              :href="selectedCert.image"
              download
              class="flex-1 rounded-xl bg-accent-primary/10 py-3 text-center font-semibold text-accent-primary transition hover:bg-accent-primary hover:text-white"
            >
              ⬇️ Download JPEG
            </a>
            <button
              @click="expandFullscreen"
              class="flex-1 rounded-xl bg-accent-primary/10 py-3 font-semibold text-accent-primary transition hover:bg-accent-primary hover:text-white"
            >
              🔍 Fullscreen
            </button>
          </div>
        </div>
      </div>

      <!-- Fullscreen JPEG viewer -->
      <div
        v-if="fullscreen && selectedCert?.image"
        class="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4"
        @click="fullscreen = false"
      >
        <img
          :src="selectedCert.image"
          :alt="selectedCert.name"
          class="max-h-full max-w-full object-contain rounded-lg"
        />
        <button
          @click="fullscreen = false"
          class="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white transition hover:bg-white/30"
        >
          <XMarkIcon class="h-6 w-6" />
        </button>
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
    image: '/certificates/google-workspace.jpg'  // ✅ JPEG file
  },
  {
    name: 'Microsoft Cybersecurity: Security, Compliance, Identity',
    year: '2026',
    issuer: 'Microsoft',
    image: '/certificates/microsoft-cybersecurity.jpg'  // ✅ JPEG file
  },
  {
    name: 'Network Security - Cisco',
    year: '2026',
    issuer: 'Cisco',
    image: '/certificates/cisco-network-security.jpg'  // ✅ JPEG file
  },
  {
    name: 'Linux Essentials - Cisco',
    year: '2026',
    issuer: 'Cisco',
    image: '/certificates/cisco-linux-essentials.jpg'  // ✅ JPEG file
  },
  {
    name: 'Operating Systems Basics - Cisco',
    year: '2025',
    issuer: 'Cisco',
    image: '/certificates/cisco-os-basics.jpg'  // ✅ JPEG file
  },
  {
    name: 'Intro to Cybersecurity - Cisco',
    year: '2025',
    issuer: 'Cisco',
    image: '/certificates/cisco-cybersecurity-intro.jpg'  // ✅ JPEG file
  }
])

const selectedCert = ref(null)
const fullscreen = ref(false)

const openModal = (cert) => {
  selectedCert.value = cert
  fullscreen.value = false
}

const closeModal = () => {
  selectedCert.value = null
  fullscreen.value = false
}

const expandFullscreen = () => {
  fullscreen.value = true
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