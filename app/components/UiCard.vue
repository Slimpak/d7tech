<script setup lang="ts">
interface Props {
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  hover: true,
  padding: 'md',
})

const paddingClasses = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}
</script>

<template>
  <div
    :class="[
      'glass-card rounded-xl',
      paddingClasses[props.padding!],
      props.hover ? 'transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]' : '',
    ]"
  >
    <slot />
  </div>
</template>
