<template>
  <div class="app-modal-backdrop">
    <div class="app-modal-content">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.app-modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.app-modal-content {
  padding: 40px;
  border-radius: 40px;
  max-width: 780px;
  text-align: center;
  background: #ffe0f5;
  border-radius: 8px;
}
</style>
