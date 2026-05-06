<script setup lang="ts">
const { t } = useI18n()

const navLinks = computed(() => [
  { label: t('nav.whatWeDo'), href: '/#services' },
  { label: t('nav.solutions'), href: '/solutions' },
  { label: t('nav.about'), href: '/about' },
  { label: t('nav.blog'), href: '/blog' },
  { label: t('nav.contact'), href: '/contact' },
])
</script>

<template>
  <footer class="border-t border-white/5 bg-[#080D1A]">
    <div class="section-container py-14">
      <div class="flex flex-col md:flex-row items-start justify-between gap-10">
        <!-- Brand -->
        <div class="max-w-xs">
          <NuxtLink to="/" class="inline-flex mb-4">
            <img
              src="/logo.png"
              alt="DeltaSevenTech"
              class="h-7 w-auto"
            >
          </NuxtLink>
          <p class="text-sm text-muted leading-relaxed">
            {{ t('footer.description') }}
          </p>
          <a
            href="mailto:contact@delta-seven.tech"
            class="inline-block mt-4 text-sm text-[#A78BFA] hover:text-[#7C4DFF] transition-colors"
          >
            {{ t('contact.email') }}
          </a>
        </div>

        <!-- Navigation -->
        <nav class="flex flex-wrap gap-x-10 gap-y-3">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            class="text-sm text-white/50 hover:text-white transition-colors"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>

      <!-- Bottom row -->
      <div class="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-xs text-muted">
          © {{ new Date().getFullYear() }} DeltaSevenTech. {{ t('footer.copyright') }}
        </p>
        <p class="text-xs text-muted">
          {{ t('footer.builtWith') }}
        </p>
      </div>
    </div>
  </footer>
</template>
