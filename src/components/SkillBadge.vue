<template>
  <span class="inline-flex items-center gap-2 rounded-full border border-border-color bg-bg-card px-3 py-1.5 text-sm font-medium text-text-primary shadow-sm transition-all duration-300 hover:border-accent hover:shadow-md hover:-translate-y-0.5">
    <component :is="iconComponent" class="h-4 w-4 text-accent" aria-hidden="true" />
    {{ label }}
  </span>
</template>

<script setup>
import { computed } from 'vue'
import { 
  SparklesIcon, ComputerDesktopIcon, ChatBubbleLeftRightIcon, 
  CalendarDaysIcon, HeartIcon, CodeBracketIcon,
  GlobeAltIcon, ShieldCheckIcon, CloudIcon, BoltIcon
} from '@heroicons/vue/24/outline'

const props = defineProps({
  label: {
    type: String,
    required: true
  }
})

const icons = [
  { component: SparklesIcon, keys: ['ai', 'chatgpt', 'gemini', 'claude', 'codex', 'deepseek'] },
  { component: CodeBracketIcon, keys: ['vue', 'frontend', 'developer', 'html', 'css', 'javascript', 'firebase'] },
  { component: ComputerDesktopIcon, keys: ['google workspace', 'microsoft office', 'calendar', 'productivity'] },
  { component: ChatBubbleLeftRightIcon, keys: ['zoom', 'meet', 'teams', 'discord', 'slack', 'communication'] },
  { component: CalendarDaysIcon, keys: ['notion', 'trello', 'asana', 'clickup', 'management'] },
  { component: HeartIcon, keys: ['canva', 'figma', 'capcut', 'design'] },
  { component: GlobeAltIcon, keys: ['remote', 'timezone', 'global'] },
  { component: CloudIcon, keys: ['internet', 'cloud', 'backup'] },
  { component: BoltIcon, keys: ['power', 'ups', 'backup'] },
]

const iconComponent = computed(() => {
  const normalized = props.label.toLowerCase()
  const found = icons.find((item) => item.keys.some((key) => normalized.includes(key)))
  return found?.component || SparklesIcon
})
</script>