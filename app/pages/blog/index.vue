<script setup lang="ts">
const { t, locale } = useI18n()

useSeoMeta({
  title: 'Blog — DeltaSevenTech',
  description: 'Insights on technology, software architecture, SaaS, AI, and digital product development from DeltaSevenTech.',
})

const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog').order('date', 'DESC').all(),
)

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString(locale.value === 'uk' ? 'uk-UA' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute inset-0 grid-bg opacity-60" />
      <div class="glow-top-right opacity-40" />
      <div class="section-container relative z-10 text-center max-w-2xl mx-auto">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7C4DFF]/10 border border-[#7C4DFF]/20 mb-8">
          <span class="text-xs font-medium text-[#A78BFA] tracking-wide">{{ t('pages.blog.badge') }}</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
          {{ t('pages.blog.heading') }}
        </h1>
        <p class="text-lg text-secondary leading-relaxed">
          {{ t('pages.blog.subtitle') }}
        </p>
      </div>
    </section>

    <!-- Posts -->
    <section class="pb-24">
      <div class="section-container">
        <div
          v-if="posts && posts.length"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <NuxtLink
            v-for="post in posts"
            :key="post.path"
            :to="post.path"
            class="block group"
          >
            <UiCard padding="lg">
              <div v-if="post.date" class="text-xs text-muted mb-3">
                {{ formatDate(post.date as string) }}
              </div>
              <h2 class="text-lg font-semibold text-white mb-3 group-hover:text-[#A78BFA] transition-colors leading-snug">
                {{ post.title }}
              </h2>
              <p v-if="post.description" class="text-sm text-secondary leading-relaxed mb-5">
                {{ post.description }}
              </p>
              <span class="text-xs font-medium text-[#A78BFA] flex items-center gap-1.5">
                {{ t('pages.blog.readArticle') }}
                <svg class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </UiCard>
          </NuxtLink>
        </div>
        <div v-else class="text-center py-20 text-muted">
          {{ t('pages.blog.noPosts') }}
        </div>
      </div>
    </section>
  </div>
</template>
