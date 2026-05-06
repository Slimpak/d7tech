<script setup lang="ts">
const { t } = useI18n()

const MAPS_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2646.3!2d35.0457!3d48.4647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2f3d0000001%3A0x0!2sSichovykh%20Striltsiv%20St%2C%209D%2C%20Dnipro%2C%20Ukraine!5e0!3m2!1sen!2sua!4v1700000000000!5m2!1sen!2sua'
const MAPS_LINK = 'https://maps.google.com/?q=Sichovykh+Striltsiv+St+9D+Dnipro+Ukraine'
</script>

<template>
  <div>
    <!-- Location header -->
    <div class="flex items-start justify-between gap-4 mb-5 flex-wrap">
      <div>
        <p class="text-xs font-semibold text-muted uppercase tracking-[0.15em] mb-2">{{ t('location.label') }}</p>
        <p class="text-sm font-semibold text-white">DeltaSevenTech</p>
        <p class="text-sm text-secondary">{{ t('location.address1') }}</p>
        <p class="text-sm text-secondary">{{ t('location.address2') }}</p>
      </div>
      <a
        :href="MAPS_LINK"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-secondary text-xs px-4 py-2 flex-shrink-0"
      >
        <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
        {{ t('location.openMaps') }}
      </a>
    </div>

    <!-- Map container -->
    <div
      class="relative w-full overflow-hidden rounded-2xl"
      style="height: 340px; border: 1px solid rgba(255,255,255,0.08); background: #080D1A;"
    >
      <!-- Dark overlay to blend map into the design -->
      <div class="absolute inset-0 pointer-events-none z-10 rounded-2xl ring-1 ring-inset ring-white/5" />
      <iframe
        :src="MAPS_URL"
        width="100%"
        height="100%"
        style="border: 0; filter: invert(90%) hue-rotate(180deg) saturate(0.6) brightness(0.85);"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="DeltaSevenTech office location"
        class="block w-full h-full rounded-2xl"
      />
    </div>
  </div>
</template>
