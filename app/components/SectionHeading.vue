<script setup lang="ts">
interface Props {
  label: string
  align?: 'left' | 'center'
}

const props = withDefaults(defineProps<Props>(), {
  align: 'center',
})
</script>

<template>
  <div :class="['mb-12', props.align === 'center' ? 'text-center' : 'text-left']">
    <div :class="['inline-flex items-center gap-2 mb-4', props.align === 'center' ? 'justify-center' : '']">
      <span class="h-px w-8 bg-gradient-to-r from-transparent to-[#7C4DFF]" />
      <span class="text-xs font-semibold text-[#A78BFA] uppercase tracking-[0.15em]">{{ props.label }}</span>
      <span class="h-px w-8 bg-gradient-to-l from-transparent to-[#7C4DFF]" />
    </div>
    <slot />
  </div>
</template>
