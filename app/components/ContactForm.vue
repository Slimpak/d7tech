<script setup lang="ts">
const { t } = useI18n()

const form = reactive({
  name: '',
  company: '',
  email: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  message: '',
})

const submitted = ref(false)
const loading = ref(false)

function validate(): boolean {
  errors.name = ''
  errors.email = ''
  errors.message = ''

  let valid = true

  if (!form.name.trim()) {
    errors.name = t('contactForm.errorName')
    valid = false
  }

  if (!form.email.trim()) {
    errors.email = t('contactForm.errorEmail')
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = t('contactForm.errorEmailInvalid')
    valid = false
  }

  if (!form.message.trim()) {
    errors.message = t('contactForm.errorMessage')
    valid = false
  }

  return valid
}

async function handleSubmit() {
  if (!validate()) return

  loading.value = true

  // TODO: Connect form submission to backend
  // Options:
  //   1. Formspree: POST to https://formspree.io/f/{YOUR_FORM_ID}
  //   2. Resend: Use a Nuxt server route at /api/contact with Resend SDK
  //   3. Nuxt server endpoint: server/api/contact.post.ts
  // Example with fetch:
  // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form), headers: { 'Content-Type': 'application/json' } })

  await new Promise((resolve) => setTimeout(resolve, 800))

  loading.value = false
  submitted.value = true
}
</script>

<template>
  <div>
    <Transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
    >
      <div
        v-if="submitted"
        class="text-center py-10"
      >
        <div class="w-14 h-14 rounded-full bg-[#7C4DFF]/20 border border-[#7C4DFF]/30 flex items-center justify-center mx-auto mb-4">
          <svg class="w-7 h-7 text-[#A78BFA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-white mb-2">{{ t('contactForm.successTitle') }}</h3>
        <p class="text-secondary text-sm">{{ t('contactForm.successText') }}</p>
      </div>
    </Transition>

    <form v-if="!submitted" class="space-y-4" novalidate @submit.prevent="handleSubmit">
      <!-- Full Name -->
      <div>
        <label class="block text-xs font-medium text-white/60 mb-1.5" for="contact-name">{{ t('contactForm.nameLabel') }} *</label>
        <input
          id="contact-name"
          v-model="form.name"
          type="text"
          name="name"
          :placeholder="t('contactForm.namePlaceholder')"
          autocomplete="name"
          :class="[
            'w-full px-4 py-3 rounded-lg bg-white/[0.05] border text-white placeholder-white/25 text-sm outline-none transition-all duration-200',
            'focus:bg-white/[0.08] focus:border-[#7C4DFF]/60',
            errors.name ? 'border-red-500/60' : 'border-white/10',
          ]"
        >
        <p v-if="errors.name" class="mt-1 text-xs text-red-400">{{ errors.name }}</p>
      </div>

      <!-- Company -->
      <div>
        <label class="block text-xs font-medium text-white/60 mb-1.5" for="contact-company">{{ t('contactForm.companyLabel') }}</label>
        <input
          id="contact-company"
          v-model="form.company"
          type="text"
          name="company"
          :placeholder="t('contactForm.companyPlaceholder')"
          autocomplete="organization"
          class="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/10 text-white placeholder-white/25 text-sm outline-none transition-all duration-200 focus:bg-white/[0.08] focus:border-[#7C4DFF]/60"
        >
      </div>

      <!-- Email -->
      <div>
        <label class="block text-xs font-medium text-white/60 mb-1.5" for="contact-email">{{ t('contactForm.emailLabel') }} *</label>
        <input
          id="contact-email"
          v-model="form.email"
          type="email"
          name="email"
          :placeholder="t('contactForm.emailPlaceholder')"
          autocomplete="email"
          :class="[
            'w-full px-4 py-3 rounded-lg bg-white/[0.05] border text-white placeholder-white/25 text-sm outline-none transition-all duration-200',
            'focus:bg-white/[0.08] focus:border-[#7C4DFF]/60',
            errors.email ? 'border-red-500/60' : 'border-white/10',
          ]"
        >
        <p v-if="errors.email" class="mt-1 text-xs text-red-400">{{ errors.email }}</p>
      </div>

      <!-- Message -->
      <div>
        <label class="block text-xs font-medium text-white/60 mb-1.5" for="contact-message">{{ t('contactForm.messageLabel') }} *</label>
        <textarea
          id="contact-message"
          v-model="form.message"
          name="message"
          rows="4"
          :placeholder="t('contactForm.messagePlaceholder')"
          :class="[
            'w-full px-4 py-3 rounded-lg bg-white/[0.05] border text-white placeholder-white/25 text-sm outline-none transition-all duration-200 resize-none',
            'focus:bg-white/[0.08] focus:border-[#7C4DFF]/60',
            errors.message ? 'border-red-500/60' : 'border-white/10',
          ]"
        />
        <p v-if="errors.message" class="mt-1 text-xs text-red-400">{{ errors.message }}</p>
      </div>

      <UiButton type="submit" variant="primary" :loading="loading" class="w-full justify-center">
        {{ t('contactForm.submit') }}
      </UiButton>
    </form>
  </div>
</template>
