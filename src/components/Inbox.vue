<script setup>
import ListItem from './Email/ListItem.vue';
</script>

<template>
  <div class="inbox">
    <header class="inbox__header">
      <slot name="header"></slot>
    </header>
    <section>
      <h3>
        Email Selected (0)
      </h3>
    </section>
    <section>
      <input type="checkbox">
      <button>Mark as Read (r)</button>
      <button>Archive</button>
    </section>
    <section>
      <ListItem subject="'Test Subject'" />
      <ListItem subject="'Test Subject'" />
      <ListItem subject="'Test Subject'" />
      <ListItem subject="'Test Subject'" />
      <ListItem subject="'Test Subject'" />
    </section>
  </div>
</template>

<style scoped></style>
