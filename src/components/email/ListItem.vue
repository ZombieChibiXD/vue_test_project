<script setup>
defineProps({
  checked: {
    type: Boolean,
    default: false,
  },
  subject: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="mail__list__item">
    <input class="mail__list__item__checked" type="checkbox" v-model="checked" />
    <h3 class="mail__list__item__subject">{{ subject }}</h3>
  </div>
</template>

<style scoped></style>
