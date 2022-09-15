<script>
import Inbox from "../components/Inbox.vue";
import { useEmailStore } from "../stores/email";

import { mapState } from "pinia";
export default {
  components: {
    Inbox,
  },
  computed: {
    ...mapState(useEmailStore, ["inboxMails"]),
  },
};
</script>

<template>
  <Inbox :mails="inboxMails">
    <template #header>Inbox</template>
  </Inbox>
</template>

<style></style>
