<script setup>
import ListItem from './Email/ListItem.vue';
</script>

<template>
  <div class="inbox">
    <section class="inbox__top">
      <h1 class="inbox__header">
        <slot name="header"></slot>
      </h1>
      <h3 class="inbox__selected">
        Email Selected (0)
      </h3>
    </section>
    <section class="inbox__control">
      <input class="inbox__control__all" type="checkbox">
      <button class="inbox__control__button" >Mark as Read (r)</button>
      <button class="inbox__control__button" >Archive (a)</button>
    </section>
    <section class="inbox__list">
      <ListItem subject="'Test Subject'" />
      <ListItem subject="'Test Subject'" />
      <ListItem subject="'Test Subject'" />
      <ListItem subject="'Test Subject'" />
      <ListItem subject="'Test Subject'" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.inbox{
  padding: 2rem 2rem;
  &__top{
    margin-bottom: 1rem;
  }
  &__header{
    font-weight: 400;
    font-size: 1.5rem;
  }
  &__selected {
    font-weight: 700;
    font-size: 1.75rem;
  }

  &__control{
    display: flex;
    flex-direction: row;
    background-color: red;
    align-items: center;
    padding: 1rem 1rem;
    gap: 1rem;

    &__all {
      display: block;
      height: 28px;
      width: 28px;
    }

    &__button {
      height: 28px;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  &__list{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

}
</style>
