<script setup>
defineProps({
    subject: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="mail_content">
        <div>
            <h1 class="mail_content_subject">{{ subject }}</h1>
        </div>
        <div>
            <p class="mail_content_body">{{ body }}</p>
        </div>
    </div>
</template>

<style scoped>
</style>
