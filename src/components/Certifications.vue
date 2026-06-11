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
        class="group fade-up"
      >
        <GlassCard 
          class="relative min-h-[280px] cursor-pointer transition-all duration-300 hover:scale-105 hover:border-accent-primary/50 hover:shadow-xl hover:shadow-accent-primary/10"
          @mouseenter="showPreview(cert)"
          @mouseleave="hidePreview"
          @dblclick="expandImage(cert)"
        >
          <!-- Normal state -->
          <div class="flex flex-col items-start justify-between h-full">
            <ShieldCheckIcon class="h-8 w-8 text-accent-primary" aria-hidden="true" />
            <div>
              <h3 class="mt-4 min-h-14 text-lg font-black text-light-text dark:text-dark-text">{{ cert.name }}</h3>
              <p class="mt-3 text-sm font-semibold text-accent-primary">{{ cert.year }}</p>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>

    <!-- Hover Preview Modal -->
    <Teleport to="body">
      <div
        v-if="previewCert"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md transition-all duration-300"
        @click="previewCert = null"
      >
        <div class="relative max-h-[85vh] max-w-[85vw]" @click.stop>
          <img
            :src="previewCert.image"
            :alt="previewCert.name"
            class="max-h-[80vh] max-w-[80vw] object-contain rounded-2xl shadow-2xl"
          />
          <button
            @click="previewCert = null"
            class="absolute -top-12 right-0 rounded-full bg-red-500/20 p-2 text-red-500 transition hover:bg-red-500 hover:text-white"
          >
            ✕
          </button>
          <div class="absolute -bottom-12 left-0 text-white text-sm bg-black/50 px-3 py-1 rounded-lg">
            {{ previewCert.name }} • {{ previewCert.year }}
          </div>
          <p class="absolute top-4 right-4 text-white text-xs bg-black/50 px-2 py-1 rounded">
            Double click to expand
          </p>
        </div>
      </div>
    </Teleport>

    <!-- Fullscreen Expand -->
    <Teleport to="body">
      <div
        v-if="expandedCert"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
        @click="expandedCert = null"
      >
        <div class="relative max-h-[95vh] max-w-[95vw]" @click.stop>
          <img
            :src="expandedCert.image"
            :alt="expandedCert.name"
            class="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
          />
          <button
            @click="expandedCert = null"
            class="absolute -top-12 right-0 rounded-full bg-red-500/20 p-2 text-red-500 transition hover:bg-red-500 hover:text-white"
          >
            ✕
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
import { ShieldCheckIcon } from '@heroicons/vue/24/outline'

const previewCert = ref(null)
const expandedCert = ref(null)

const certifications = ref([
  {
    name: 'Google Workspace Administrator Professional Certificate',
    year: '2026',
    issuer: 'Google',
    image: '/certificates/google-workspace.jpeg'
  },
  {
    name: 'Microsoft Cybersecurity: Security, Compliance, Identity',
    year: '2026',
    issuer: 'Microsoft',
    image: '/certificates/microsoft-cybersecurity.jpeg'
  },
  {
    name: 'Network Security - Cisco',
    year: '2026',
    issuer: 'Cisco',
    image: '/certificates/cisco-network-security.jpeg'
  },
  {
    name: 'Linux Essentials - Cisco',
    year: '2026',
    issuer: 'Cisco',
    image: '/certificates/cisco-linux-essentials.jpeg'
  },
  {
    name: 'Operating Systems Basics - Cisco',
    year: '2025',
    issuer: 'Cisco',
    image: '/certificates/cisco-os-basics.jpeg'
  }
])

const showPreview = (cert) => {
  previewCert.value = cert
}

const hidePreview = () => {
  previewCert.value = null
}

const expandImage = (cert) => {
  previewCert.value = null
  expandedCert.value = cert
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