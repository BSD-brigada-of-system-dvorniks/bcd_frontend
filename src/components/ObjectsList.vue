<script lang="ts">
import axios from 'axios'

export default {
  name: "ObjectsList",
  
  /* mounted() {
    const tailwind_script = document.createElement("script");
    tailwind_script.src = "https://cdn.tailwindcss.com";
    document.body.appendChild(tailwind_script);
  },*/

  data () {
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

  mounted () {
    this.getAnswer();
  },
};
</script>

<template>
  <!--Pivo pivo pivo pivo!
  <p></p>
  <hr/>-->
  <div class="box-border border border-dashed border-white m-4 p-4 w-4/5 h-4/5 bg-zinc-900">
    <div v-for="object in info" class="">
      <!--<h3>BCD-00AC {{ object.name }} - {{ object.type }}</h3>
      <p>{{ object.text }}</p>-->
      <p><i class="bi bi-record-fill"></i> BCD-00AC - {{ object.name }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
