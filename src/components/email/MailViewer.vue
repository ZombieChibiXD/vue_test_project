<script>
import MailContent from "./MailContent.vue";
import { useEmailStore } from "../../stores/email";
import { mapState } from "pinia";
export default {
  setup() {
    const emailStore = useEmailStore();
    return {
      emailStore,
    };
  },
  props: {
    mail: {
      type: Object,
      required: true,
    },
  },
  created() {
    window.addEventListener("keydown", (e) => {
      if (this.emailStore.viewer) {
        if (e.key == "Escape") this.emailStore.viewer = false;
        if (e.key == "r") this.markAsRead();
        if (e.key == "a") this.toggleAsArchive();
      }
    });
  },
  beforeUnmount() {
    // window.removeEventListener("keydown", keypress);
    this.selectedIds.clear();
  },
  components: { MailContent },
  computed: {
    ...mapState(useEmailStore, ["reading"]),
  },
  methods: {
    markAsRead() {
      this.emailStore.markAsRead(this.reading.id);
    },
    toggleAsArchive() {
      this.emailStore.toggleAsArchive(this.reading.id);
    },
  },
};
</script>

<template>
  <div class="reader">
    <a href="#" class="reader__close" @click="this.emailStore.viewer = false">Close (Esc)</a>
    <section class="reader__control">
      <button class="reader__control__button" @click="markAsRead()">
        Mark as Read (r)
      </button>
      <button class="reader__control__button" @click="toggleAsArchive()">
        Toggle Archive (a)
      </button>
    </section>
    <MailContent :subject="mail.subject" :body="mail.body" />
  </div>
</template>

<style lang="scss" scoped>
.reader {
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 50%;
  padding: 2rem 2rem;
  &__close {
    color: black;
  }

  &__control {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem 0rem;
    gap: 1rem;
    &__button {
      height: 28px;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }
}
</style>
