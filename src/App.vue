<script setup>
import { RouterLink, RouterView } from "vue-router";
import Sidebar from "./components/Sidebar.vue";
import { useEmailStore } from "./stores/email";

const store = useEmailStore()

</script>

<template>
  <section class="layout">
    <Sidebar>
      <template #top>
        <nav>
          <RouterLink class="sidebar__button" to="/">Inbox ({{ store.inboxMails.length}})</RouterLink>

          <RouterLink class="sidebar__button" to="/archive">Archive ({{ store.archivedMails.length}})</RouterLink>
        </nav>
      </template>
      <template #bottom>
        <RouterLink class="sidebar__button" to="#">Logout</RouterLink>
      </template>
    </Sidebar>
    <RouterView />
  </section>
</template>

<style scoped>
.layout {
  display: flex;
  flex-grow: 1;
}

.sidebar__button {
  border: none;
  cursor: pointer;
  display: block;
  background: none;
  text-decoration: none;
  padding: 10px 20px;
  margin-bottom: 5px;
  border-radius: 5px;
  width: 200px;
  background-color: white;
}
</style>
