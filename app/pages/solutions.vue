<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: 'Solutions — DeltaSevenTech',
  description:
    'Internal digital products, client platforms, automation systems, data-driven tools, and R&D experiments built by DeltaSevenTech.',
})

const solutions = computed(() => (t('pages.solutions.items') as unknown as Array<{ tag: string, title: string, desc: string, tags: string[] }>))
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero -->
    <section class="relative py-28 overflow-hidden">
      <div class="absolute inset-0 grid-bg opacity-60" />
      <div class="glow-top-right opacity-50" />
      <div class="section-container relative z-10 text-center max-w-3xl mx-auto">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7C4DFF]/10 border border-[#7C4DFF]/20 mb-8">
          <span class="text-xs font-medium text-[#A78BFA] tracking-wide">{{ t('pages.solutions.badge') }}</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
          {{ t('pages.solutions.heading') }}
        </h1>
        <p class="text-xl text-secondary leading-relaxed">
          {{ t('pages.solutions.subtitle') }}
        </p>
      </div>
    </section>

    <!-- Solutions list -->
    <section class="pb-24">
      <div class="section-container">
        <div class="space-y-5">
          <UiCard
            v-for="(solution, idx) in solutions"
            :key="idx"
            padding="lg"
          >
            <div class="flex flex-col md:flex-row md:items-start gap-6">
              <div class="flex-shrink-0">
                <span class="text-3xl font-bold gradient-text font-mono">{{ solution.tag }}</span>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-white mb-3">{{ solution.title }}</h3>
                <p class="text-secondary leading-relaxed mb-4">{{ solution.desc }}</p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in solution.tags"
                    :key="tag"
                    class="px-2.5 py-1 rounded-md bg-[#7C4DFF]/10 border border-[#7C4DFF]/15 text-xs font-medium text-[#A78BFA]"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </UiCard>
        </div>
      </div>
    </section>

    <ContactSection />
  </div>
</template>
