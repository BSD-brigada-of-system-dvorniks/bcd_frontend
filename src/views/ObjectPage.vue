<script lang="ts">
import axios from 'axios'
import type {ObjectResponse} from '@/types/ApiResponse';
export default {
    name: "ObjectPage",
    data() {

        const now = new Date();

        const now_time = new Intl.DateTimeFormat('ru-RU', {
            hour:   '2-digit',
            minute: '2-digit',
        }).format(now);

        const now_date = new Intl.DateTimeFormat('ru-RU', {
            day:   '2-digit',
            month: '2-digit',
            year:  'numeric',
        }).format(now);

        return {
            now_datetime: `${now_time} ${now_date}`,
            object: {} as ObjectResponse,
            loading: true,
        };
    },

    methods: {
        async getAnswer() {
            const { data } = await axios.get<ObjectResponse>(`${import.meta.env.VITE_BACKEND_URL}/articles/objects/${this.id}`);
            console.log(data);
            this.object = data;
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
    <div class="w-screen grid grid-cols-12 gap-4">
        <div></div>
        <div></div>
        <div class="col-span-8">
            <div class="bg-zinc-900 text-white border border-white border-dashed p-4 mb-4">
                <p class="text-2xl flex justify-between items-center">
                    <span>
                        <span :class="{
                            'text-green-500':  object.type === 'Green',
                            'text-yellow-500': object.type === 'Yellow',
                            'text-red-500':    object.type === 'Red'
                        }">
                            [{{ object.level }}]
                        </span>
                        {{ object.article.name }}
                    </span>
                    <span>
                        BCD-00{{ object.id.substring(10, 12).toUpperCase() }}
                    </span>
                </p>
                
                <hr class="my-4" />
                
                <p>
                    {{ object.article.text }}
                </p>
                
                <p v-for="n in 5" class="my-4">
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
                </p>
                
                <hr class="my-4" />
                
                <p class="place-self-end text-end">
                    <span>{{ object.article.author.username }}</span>
                    <br>
                    <span>{{ now_datetime }}</span>
                </p>
            </div>
        </div>
        <div></div>
        <div></div>
    </div>
    
</template>

<style scoped>
</style>
