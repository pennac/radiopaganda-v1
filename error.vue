<script setup>
defineProps(['error'])
const { t } = useI18n()
const localePath = useLocalePath()
const handleError = () => clearError({ redirect: localePath('/') })
</script>

<template>
  <div class="error-page">
    <p class="error-page__code">
      {{ error?.statusCode ?? '404' }}
    </p>
    <h1 class="error-page__title">{{ t('error.title') }}</h1>
    <p class="error-page__meta">{{ t('error.meta') }}</p>
    <button class="error-page__btn" @click="handleError">
      {{ t('error.cta') }}
    </button>
  </div>
</template>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  background: var(--rp-white);
  text-align: center;
  padding: 40px;
}

.error-page__code {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.2em;
  color: var(--rp-red);
}

.error-page__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(36px, 8vw, 96px);
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--rp-black);
  white-space: pre-line;
}

.error-page__meta {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  color: var(--rp-black);
  opacity: 0.3;
}

.error-page__btn {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: none;
  border: 1px solid var(--rp-black);
  color: var(--rp-black);
  padding: 12px 24px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.error-page__btn:hover {
  background: var(--rp-black);
  color: var(--rp-white);
}
</style>
