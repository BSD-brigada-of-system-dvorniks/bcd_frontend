<script lang="ts">
import axios from 'axios'

export default {
    name: "ObjectsList",

    /* mounted() {
      const tailwind_script = document.createElement("script");
      tailwind_script.src = "https://cdn.tailwindcss.com";
      document.body.appendChild(tailwind_script);
    },*/

    data() {
        return {
            info: {},
        };
    },

    methods: {
        async getAnswer() {
            const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/objects/`);
            console.log(data);
            this.info = data;
        },
    },

    beforeMount() {
        this.getAnswer();
    },
};
</script>

<template>
    <div class="w-screen h-screen flex justify-center items-center bg-zinc-950">
        <div class="grid grid-cols-12 place-items-center">
            <div></div>
            <div></div>
            <div></div>
            <div class="col-span-6">
                <div class="bg-zinc-900 text-white border border-white border-dashed p-8">
                    <p class="mb-8 text-2xl font-logo">
                        <i class="bi bi-globe"></i> COVENANT
                    </p>
                    <p class="mb-4">
                        Поздравляем вас с первым днём работы на новом месте. Не переживайте, если раньше вы о нас не слышали. Мы не ищём внимания общественности. Мы - частный научно-исследовательский центр, работа которого посвящена сбору и исследованию полезных артефактов с явно выражеными аномальными свойствами.
                    </p>
                    <p class="mb-4">
                        Наша миссия - развитие науки и технологий, движение прогресса и человечества в будущее и открытие перед ним доселе невиданных горизонтов.
                    </p>
                    <p class="mb-4">
                        Наша задача - исследование и поиск путей применения предметов и явлений, чьи свойства явно выходят за пределы общепринятой науки и представления человечества о мире вокруг нас.
                    </p>
                    <p class="mb-4">
                        Наша цель - сохранение и развитие человечества даже в самые страшные дни его существования, когда надежды уже не будет.
                    </p>
                    <p class="mb-8">
                        Добро пожаловать в Ковенант, сотрудник.
                    </p>
                    <form>
                        <button id="enter_button" class="bg-zinc-950 border border-white text-white font-semibold p-2 w-full">
                            Войти
                        </button>
                    </form>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<style scoped>
    .font-logo {
        font-family: 'Share Tech Mono', monospace;
    }
</style>