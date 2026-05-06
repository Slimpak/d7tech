<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: 'About — DeltaSevenTech',
  description:
    'Learn about DeltaSevenTech — a Ukraine-based technology company founded in 2025, building scalable digital products for global markets.',
})

const values = computed(() => [
  { title: t('about.values.scalability'), description: t('pages.about.valuesTitle') === t('pages.about.valuesTitle') ? t('about.values.scalabilityDesc') : '' },
  { title: t('about.values.reliability'), description: t('about.values.reliabilityDesc') },
  { title: t('about.values.product'), description: t('about.values.productDesc') },
  { title: t('about.values.innovation'), description: t('about.values.innovationDesc') },
])

const team = computed(() => [
  { label: t('pages.about.statFounded'), value: t('pages.about.statFoundedVal') },
  { label: t('pages.about.statBased'), value: t('pages.about.statBasedVal') },
  { label: t('pages.about.statFocus'), value: t('pages.about.statFocusVal') },
  { label: t('pages.about.statApproach'), value: t('pages.about.statApproachVal') },
])
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero -->
    <section class="relative py-28 overflow-hidden">
      <div class="absolute inset-0 grid-bg opacity-60" />
      <div class="glow-top-right opacity-60" />
      <div class="section-container relative z-10">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7C4DFF]/10 border border-[#7C4DFF]/20 mb-8">
            <span class="text-xs font-medium text-[#A78BFA] tracking-wide">{{ t('pages.about.badge') }}</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            {{ t('pages.about.heading') }}<br>
            <span class="gradient-text">{{ t('pages.about.headingAccent') }}</span>
          </h1>
          <p class="text-xl text-secondary leading-relaxed">
            {{ t('pages.about.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Quick stats -->
    <section class="border-y border-white/5 bg-[#080D1A]/80">
      <div class="section-container py-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div
            v-for="item in team"
            :key="item.label"
            class="text-center"
          >
            <p class="text-2xl font-bold text-white mb-1">{{ item.value }}</p>
            <p class="text-xs text-muted uppercase tracking-widest">{{ item.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission -->
    <section class="py-24">
      <div class="section-container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading :label="t('pages.about.missionLabel')" align="left">
              <h2 class="text-3xl font-bold text-white mb-5 tracking-tight">
                {{ t('pages.about.missionHeading') }}
              </h2>
            </SectionHeading>
            <div class="space-y-4 text-secondary leading-relaxed">
              <p>{{ t('pages.about.p1') }}</p>
              <p>{{ t('pages.about.p2') }}</p>
              <p>{{ t('pages.about.p3') }}</p>
            </div>
          </div>

          <!-- Values -->
          <div class="space-y-4">
            <p class="text-xs font-semibold text-muted uppercase tracking-[0.15em] mb-6">{{ t('pages.about.valuesTitle') }}</p>
            <UiCard
              v-for="value in values"
              :key="value.title"
              padding="md"
            >
              <h4 class="text-sm font-semibold text-white mb-1.5">{{ value.title }}</h4>
              <p class="text-sm text-secondary leading-relaxed">{{ value.description }}</p>
            </UiCard>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <ContactSection />
  </div>
</template>
