<template>
  <div class="relative min-h-screen overflow-hidden bg-bg-main text-text-primary">
    <!-- Sparkle Background -->
    <div 
      class="pointer-events-none fixed inset-0 z-0 overflow-hidden" 
      aria-hidden="true"
    >
      <div 
        v-for="sparkle in sparkles" 
        :key="sparkle.id"
        class="sparkle absolute"
        :style="{
          left: sparkle.x,
          top: sparkle.y,
          width: sparkle.size,
          height: sparkle.size,
          opacity: sparkle.opacity,
          backgroundColor: sparkle.color,
          boxShadow: sparkle.glow,
          transform: `rotate(${sparkle.rotation}deg)`,
        }"
      />
    </div>

    <Header />
    
    <main class="relative z-10 pt-16">
      <Hero />
      <Summary />
      <Skills />
      <Experience />
      <Certifications />
      <Readiness />
      <EducationSection />
      <Contact />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Summary from './components/Summary.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Certifications from './components/Certifications.vue'
import Readiness from './components/Readiness.vue'
import EducationSection from './components/EducationSection.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

gsap.registerPlugin(ScrollTrigger)

const sparkles = ref([])
let animationFrame

// Disable right-click context menu
const disableContextMenu = (e) => e.preventDefault()

// Colors na KITA sa BOTH light at dark mode
const getSparkleColor = (isDark) => {
  if (isDark) {
    // Dark mode: bright colors para kita
    return [
      'rgba(255, 255, 255, 0.95)',   // white
      'rgba(186, 230, 253, 0.9)',    // light blue
      'rgba(253, 186, 116, 0.85)',   // light orange
      'rgba(216, 180, 254, 0.85)',   // light purple
    ]
  } else {
    // Light mode: DARKER colors para kita (hindi washed out)
    return [
      'rgba(2, 62, 138, 0.55)',      // deep blue
      'rgba(114, 47, 55, 0.5)',      // deep rose
      'rgba(126, 34, 206, 0.45)',    // deep purple
      'rgba(180, 83, 9, 0.5)',       // deep orange
      'rgba(21, 94, 117, 0.5)',      // deep teal
    ]
  }
}

const generateSparkles = () => {
  const sparkleArray = []
  const sparkleCount = window.innerWidth < 768 ? 200 : 280
  const isDark = document.documentElement.classList.contains('dark') || 
                 window.matchMedia('(prefers-color-scheme: dark)').matches
  const colors = getSparkleColor(isDark)
  
  for (let i = 0; i < sparkleCount; i++) {
    // Size: 1.5px to 3.5px
    const size = Math.random() * 2 + 1.5
    const color = colors[Math.floor(Math.random() * colors.length)]
    
    sparkleArray.push({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      size: `${size}px`,
      opacity: isDark ? Math.random() * 0.5 + 0.4 : Math.random() * 0.4 + 0.35,
      color: color,
      // Strong glow
      glow: `0 0 ${size * (isDark ? 3 : 1.5)}px ${color}`,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 3,
    })
  }
  
  return sparkleArray
}

const animateSparkles = () => {
  if (!sparkles.value.length) return
  
  const sparkleElements = document.querySelectorAll('.sparkle')
  const isDark = document.documentElement.classList.contains('dark')
  
  sparkleElements.forEach((sparkle, index) => {
    if (index >= sparkles.value.length) return
    
    // Movement
    let currentX = parseFloat(sparkles.value[index].x)
    let currentY = parseFloat(sparkles.value[index].y)
    
    currentX += sparkles.value[index].speedX * 0.25
    currentY += sparkles.value[index].speedY * 0.25
    
    // Wrap around
    if (currentX > 100) currentX = -5
    if (currentX < -5) currentX = 100
    if (currentY > 100) currentY = -5
    if (currentY < -5) currentY = 100
    
    // Rotation
    let currentRotation = sparkles.value[index].rotation
    currentRotation += sparkles.value[index].rotationSpeed
    
    // Apply position and rotation
    sparkle.style.left = `${currentX}%`
    sparkle.style.top = `${currentY}%`
    sparkle.style.transform = `rotate(${currentRotation}deg)`
    
    sparkles.value[index].x = currentX
    sparkles.value[index].y = currentY
    sparkles.value[index].rotation = currentRotation
    
    // SPARKLE / TWINKLE EFFECT
    const randomTwinkle = Math.random()
    
    // Big sparkle (mas noticeable)
    if (randomTwinkle > 0.993) {
      sparkle.style.opacity = isDark ? '1' : '0.85'
      sparkle.style.transform = `rotate(${currentRotation}deg) scale(2.5)`
      sparkle.style.boxShadow = `0 0 ${parseFloat(sparkles.value[index].size) * 4}px ${sparkles.value[index].color}`
      setTimeout(() => {
        sparkle.style.opacity = sparkles.value[index].opacity
        sparkle.style.transform = `rotate(${currentRotation}deg) scale(1)`
        sparkle.style.boxShadow = sparkles.value[index].glow
      }, 100)
    }
    // Medium sparkle
    else if (randomTwinkle > 0.988) {
      sparkle.style.opacity = isDark ? '0.9' : '0.75'
      sparkle.style.transform = `rotate(${currentRotation}deg) scale(1.8)`
      setTimeout(() => {
        sparkle.style.opacity = sparkles.value[index].opacity
        sparkle.style.transform = `rotate(${currentRotation}deg) scale(1)`
      }, 70)
    }
    // Subtle shimmer
    else if (randomTwinkle > 0.97) {
      sparkle.style.opacity = (parseFloat(sparkles.value[index].opacity) + 0.25).toString()
      setTimeout(() => {
        sparkle.style.opacity = sparkles.value[index].opacity
      }, 50)
    }
  })
  
  animationFrame = requestAnimationFrame(animateSparkles)
}

const refreshSparkles = () => {
  sparkles.value = generateSparkles()
}

onMounted(() => {
  sparkles.value = generateSparkles()
  animateSparkles()
  
  // Disable right-click context menu
  document.addEventListener('contextmenu', disableContextMenu)
  
  // Watch for theme changes
  const observer = new MutationObserver(() => {
    refreshSparkles()
  })
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'data-theme'] })
  
  // Scroll animations
  gsap.utils.toArray('.fade-up').forEach((element) => {
    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 0.85,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 86%',
      },
    })
  })
})

onBeforeUnmount(() => {
  if (animationFrame) cancelAnimationFrame(animationFrame)
  document.removeEventListener('contextmenu', disableContextMenu)
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
})
</script>

<style scoped>
.sparkle {
  transition: opacity 0.05s ease, transform 0.05s ease, box-shadow 0.05s ease;
  will-change: transform, left, top, opacity;
  pointer-events: none;
  border-radius: 50%;
}

.sparkle {
  transition: left 0.05s linear, top 0.05s linear;
}
</style>