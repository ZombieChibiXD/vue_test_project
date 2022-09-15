<script>
export default{
    props: {
        subject: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        }
    }
}
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

<style lang="scss" scoped>
.mail__content{
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &__subject{
        font-weight: 700;
        font-size: x-large;
    }

    &__body{
        font-weight: 500;
    }
}
</style>
