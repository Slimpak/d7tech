<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: 'Services — DeltaSevenTech',
  description:
    'Software development, SaaS platforms, data infrastructure, AI automation, product design, and technical consulting from DeltaSevenTech.',
})

interface ServiceDetail {
  icon: string
  titleKey: string
  descKey: string
  includesKeys: string[]
  forWhomKey: string
}

const services: ServiceDetail[] = [
  {
    icon: '⌨️',
    titleKey: 'pages.services.items.softwareDev.title',
    descKey: 'pages.services.items.softwareDev.desc',
    includesKeys: [
      'pages.services.items.softwareDev.includes[0]',
      'pages.services.items.softwareDev.includes[1]',
      'pages.services.items.softwareDev.includes[2]',
      'pages.services.items.softwareDev.includes[3]',
    ],
    forWhomKey: 'pages.services.items.softwareDev.forWhom',
  },
  {
    icon: '☁️',
    titleKey: 'pages.services.items.saas.title',
    descKey: 'pages.services.items.saas.desc',
    includesKeys: [
      'pages.services.items.saas.includes[0]',
      'pages.services.items.saas.includes[1]',
      'pages.services.items.saas.includes[2]',
      'pages.services.items.saas.includes[3]',
    ],
    forWhomKey: 'pages.services.items.saas.forWhom',
  },
  {
    icon: '🗄️',
    titleKey: 'pages.services.items.data.title',
    descKey: 'pages.services.items.data.desc',
    includesKeys: [
      'pages.services.items.data.includes[0]',
      'pages.services.items.data.includes[1]',
      'pages.services.items.data.includes[2]',
      'pages.services.items.data.includes[3]',
    ],
    forWhomKey: 'pages.services.items.data.forWhom',
  },
  {
    icon: '✦',
    titleKey: 'pages.services.items.ai.title',
    descKey: 'pages.services.items.ai.desc',
    includesKeys: [
      'pages.services.items.ai.includes[0]',
      'pages.services.items.ai.includes[1]',
      'pages.services.items.ai.includes[2]',
      'pages.services.items.ai.includes[3]',
    ],
    forWhomKey: 'pages.services.items.ai.forWhom',
  },
  {
    icon: '◈',
    titleKey: 'pages.services.items.design.title',
    descKey: 'pages.services.items.design.desc',
    includesKeys: [
      'pages.services.items.design.includes[0]',
      'pages.services.items.design.includes[1]',
      'pages.services.items.design.includes[2]',
      'pages.services.items.design.includes[3]',
    ],
    forWhomKey: 'pages.services.items.design.forWhom',
  },
  {
    icon: '◇',
    titleKey: 'pages.services.items.consulting.title',
    descKey: 'pages.services.items.consulting.desc',
    includesKeys: [
      'pages.services.items.consulting.includes[0]',
      'pages.services.items.consulting.includes[1]',
      'pages.services.items.consulting.includes[2]',
      'pages.services.items.consulting.includes[3]',
    ],
    forWhomKey: 'pages.services.items.consulting.forWhom',
  },
]
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero -->
    <section class="relative py-28 overflow-hidden">
      <div class="absolute inset-0 grid-bg opacity-60" />
      <div class="glow-top-right opacity-50" />
      <div class="section-container relative z-10 text-center max-w-3xl mx-auto">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7C4DFF]/10 border border-[#7C4DFF]/20 mb-8">
          <span class="text-xs font-medium text-[#A78BFA] tracking-wide">{{ t('pages.services.badge') }}</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
          {{ t('pages.services.heading') }}
        </h1>
        <p class="text-xl text-secondary leading-relaxed">
          {{ t('pages.services.subtitle') }}
        </p>
      </div>
    </section>

    <!-- Services -->
    <section class="pb-24">
      <div class="section-container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UiCard
            v-for="service in services"
            :key="service.titleKey"
            padding="lg"
          >
            <div class="text-2xl mb-4">{{ service.icon }}</div>
            <h3 class="text-xl font-semibold text-white mb-3">{{ t(service.titleKey) }}</h3>
            <p class="text-secondary leading-relaxed mb-5">{{ t(service.descKey) }}</p>

            <div class="mb-5">
              <p class="text-xs font-semibold text-muted uppercase tracking-widest mb-3">{{ t('pages.services.includes') }}</p>
              <ul class="space-y-2">
                <li
                  v-for="(includeKey, idx) in service.includesKeys"
                  :key="idx"
                  class="flex items-start gap-2.5 text-sm text-secondary"
                >
                  <span class="mt-1.5 w-1 h-1 rounded-full bg-[#7C4DFF] flex-shrink-0" />
                  {{ t(includeKey) }}
                </li>
              </ul>
            </div>

            <div class="pt-4 border-t border-white/5">
              <p class="text-xs text-muted">
                <span class="text-white/50 font-medium">{{ t('pages.services.for') }} </span>{{ t(service.forWhomKey) }}
              </p>
            </div>
          </UiCard>
        </div>
      </div>
    </section>

    <ContactSection />
  </div>
</template>
