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
  <div class="mailitem">
    <input class="mailitem__checkbox" type="checkbox" v-model="checked" />
    <h3 class="mailitem__subject">{{ subject }}</h3>
  </div>
</template>

<style lang="scss" scoped>
.mailitem {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: rgb(194, 194, 194);
  border-radius: 4px;
  border: 1px gray;
  &__checkbox {
    display: block;
    height: 28px;
    width: 28px;
  }
  &__subject {
    font-weight: 400;
  }
}
</style>
