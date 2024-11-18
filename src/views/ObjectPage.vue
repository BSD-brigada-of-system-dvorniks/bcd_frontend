<script lang="ts">
import axios from 'axios'
import type {ObjectResponse} from '@/types/ApiResponse';
export default {
    name: "ObjectPage",
    data() {
        return {
            info: {} as ObjectResponse,
            loading: true,
        };
    },

    methods: {
        async getAnswer() {
            const { data } = await axios.get<ObjectResponse>(`${import.meta.env.VITE_BACKEND_URL}/articles/objects/${this.id}`);
            console.log(data);
            this.info = data;
            this.loading = false;
        },
    },

    props: {
        id: String,
    },

    beforeMount() {
        this.getAnswer();
    }
}
</script>

<template>
    <div>
        <p>{{ info.article.name }}</p>
        <p>{{ info.id }}</p>
        <p>{{ info.type }}</p>
        <p>{{ info.level }}</p>
        <p>{{ info.article.text }}</p>
        <p>{{ info.article.author }}</p>
    </div>
</template>

<style scoped>
</style>
