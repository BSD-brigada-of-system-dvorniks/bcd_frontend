<script lang="ts">
import axios from 'axios'
import type { ObjectResponse, ObjectsApiResponse } from '@/types/ApiResponse';

export default {
    name: "ObjectsList",

    data() {
        return {
            info: [] as ObjectResponse[],
            loading: true,
        };
    },

    methods: {
        async getAnswer() {
            const { data } = await axios.get<ObjectsApiResponse>(`${import.meta.env.VITE_BACKEND_URL}/articles/objects/`);
            console.log(data);
            this.info = data.objects;
            this.loading = false;
        },
    },

    beforeMount() {
        this.getAnswer();
    },
};
</script>

<template>
    <div class="col-span-4">
        <div v-if="!loading" class="bg-zinc-900 text-white border border-white border-dashed p-4">
            <p class="mb-4 text-2xl flex justify-between items-center">
                <span class="font-logo"><i class="bi bi-globe"></i> COVENANT</span>
                <span>DOC-01AF</span>
            </p>
            <hr class="mb-4">

            <!-- <div v-for="n in 3"> -->
            <div v-for="(object, index) in info" :key="index" class="mb-2 hover:ms-4 duration-200">
                <p v-if="object.type === 'Green'" class="flex justify-between cursor-pointer">
                    <span><i class="bi bi-3-square-fill text-green-500"></i> BCD-00AC - {{ object.article.name }} -
                        {{ object.type }}</span>
                    <span>Published: {{ object.article.published }}</span>
                </p>
                <p v-if="object.type === 'Yellow'" class="flex justify-between cursor-pointer">
                    <span>[3] BCD-00AC - {{ object.article.name }} - {{ object.type }}</span>
                    <span>Published: {{ object.article.published }}</span>
                </p>
                <p v-if="object.type === 'Red'" class="flex justify-between cursor-pointer">
                    <span><span class="text-red-500">[3]</span> <span class="underline">BCD-00AC - {{
                            object.article.name }}</span></span>
                    <span>Published: {{ object.article.published }}</span>
                </p>
            </div>
            <!-- </div> -->

            <p class="place-self-end mt-4 text-end">
                <span>13:23 09.11.2001</span>
                <br>
                <span>Доктор Дексман, старший исследователь</span>
            </p>
        </div>
    </div>
</template>

<style scoped>
.font-logo {
    font-family: 'Share Tech Mono', monospace;
}
</style>
