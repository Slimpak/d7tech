<script setup lang="ts">
const { t } = useI18n()

const stats = computed(() => [
  { label: t('stats.foundedLabel'), value: t('stats.foundedValue') },
  { label: t('stats.basedLabel'), value: t('stats.basedValue') },
  { label: t('stats.focusLabel'), value: t('stats.focusValue') },
])
</script>

<template>
  <div class="border-y border-white/5 bg-[#080D1A]/80">
    <div class="section-container py-5">
      <div class="flex flex-wrap justify-center md:justify-start gap-8 md:gap-16">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="flex items-center gap-3"
        >
          <span class="text-xs font-medium text-muted uppercase tracking-widest">{{ stat.label }}</span>
          <span class="h-3 w-px bg-white/10" />
          <span class="text-sm font-semibold text-white">{{ stat.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
