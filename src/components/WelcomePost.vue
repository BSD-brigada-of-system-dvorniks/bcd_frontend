<script lang="ts">
import axios from 'axios'

export default {
    name: "ObjectsList",

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
                    <p class="mb-4 text-2xl flex justify-between items-center">
                        <span class="font-logo"><i class="bi bi-globe"></i> COVENANT</span>
                        <span>MSG-0XF4</span>
                    </p>
                    <hr class="mb-4">
                    <p class="mb-4 text-justify">
                        Поздравляем вас с первым днём работы на новом месте. Не переживайте, если раньше вы о нас не
                        слышали. Мы не ищём внимания общественности. Мы - частный научно-исследовательский центр, работа
                        которого посвящена сбору и исследованию полезных артефактов с явно выражеными аномальными
                        свойствами.
                    </p>
                    <p class="mb-4 text-justify">
                        Наша миссия - развитие науки и технологий, движение прогресса и человечества в будущее и
                        открытие перед ним доселе невиданных горизонтов.
                    </p>
                    <p class="mb-4 text-justify">
                        Наша задача - исследование и поиск путей применения предметов и явлений, чьи свойства явно
                        выходят за пределы общепринятой науки и представления человечества о мире вокруг нас.
                    </p>
                    <p class="mb-4 text-justify">
                        Наша цель - сохранение и развитие человечества даже в самые страшные дни его существования,
                        когда надежды уже не будет.
                    </p>
                    <p class="mb-4 text-justify">
                        Добро пожаловать в Ковенант, сотрудник.
                    </p>
                    <p class="mb-5 text-end">
                        Куратор научного отдела, доктор Дексман <i class="bi bi-person-square"></i>
                    </p>
                    <form>
                        <button id="enter_button" class="border border-white text-white p-2 w-full box-border">
                            <RouterLink to="/">Войти</RouterLink>
                        </button>
                    </form>
                    <!--<hr class="my-4" />-->
                    <!--<p class="text-center underline cursor-pointer">
                        <button class="w-full border-b">
                            <span>> Войти</span>
                        </button>
                    </p>-->
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