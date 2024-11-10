<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import TestMain from './components/TestMain.vue';
import ObjectsList from './components/ObjectsList.vue';
import WelcomePost from './components/WelcomePost.vue';
</script>

<template>
    <div class="w-full min-h-screen flex justify-center items-center bg-zinc-950 py-8">
        <router-view class="view main-content" />
    </div>
</template>

<style scoped>

</style>
