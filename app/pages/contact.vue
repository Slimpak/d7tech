<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: 'Contact — DeltaSevenTech',
  description:
    'Get in touch with DeltaSevenTech for project development, partnerships, or investment inquiries.',
})
</script>

<template>
  <div class="min-h-screen">
    <section class="relative py-28 overflow-hidden">
      <div class="absolute inset-0 grid-bg opacity-60" />
      <div class="glow-top-right opacity-60" />
      <div class="glow-bottom-left opacity-40" />

      <div class="section-container relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <!-- Left: copy -->
          <div class="pt-4">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7C4DFF]/10 border border-[#7C4DFF]/20 mb-8">
              <span class="text-xs font-medium text-[#A78BFA] tracking-wide">{{ t('pages.contact.badge') }}</span>
            </div>
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              {{ t('pages.contact.heading') }} <span class="gradient-text">{{ t('pages.contact.headingAccent') }}</span>
            </h1>
            <p class="text-xl text-secondary leading-relaxed mb-10">
              {{ t('pages.contact.subtitle') }}
            </p>

            <div class="space-y-4">
              <div class="flex items-start gap-4 p-4 glass-card rounded-xl">
                <div class="w-9 h-9 rounded-lg bg-[#7C4DFF]/10 border border-[#7C4DFF]/20 flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-[#A78BFA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p class="text-xs text-muted mb-0.5">{{ t('pages.contact.emailLabel') }}</p>
                  <a href="mailto:contact@delta-seven.tech" class="text-white hover:text-[#A78BFA] transition-colors text-sm font-medium">
                    {{ t('contact.email') }}
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4 p-4 glass-card rounded-xl">
                <div class="w-9 h-9 rounded-lg bg-[#7C4DFF]/10 border border-[#7C4DFF]/20 flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-[#A78BFA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p class="text-xs text-muted mb-0.5">{{ t('pages.contact.locationLabel') }}</p>
                  <p class="text-sm font-medium text-white">{{ t('pages.contact.locationValue') }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: form card -->
          <div>
            <UiCard :hover="false" padding="lg">
              <h2 class="text-xl font-semibold text-white mb-1.5">{{ t('pages.contact.formTitle') }}</h2>
              <p class="text-sm text-secondary mb-6">
                {{ t('pages.contact.formSubtitle') }}
              </p>
              <ContactForm />
            </UiCard>
          </div>
        </div>

        <!-- Map -->
        <div class="mt-16">
          <LocationMap />
        </div>
      </div>
    </section>
  </div>
</template>
