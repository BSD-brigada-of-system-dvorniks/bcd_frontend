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
                const { data } = await axios.get<ObjectsApiResponse >(`${import.meta.env.VITE_BACKEND_URL}/articles/objects/`);
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
    <div class="w-screen grid grid-cols-12 gap-4">
        <div></div>
        <div></div>
        <div class="col-span-2">
            <div class="bg-zinc-900 text-white border border-white border-dashed p-4 mb-4">
                <p class="text-xl">BCD</p>
                <hr class="my-4"/>
                <ul class="list-disc ms-4">
                    <li>BCD 0001-0010</li>
                    <li>BCD 0011-0020</li>
                    <li>BCD 0021-0030</li>
                </ul>
            </div>
            <div class="bg-zinc-900 text-white border border-white border-dashed p-4 mb-4">
                <p class="text-xl">RESEARCH</p>
                <hr class="my-4"/>
                <ul class="list-disc ms-4">
                    <li>Applied Physics Division</li>
                    <li>Bioengineering and Medicine Division</li>
                    <li>Information Technology Division</li>
                </ul>
            </div>
            <div class="bg-zinc-900 text-white border border-white border-dashed p-4 mb-4">
                <p class="text-xl">EQUIPMENT</p>
                <hr class="my-4"/>
                <ul class="list-disc ms-4">
                    <li>Capture Task Force Equipment</li>
                    <li>Capture Task Force Equipment</li>
                    <li>Capture Task Force Equipment</li>
                </ul>
            </div>
        </div>
        <div class="col-span-6">
            <div v-if="!loading" class="bg-zinc-900 text-white border border-white border-dashed p-4">
                <p class="mb-4 text-2xl flex justify-between items-center">
                    <span class="font-logo"><i class="bi bi-globe"></i> COVENANT</span>
                    <span>DOC-01AF</span>
                </p>
                
                <hr class="mb-4">

                <div v-for="n in 3">
                    <div v-for="(object, index) in info" :key="index" class="mb-2 hover:ms-4 duration-200">
                        <p v-if="object.type === 'Green'" class="flex justify-between cursor-pointer">
                            <span><i class="bi bi-3-square-fill text-green-500"></i> BCD-00AC - {{ object.article.name }} - {{ object.type }}</span>
                            <span>Published: {{ object.article.published }}</span>
                        </p>
                        <p v-if="object.type === 'Yellow'" class="flex justify-between cursor-pointer">
                            <span><span class="text-yellow-500">[3]</span> BCD-00AC - {{ object.article.name }} - {{ object.type }}</span>
                            <span>Published: {{ object.article.published }}</span>
                        </p>
                        <p v-if="object.type === 'Red'" class="flex justify-between cursor-pointer">
                            <span><span class="text-red-500">[3]</span> <span class="underline">BCD-00AC - {{ object.article.name }}</span></span>
                            <span>Published: {{ object.article.published }}</span>
                        </p>
                    </div>
                </div>
                
                <hr class="my-4">

                <p class="place-self-end mt-4 text-end">
                    <span>13:23 09.11.2001</span>
                    <br>
                    <span>Доктор Дексман, старший исследователь</span>
                </p>
            </div>
        </div>
        <div></div>
        <div></div>
    </div>
</template>

<style scoped>
    .font-logo {
        font-family: 'Share Tech Mono', monospace;
    }
</style>
