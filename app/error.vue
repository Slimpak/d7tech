<script setup lang="ts">
const { t } = useI18n()

defineProps<{
  error: {
    statusCode: number
    message?: string
  }
}>()
</script>

<template>
  <div class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <div class="absolute inset-0 grid-bg opacity-50" />
    <div class="glow-top-right opacity-50" />

    <div class="relative z-10 text-center max-w-lg mx-auto px-6">
      <p class="text-6xl font-bold gradient-text mb-4">
        {{ error.statusCode }}
      </p>
      <h1 class="text-2xl md:text-3xl font-bold text-white mb-4">
        {{ t('error.title') }}
      </h1>
      <p class="text-secondary mb-8">
        {{ t('error.subtitle') }}
      </p>
      <NuxtLink to="/" class="btn-primary inline-flex">
        {{ t('error.cta') }}
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>
