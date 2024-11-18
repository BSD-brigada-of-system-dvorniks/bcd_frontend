<script lang="ts">
import axios from 'axios'
import type { ObjectBasicResponse, ObjectsListResponse } from '@/types/ApiResponse';

export default {
    name: "ObjectsList",

    data() {
        return {
            object_list: [] as ObjectBasicResponse[],
        };
    },

    methods: {
        async getAnswer() {
            const { data } = await axios.get<ObjectsListResponse>(`${import.meta.env.VITE_BACKEND_URL}/articles/objects/`);
            this.object_list = data.objects;
        },
    },

    beforeMount() {
        this.getAnswer();
    },
};
</script>

<template>
    <div class="bg-zinc-900 text-white border border-white border-dashed p-4">
        <p class="mb-4 text-2xl flex justify-between items-center">
            <span class="font-logo"><i class="bi bi-globe"></i> COVENANT</span>
            <span>DOC-01AF</span>
        </p>
        
        <hr class="mb-4">

        <p v-for="(object, index) in object_list" :key="index" class="flex justify-between">
            <RouterLink :to="`/objects/${object.id}`">
                <span>
                    <span :class="{
                        'text-green-500':  object.type === 'Green',
                        'text-yellow-500': object.type === 'Yellow',
                        'text-red-500':    object.type === 'Red'
                    }">
                        [{{ object.level }}]
                    </span>
                    <span>
                        BCD-00{{ object.id.substring(10, 12).toUpperCase() }} - {{ object.article.name }} - {{ object.type }}
                    </span>
                </span>
            </RouterLink>
            <span>{{ object.article.published ? "[Published]" : "[Classified]" }}</span>
        </p>

        <hr class="my-4">

        <p class="place-self-end mt-4 text-end">
            <span>13:23 09.11.2001</span>
            <br>
            <span>Доктор Дексман, старший исследователь</span>
        </p>
    </div>
</template>

<style scoped>
.font-logo {
    font-family: 'Share Tech Mono', monospace;
}
</style>
