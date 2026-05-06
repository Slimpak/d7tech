<script setup lang="ts">
const { t } = useI18n()

const values = computed(() => [
  { label: t('about.values.scalability'), description: t('about.values.scalabilityDesc') },
  { label: t('about.values.reliability'), description: t('about.values.reliabilityDesc') },
  { label: t('about.values.product'), description: t('about.values.productDesc') },
  { label: t('about.values.innovation'), description: t('about.values.innovationDesc') },
])
</script>

<template>
  <section class="py-24">
    <div class="section-container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Text -->
        <div>
          <SectionHeading :label="t('about.label')" align="left">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight leading-tight">
              {{ t('about.heading') }}
            </h2>
          </SectionHeading>
          <p class="text-secondary leading-relaxed mb-8">
            {{ t('about.text1') }}
          </p>
          <p class="text-secondary leading-relaxed mb-10">
            {{ t('about.text2') }}
          </p>
          <UiButton to="/about" variant="secondary">
            {{ t('about.cta') }}
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </UiButton>
        </div>

        <!-- Values grid -->
        <div class="grid grid-cols-2 gap-4">
          <UiCard
            v-for="value in values"
            :key="value.label"
            padding="md"
          >
            <div class="w-1.5 h-1.5 rounded-full bg-[#7C4DFF] mb-3" />
            <h4 class="text-sm font-semibold text-white mb-1">{{ value.label }}</h4>
            <p class="text-xs text-muted leading-relaxed">{{ value.description }}</p>
          </UiCard>
        </div>
      </div>
    </div>
  </section>
</template>
