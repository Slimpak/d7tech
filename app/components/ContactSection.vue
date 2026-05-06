<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="py-24 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-radial from-[#7C4DFF]/8 via-transparent to-transparent" />
    <div class="section-container relative z-10">
      <div class="text-center mb-12">
        <SectionHeading :label="t('contact.label')">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            {{ t('contact.heading') }}
          </h2>
          <p class="text-lg text-secondary max-w-lg mx-auto mb-8">
            {{ t('contact.subtitle') }}
          </p>
        </SectionHeading>
        <div class="flex flex-wrap gap-3 justify-center">
          <UiButton to="/contact" variant="primary">
            {{ t('contact.cta') }}
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </UiButton>
          <UiButton href="mailto:contact@delta-seven.tech" variant="secondary">
            {{ t('contact.email') }}
          </UiButton>
        </div>
      </div>

      <!-- Map -->
      <div class="max-w-3xl mx-auto">
        <LocationMap />
      </div>
    </div>
  </section>
</template>
