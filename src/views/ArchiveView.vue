<script setup>
import Inbox from "../components/Inbox.vue";
import { useEmailStore } from "../stores/email";

const store = useEmailStore();
</script>

<template>
  <Inbox :mails="store.archivedMails">
    <template #header>Archive</template>
  </Inbox>
</template>

<style></style>
