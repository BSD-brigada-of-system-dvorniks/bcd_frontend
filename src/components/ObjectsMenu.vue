<script lang="ts">
export default {
    name: "ObjectsMenu"
}
</script>

<template>
    <div class="col-span-4">
        <div class="bg-zinc-900 text-white border border-white border-dashed p-4 mb-4">
            <p class="text-xl">BCD</p>
            <hr class="my-4" />
            <ul class="list-disc ms-4">
                <li>BCD 0001-0010</li>
                <li>BCD 0011-0020</li>
                <li>BCD 0021-0030</li>
            </ul>
        </div>
        <div class="bg-zinc-900 text-white border border-white border-dashed p-4 mb-4">
            <p class="text-xl">RESEARCH</p>
            <hr class="my-4" />
            <ul class="list-disc ms-4">
                <li>Applied Physics Division</li>
                <li>Bioengineering and Medicine Division</li>
                <li>Information Technology Division</li>
            </ul>
        </div>
        <div class="bg-zinc-900 text-white border border-white border-dashed p-4 mb-4">
            <p class="text-xl">EQUIPMENT</p>
            <hr class="my-4" />
            <ul class="list-disc ms-4">
                <li>Capture Task Force Equipment</li>
                <li>Capture Task Force Equipment</li>
                <li>Capture Task Force Equipment</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.font-logo {
    font-family: 'Share Tech Mono', monospace;
}
</style>
