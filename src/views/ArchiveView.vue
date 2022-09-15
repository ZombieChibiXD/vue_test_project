<script>
import Inbox from "../components/Inbox.vue";
import { useEmailStore } from "../stores/email";

import { mapState } from "pinia";
export default {
  components: {
    Inbox,
  },
  computed: {
    ...mapState(useEmailStore, ["archivedMails"]),
  },
};
</script>
<template>
  <Inbox :mails="archivedMails">
    <template #header>Archive</template>
  </Inbox>
</template>

<style></style>
