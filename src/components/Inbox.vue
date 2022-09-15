<script setup></script>

<template>
  <div class="sidebar">
    <div class="sidebar_top">
      <slot name="top"></slot>
    </div>
    <div class="sidebar_bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<style scoped></style>
