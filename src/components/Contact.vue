<template>
  <section id="contact" class="section-shell py-12 scroll-mt-20">
    <div class="fade-up mb-8 text-center">
      <p class="text-sm font-bold uppercase tracking-widest text-accent">Get in Touch</p>
      <h2 class="mt-2 text-4xl font-black text-text-primary">Let's Work Together</h2>
      <p class="mt-4 text-lg text-text-primary/70 max-w-2xl mx-auto">
        Open to remote opportunities — VA roles, frontend development, IT support, and more. Let's connect!
      </p>
    </div>

    <div class="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
      <!-- Left side: Contact Info -->
      <div class="space-y-4">
        <a href="https://mail.google.com/mail/?view=cm&to=alffinandrade%40gmail.com&su=Job%20Opportunity%20for%20Maria%20Alffin&body=Hi%20Maria%2C%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity%20with%20you.%0A%0A" target="_blank" rel="noreferrer" class="block">
          <GlassCard class="fade-up cursor-pointer transition hover:-translate-y-1 hover:border-accent">
            <div class="flex items-start gap-4">
              <div class="rounded-full bg-accent/10 p-3">
                <EnvelopeIcon class="h-6 w-6 text-accent" />
              </div>
              <div>
                <p class="text-sm font-bold uppercase tracking-widest text-accent">Email</p>
                <p class="text-lg text-text-primary">alffinandrade@gmail.com</p>
              </div>
            </div>
          </GlassCard>
        </a>

        <a href="https://web.whatsapp.com/send?phone=639559436707" target="_blank" rel="noreferrer" class="block">
          <GlassCard class="fade-up cursor-pointer transition hover:-translate-y-1 hover:border-accent">
            <div class="flex items-start gap-4">
              <div class="rounded-full bg-accent/10 p-3">
                <PhoneIcon class="h-6 w-6 text-accent" />
              </div>
              <div>
                <p class="text-sm font-bold uppercase tracking-widest text-accent">Phone / WhatsApp</p>
                <p class="text-lg text-text-primary">+63 955 943 6707</p>
              </div>
            </div>
          </GlassCard>
        </a>

        <GlassCard class="fade-up">
          <div class="flex items-start gap-4">
            <div class="rounded-full bg-accent/10 p-3">
              <MapPinIcon class="h-6 w-6 text-accent" />
            </div>
            <div>
              <p class="text-sm font-bold uppercase tracking-widest text-accent">Location</p>
              <p class="text-lg text-text-primary">Laguna, Philippines PH</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard class="fade-up">
          <div class="flex items-start gap-4">
            <div class="rounded-full bg-accent/10 p-3">
              <ClockIcon class="h-6 w-6 text-accent" />
            </div>
            <div>
              <p class="text-sm font-bold uppercase tracking-widest text-accent">Availability</p>
              <p class="text-lg text-text-primary">Flexible — US/UK/AU Timezones</p>
            </div>
          </div>
        </GlassCard>
      </div>

      <!-- Right side: Contact Form -->
      <GlassCard class="fade-up">
        <h3 class="text-2xl font-black text-text-primary mb-6">Send Me a Message</h3>
        
        <form @submit.prevent="handleSubmit" class="space-y-5">
          <div>
            <label class="block text-sm font-bold uppercase tracking-widest text-accent mb-2">Your Name</label>
            <input 
              v-model="form.name"
              type="text" 
              placeholder="John Smith"
              class="w-full rounded-xl border border-border-color bg-bg-card px-4 py-3 text-text-primary placeholder:text-text-primary/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition"
              required
            />
          </div>

          <div>
            <label class="block text-sm font-bold uppercase tracking-widest text-accent mb-2">Email Address</label>
            <input 
              v-model="form.email"
              type="email" 
              placeholder="john@company.com"
              class="w-full rounded-xl border border-border-color bg-bg-card px-4 py-3 text-text-primary placeholder:text-text-primary/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition"
              required
            />
          </div>

          <div>
            <label class="block text-sm font-bold uppercase tracking-widest text-accent mb-2">Message</label>
            <textarea 
              v-model="form.message"
              rows="4"
              placeholder="Hi Maria, I'd like to discuss a remote opportunity with you..."
              class="w-full rounded-xl border border-border-color bg-bg-card px-4 py-3 text-text-primary placeholder:text-text-primary/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition resize-none"
              required
            ></textarea>
          </div>

          <button 
            type="submit"
            :disabled="isLoading"
            class="w-full rounded-full bg-accent px-6 py-3 font-bold text-white transition hover:scale-105 hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isLoading ? 'Sending...' : 'Send Message' }}
          </button>
        </form>

        <!-- Success Message -->
        <p v-if="submitted" class="mt-4 text-center text-accent animate-pulse">
          ✓ Message sent! I'll get back to you soon.
        </p>

        <!-- Error Message -->
        <p v-if="errorMessage" class="mt-4 text-center text-red-500">
          {{ errorMessage }}
        </p>
      </GlassCard>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import GlassCard from './GlassCard.vue'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/vue/24/outline'

// ============================================
// FORMSPREE CONFIGURATION - GUMAGANA NA ITO!
// ============================================
// FORM ID mula sa Formspree: https://formspree.io/f/xwvjqqgk
const FORMSPREE_ID = 'xwvjqqgk'

// Form state
const form = ref({ 
  name: '', 
  email: '', 
  message: '' 
})
const submitted = ref(false)
const isLoading = ref(false)
const errorMessage = ref('')

// Handle form submission
const handleSubmit = async () => {
  // Reset messages
  errorMessage.value = ''
  
  // Validate form - lahat ng fields kailangan may laman
  if (!form.value.name || !form.value.email || !form.value.message) {
    errorMessage.value = '❌ Please fill out all fields.'
    return
  }
  
  // Validate email format - dapat tama ang email address
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.value.email)) {
    errorMessage.value = '❌ Please enter a valid email address.'
    return
  }
  
  // Start loading state
  isLoading.value = true
  
  try {
    // Send data to Formspree
    const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
      }),
    })
    
    // Check if successful
    if (response.ok) {
      // Show success message
      submitted.value = true
      
      // Clear form
      form.value = { name: '', email: '', message: '' }
      
      // Hide success message after 5 seconds
      setTimeout(() => { 
        submitted.value = false 
      }, 5000)
    } else {
      // Handle error response
      const errorData = await response.json()
      console.error('Formspree error:', errorData)
      throw new Error('Failed to send message')
    }
    
  } catch (error) {
    console.error('Formspree Error:', error)
    errorMessage.value = '❌ Failed to send message. Please try again or email me directly at alffinandrade@gmail.com'
    
    // Hide error message after 5 seconds
    setTimeout(() => { 
      errorMessage.value = '' 
    }, 5000)
  } finally {
    // Stop loading state
    isLoading.value = false
  }
}
</script>