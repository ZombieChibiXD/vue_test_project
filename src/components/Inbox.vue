<script>
import { useEmailStore } from "../stores/email";
import ListItem from "./Email/ListItem.vue";
export default {
  setup() {
    const emailStore = useEmailStore();
    return {
      emailStore,
    };
  },
  components: {
    ListItem,
  },
  data() {
    return {
      selectedIds: new Set(),
    };
  },
  methods: {
    /**
     * @param id {number}
     */
    toggleId(id) {
      if (!this.selectedIds.delete(id)) this.selectedIds.add(id);
    },
    toggleCheckboxes() {
      if (this.$props.mails.length === this.selectedIds.size) {
        this.selectedIds.clear();
        return;
      }
      this.$props.mails.forEach(({ id }) => {
        this.selectedIds.add(id);
      });
    },
    markAsRead() {
      this.selectedIds.forEach((id) => {
        this.emailStore.markAsRead(id);
      });
    },
    toggleAsArchive() {
      this.selectedIds.forEach((id) => {
        this.emailStore.toggleAsArchive(id);
      });
      this.selectedIds.clear();
    },
  },
  props: {
    mails: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <div class="inbox">
    <section class="inbox__top">
      <h1 class="inbox__header">
        <slot name="header"></slot>
      </h1>
      <h3 class="inbox__selected">
        Email Selected (<span v-text="selectedIds.size"></span>)
      </h3>
    </section>
    <section class="inbox__control">
      <input
        class="inbox__control__all"
        type="checkbox"
        :checked="mails.length === selectedIds.size"
        @click="toggleCheckboxes()"
      />
      <button class="inbox__control__button" @click="markAsRead()">
        Mark as Read (r)
      </button>
      <button class="inbox__control__button" @click="toggleAsArchive()">
        Toggle Archive (a)
      </button>
    </section>
    <section class="inbox__list">
      <ListItem
        v-for="mail in mails"
        :key="mail.id"
        :toggle="() => toggleId(mail.id)"
        :checked="selectedIds.has(mail.id)"
        :subject="mail.subject"
        :read="mail.isRead"
        @click="emailStore.readMail(mail)"
      />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.inbox {
  flex-grow: 1;
  padding: 4rem 4rem;
  &__top {
    margin-bottom: 1rem;
  }
  &__header {
    font-weight: 400;
    font-size: 1.5rem;
  }
  &__selected {
    font-weight: 700;
    font-size: 1.75rem;
  }

  &__control {
    display: flex;
    flex-direction: row;
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

  &__list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
  }
}
</style>
