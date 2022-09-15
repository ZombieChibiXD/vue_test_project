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
    <div class="mail__content">
        <div>
            <h1 class="mail__content__subject">{{ subject }}</h1>
        </div>
        <div>
            <p class="mail__content__body">{{ body }}</p>
        </div>
    </div>
</template>

<style scoped>
</style>
