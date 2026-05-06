<script setup lang="ts">
interface Props {
  to?: string
  href?: string
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
  loading: false,
})

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-[0.9375rem]',
  lg: 'px-8 py-4 text-base',
}
</script>

<template>
  <NuxtLink
    v-if="props.to"
    :to="props.to"
    :class="[props.variant === 'primary' ? 'btn-primary' : 'btn-secondary', sizeClasses[props.size!]]"
  >
    <slot />
  </NuxtLink>
  <a
    v-else-if="props.href"
    :href="props.href"
    :class="[props.variant === 'primary' ? 'btn-primary' : 'btn-secondary', sizeClasses[props.size!]]"
  >
    <slot />
  </a>
  <button
    v-else
    :type="props.type"
    :disabled="props.disabled || props.loading"
    :class="[
      props.variant === 'primary' ? 'btn-primary' : 'btn-secondary',
      sizeClasses[props.size!],
      (props.disabled || props.loading) ? 'opacity-50 cursor-not-allowed' : '',
    ]"
  >
    <span v-if="props.loading" class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
    <slot />
  </button>
</template>
