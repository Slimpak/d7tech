<script setup lang="ts">
const { t } = useI18n()

const technologies = [
  'Nuxt', 'Vue', 'TypeScript', 'Node.js', 'PostgreSQL',
  'Docker', 'AWS', 'Tailwind CSS', 'GitHub', 'Redis',
]
</script>

<template>
  <section class="py-16 border-y border-white/5 overflow-hidden">
    <div class="section-container">
      <p class="text-center text-xs font-semibold text-muted uppercase tracking-[0.15em] mb-8">
        {{ t('tech.label') }}
      </p>
      <div class="flex flex-wrap gap-3 justify-center">
        <span
          v-for="tech in technologies"
          :key="tech"
          class="px-4 py-2 rounded-lg glass-card text-sm font-medium text-white/70 hover:text-white hover:border-[#7C4DFF]/30 hover:bg-[#7C4DFF]/5 transition-all duration-200 cursor-default"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </section>
</template>
