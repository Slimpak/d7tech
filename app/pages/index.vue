<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => t('pages.about.badge') ? 'DeltaSevenTech — Digital Products, Platforms & Infrastructure' : 'DeltaSevenTech',
  description: 'DeltaSevenTech is a Ukraine-based technology company building scalable digital systems, SaaS platforms, and AI-driven solutions for global markets.',
  ogTitle: 'DeltaSevenTech — Digital Products, Platforms & Infrastructure',
  ogDescription: 'Ukraine-based technology company building scalable digital systems, SaaS platforms, and AI-driven solutions for global markets.',
})
</script>

<template>
  <div>
    <HeroSection />
    <StatsStrip />
    <ServicesGrid />
    <TechnologiesSection />
    <OurWorkSection />
    <SolutionsSection />
    <AboutPreview />
    <ContactSection />
  </div>
</template>
