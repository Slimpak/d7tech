<script setup lang="ts">
const { t } = useI18n()

const solutions = computed(() => [
  {
    title: t('solutions.items.internal.title'),
    description: t('solutions.items.internal.desc'),
    tags: ['Dashboard', 'Admin', 'Automation'],
  },
  {
    title: t('solutions.items.client.title'),
    description: t('solutions.items.client.desc'),
    tags: ['B2B', 'Portal', 'Marketplace'],
  },
  {
    title: t('solutions.items.automation.title'),
    description: t('solutions.items.automation.desc'),
    tags: ['Workflows', 'Integrations', 'ETL'],
  },
  {
    title: t('solutions.items.data.title'),
    description: t('solutions.items.data.desc'),
    tags: ['Analytics', 'BI', 'Pipelines'],
  },
])
</script>

<template>
  <section class="py-24 relative">
    <div class="absolute inset-0 bg-[#080D1A]/40" />
    <div class="section-container relative z-10">
      <SectionHeading :label="t('solutions.label')">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          {{ t('solutions.heading') }}
        </h2>
        <p class="text-lg text-secondary max-w-2xl mx-auto">
          {{ t('solutions.subtitle') }}
        </p>
      </SectionHeading>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <UiCard
          v-for="solution in solutions"
          :key="solution.title"
          padding="lg"
        >
          <h3 class="text-lg font-semibold text-white mb-3">{{ solution.title }}</h3>
          <p class="text-sm text-secondary leading-relaxed mb-5">{{ solution.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in solution.tags"
              :key="tag"
              class="px-2.5 py-1 rounded-md bg-[#7C4DFF]/10 border border-[#7C4DFF]/15 text-xs font-medium text-[#A78BFA]"
            >
              {{ tag }}
            </span>
          </div>
        </UiCard>
      </div>
    </div>
  </section>
</template>
