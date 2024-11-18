<script lang="ts">
import ObjectsList from '@/components/ObjectsList.vue';
import ObjectsMenu from '@/components/ObjectsMenu.vue';
export default {
    name: "MainPage",
    components: {
        ObjectsMenu,
        ObjectsList,
    }
}
</script>

<template>
    <div class="w-screen grid grid-cols-12 gap-4">
        <div></div>
        <div></div>
        <div class="col-span-4">
            <ObjectsMenu />
        </div>
        <div class="col-span-4">
            <ObjectsList />
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
