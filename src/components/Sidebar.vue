<template>
  <div class="sidebar">
    <div class="sidebar__content sidebar__top">
      <slot name="top"></slot>
    </div>
    <div class="sidebar__content sidebar__bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<style lang="scss">

  .sidebar {
    display: flex;
    flex-direction: column;
    background-color: black;
    min-height: 100vh;
    width: 256px;
    padding: 1.5rem 1.5rem;
    gap: 10px;

    &__top{
      flex-grow: 1;
    }
  }
</style>
