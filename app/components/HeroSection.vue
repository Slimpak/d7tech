<script setup lang="ts">
const { t } = useI18n()

const stats = computed(() => [
  { label: t('stats.foundedLabel'), value: t('stats.foundedValue') },
  { label: t('stats.basedLabel'), value: t('stats.basedValue') },
  { label: t('stats.focusLabel'), value: t('stats.focusValue') },
])
</script>

<template>
  <section class="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden pt-10 pb-16">
    <!-- Background effects -->
    <div class="absolute inset-0 grid-bg opacity-100" />
    <div class="glow-top-right" />
    <div class="glow-bottom-left" />

    <!-- Extra glowing nodes -->
    <div class="absolute top-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-[#7C4DFF] opacity-60 blur-[1px]" />
    <div class="absolute top-2/3 right-1/3 w-1 h-1 rounded-full bg-[#A78BFA] opacity-40" />
    <div class="absolute top-1/2 left-1/2 w-px h-24 bg-gradient-to-b from-transparent via-[#7C4DFF]/30 to-transparent" />
    <div class="absolute top-1/4 right-1/4 w-24 h-px bg-gradient-to-r from-transparent via-[#7C4DFF]/20 to-transparent" />

    <div class="section-container relative z-10 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Left: Copy -->
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7C4DFF]/10 border border-[#7C4DFF]/20 mb-8">
            <span class="w-1.5 h-1.5 rounded-full bg-[#7C4DFF] animate-pulse" />
            <span class="text-xs font-medium text-[#A78BFA] tracking-wide">{{ t('hero.badge') }}</span>
          </div>

          <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08] mb-8">
            <span class="block text-white">{{ t('hero.h1_1') }}</span>
            <span class="block text-white">{{ t('hero.h1_2') }}</span>
            <span class="block gradient-text">{{ t('hero.h1_3') }}</span>
          </h1>

          <p class="text-lg md:text-xl text-secondary leading-relaxed max-w-lg mb-10">
            {{ t('hero.subtitle') }}
          </p>

          <div class="flex flex-wrap gap-3 mb-12">
            <UiButton to="/contact" variant="primary">
              {{ t('hero.cta1') }}
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </UiButton>
            <UiButton to="/#services" variant="secondary">
              {{ t('hero.cta2') }}
            </UiButton>
          </div>

          <!-- Stats -->
          <div class="flex flex-wrap gap-6">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="flex items-center gap-2.5"
            >
              <div class="w-1 h-1 rounded-full bg-[#7C4DFF]" />
              <span class="text-xs text-muted uppercase tracking-widest">{{ stat.label }}</span>
              <span class="text-sm font-semibold text-white/90">{{ stat.value }}</span>
            </div>
          </div>
        </div>

        <!-- Right: Contact card -->
        <div class="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
          <UiCard :hover="false" padding="lg">
            <div class="mb-6">
              <h2 class="text-xl font-semibold text-white mb-1.5">{{ t('contactForm.title') }}</h2>
              <p class="text-sm text-secondary leading-relaxed">
                {{ t('contactForm.subtitle') }}
              </p>
            </div>
            <ContactForm />
          </UiCard>
        </div>
      </div>
    </div>
  </section>
</template>
