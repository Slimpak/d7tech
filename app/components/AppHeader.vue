<script setup lang="ts">
const { t } = useI18n()
const isMenuOpen = ref(false)

const navLinks = computed(() => [
  { label: t('nav.whatWeDo'), href: '/#services' },
  { label: t('nav.solutions'), href: '/solutions' },
  { label: t('nav.about'), href: '/about' },
  { label: t('nav.blog'), href: '/blog' },
  { label: t('nav.contact'), href: '/contact' },
])

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 h-20 border-b border-white/5 bg-[#050816]/90 backdrop-blur-xl">
    <div class="section-container flex items-center justify-between h-full">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center" @click="closeMenu">
        <img
          src="/logo.png"
          alt="DeltaSevenTech"
          class="h-[40px] w-[214px] "
        >
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.href"
          :to="link.href"
          class="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200"
          active-class="text-white"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Desktop CTA -->
      <div class="hidden md:flex items-center gap-3">
        <LanguageSwitcher />
        <NuxtLink to="/contact" class="btn-primary text-sm">
          {{ t('nav.getInTouch') }}
        </NuxtLink>
      </div>

      <!-- Mobile menu button -->
      <button
        class="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
        :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
        @click="toggleMenu"
      >
        <span
          class="block w-5 h-px bg-white/70 transition-all duration-200 origin-center"
          :class="isMenuOpen ? 'rotate-45 translate-y-[8px]' : ''"
        />
        <span
          class="block w-5 h-px bg-white/70 transition-all duration-200"
          :class="isMenuOpen ? 'opacity-0' : ''"
        />
        <span
          class="block w-5 h-px bg-white/70 transition-all duration-200 origin-center"
          :class="isMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''"
        />
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-[#050816]/98 backdrop-blur-xl border-b border-white/5"
      >
        <nav class="section-container py-4 flex flex-col gap-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            class="text-sm font-medium text-white/70 hover:text-white px-3 py-2.5 rounded-lg hover:bg-white/5 transition-all"
            @click="closeMenu"
          >
            {{ link.label }}
          </NuxtLink>
          <div class="pt-2 border-t border-white/5 mt-1 space-y-2">
            <div class="px-1">
              <LanguageSwitcher />
            </div>
            <NuxtLink to="/contact" class="btn-primary text-sm w-full justify-center" @click="closeMenu">
              {{ t('nav.getInTouch') }}
            </NuxtLink>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>
