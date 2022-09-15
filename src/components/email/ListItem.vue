<script setup>
    defineProps({
        checked:{
            type:Boolean,
            default: false
        },
        subject: {
            type: String,
            required: true
        },
    })
    </script>

    <template>
        <div class="mail_list_item">
            <input class="mail_list_item_checked" type="checkbox" v-model="checked">
            <h3 class="mail_list_item_subject">{{ subject }}</h3>
        </div>
    </template>

    <style scoped>
    </style>
