<script>
import { RouterLink, RouterView } from "vue-router";
import Sidebar from "./components/Sidebar.vue";
import { useEmailStore } from "./stores/email";
import { mapState } from "pinia";
import MailViewer from "./components/email/MailViewer.vue";
export default {
  setup(){
    const emailStore = useEmailStore();
    return {
      emailStore,
    }
  },
  components: {
    Sidebar,
    RouterLink,
    RouterView,
    MailViewer
  },
  computed: {
    ...mapState(useEmailStore, ["inboxMails", "archivedMails", "viewer", "reading"]),
  },
};
</script>

<template>
  <section class="foreground" :class="viewer && 'foreground--show'" @click="emailStore.closeReader()">
    <MailViewer v-if="reading" :mail="reading" @click="(e) => e.stopPropagation()" />
  </section>
  <section class="layout">
    <Sidebar>
      <template #top>
        <nav>
          <RouterLink class="sidebar__button" to="/"
            >Inbox ({{ inboxMails.length }})</RouterLink
          >

          <RouterLink class="sidebar__button" to="/archive"
            >Archive ({{ archivedMails.length }})</RouterLink
          >
        </nav>
      </template>
      <template #bottom>
        <RouterLink class="sidebar__button" to="#">Logout</RouterLink>
      </template>
    </Sidebar>
    <RouterView />
  </section>
</template>

<style lang="scss" scoped>
.foreground {
  display: flex;
  flex-direction: row-reverse;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  z-index: 1;
  filter: opacity(0%);
  pointer-events: none;
  transition: all 0.3s ease-in-out;
  &--show {
    filter:opacity(100%);
    pointer-events: all;
  }
}
.layout {
  display: flex;
  flex-grow: 1;
}

.sidebar__button {
  border: none;
  cursor: pointer;
  display: flex;
  background: none;
  text-decoration: none;
  padding: 10px 20px;
  margin-bottom: 5px;
  border-radius: 5px;
  width: 200px;
  background-color: white;
}
</style>
