<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
</script>

<template>
  <div class="flex items-center gap-0.5 p-1 rounded-lg bg-white/[0.06] border border-white/[0.08]">
    <button
      v-for="loc in locales"
      :key="loc.code"
      :aria-label="`Switch to ${loc.name}`"
      :class="[
        'px-2.5 py-1 rounded-md text-xs font-semibold transition-all duration-200',
        locale === loc.code
          ? 'bg-[#7C4DFF] text-white shadow-sm shadow-purple-900/50'
          : 'text-white/45 hover:text-white/80',
      ]"
      @click="setLocale(loc.code as 'en' | 'uk')"
    >
      {{ loc.name }}
    </button>
  </div>
</template>
