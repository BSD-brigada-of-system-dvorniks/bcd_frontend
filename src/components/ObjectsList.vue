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

  mounted() {
    this.getAnswer();
  },
};
</script>

<template>
  <!--Pivo pivo pivo pivo!
  <p></p>
  <hr/>-->
  <div class="box-border border border-dashed border-white m-4 p-4 w-4/5 min-h-4/5 bg-zinc-900">

    <p class="mb-4 text-2xl flex justify-between items-center">
      <span class="font-logo"><i class="bi bi-globe"></i> COVENANT</span>
      <span>DOC-01AF</span>
    </p>
    <hr class="mb-4">

    <div v-for="n in 6">
      <div v-for="object in info">
        <p v-if="object.type === 'Green'">
          <i class="bi bi-3-square-fill text-green-500"></i> BCD-00AC - {{ object.name }} - {{ object.type }}
        </p>
        <p v-if="object.type === 'Yellow'">
          [3] BCD-00AC - {{ object.name }} - {{ object.type }}
        </p>
        <p v-if="object.type === 'Red'" class="cursor-pointer">
          <span class="text-red-500">[3]</span> <span class="underline">BCD-00AC - {{ object.name }}</span>
        </p>
      </div>
    </div>

    <p class="place-self-end mt-4 text-end">
      <span>09.11.2024</span>
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
