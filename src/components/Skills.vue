<template>
  <section id="skills" class="section-shell py-12 scroll-mt-20">
    <div class="fade-up mb-8">
      <p class="text-sm font-bold uppercase tracking-widest text-accent-primary">Key Skills</p>
      <h2 class="mt-2 text-3xl font-black text-light-text dark:text-dark-text">Digital operations, creative polish, and steady execution.</h2>
    </div>
    <GlassCard class="fade-up">
      <div class="flex flex-wrap gap-3">
        <SkillBadge v-for="skill in keySkills" :key="skill" :label="skill" />
      </div>
    </GlassCard>

    <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-5 mt-8">
      <GlassCard v-for="group in techGroups" :key="group.title" class="fade-up">
        <component :is="group.icon" class="h-8 w-8 text-accent-primary" aria-hidden="true" />
        <h3 class="mt-4 text-xl font-black text-light-text dark:text-dark-text">{{ group.title }}</h3>
        <div class="mt-5 flex flex-wrap gap-2">
          <SkillBadge v-for="item in group.items" :key="item" :label="item" />
        </div>
      </GlassCard>
    </div>
  </section>
</template>

<script setup>
import GlassCard from './GlassCard.vue'
import SkillBadge from './SkillBadge.vue'
import { SparklesIcon, ComputerDesktopIcon, ChatBubbleLeftRightIcon, CalendarDaysIcon, HeartIcon } from '@heroicons/vue/24/outline'

const keySkills = [
  'Google Workspace', 'Microsoft Office', 'Email Management', 'Calendar Management',
  'Data Entry', 'Canva', 'ChatGPT & AI Tools', 'Time Management', 'Attention to Detail', 'Communication',
]

const techGroups = [
  { title: 'AI Tools', icon: SparklesIcon, items: ['ChatGPT', 'Grammarly', 'Canva AI', 'Gemini', 'Claude', 'Codex', 'Deepseek'] },
  { title: 'Productivity', icon: ComputerDesktopIcon, items: ['Google Workspace', 'Microsoft Office', 'Google Calendar'] },
  { title: 'Communication', icon: ChatBubbleLeftRightIcon, items: ['Zoom', 'Google Meet', 'Microsoft Teams', 'Discord', 'Slack'] },
  { title: 'Project Management', icon: CalendarDaysIcon, items: ['Notion', 'Trello', 'Asana', 'ClickUp'] },
  { title: 'Design/Social', icon: HeartIcon, items: ['Figma', 'Canva', 'CapCut', 'Meta Business Suite'] },
]
</script>
