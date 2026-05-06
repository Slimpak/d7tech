<script setup lang="ts">
const { t, locale } = useI18n()
const route = useRoute()
const slug = route.params.slug as string

const { data: post } = await useAsyncData(`blog-${slug}`, () =>
  queryCollection('blog').path(`/blog/${slug}`).first(),
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

useSeoMeta({
  title: () => `${post.value?.title} — DeltaSevenTech`,
  description: () => post.value?.description as string | undefined,
})

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
    <article class="relative py-20">
      <div class="absolute inset-0 grid-bg opacity-40" />
      <div class="section-container relative z-10 max-w-3xl mx-auto">
        <!-- Back -->
        <NuxtLink
          to="/blog"
          class="inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-colors mb-10"
        >
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          {{ t('pages.blog.backToBlog') }}
        </NuxtLink>

        <!-- Header -->
        <header class="mb-12">
          <div v-if="post?.date" class="text-xs text-muted mb-4">
            {{ formatDate(post.date as string) }}
          </div>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            {{ post?.title }}
          </h1>
          <p v-if="post?.description" class="text-xl text-secondary leading-relaxed">
            {{ post?.description }}
          </p>
        </header>

        <!-- Content -->
        <div class="prose prose-invert prose-lg max-w-none
          prose-headings:font-bold prose-headings:tracking-tight
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-white/65 prose-p:leading-relaxed
          prose-li:text-white/65
          prose-strong:text-white prose-strong:font-semibold
          prose-a:text-[#A78BFA] prose-a:no-underline hover:prose-a:underline
          prose-code:text-[#A78BFA] prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
          prose-pre:bg-white/[0.04] prose-pre:border prose-pre:border-white/10
          prose-blockquote:border-l-[#7C4DFF] prose-blockquote:text-white/50
          prose-hr:border-white/10
        ">
          <ContentRenderer v-if="post" :value="post" />
        </div>
      </div>
    </article>

    <ContactSection />
  </div>
</template>
