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

  beforeMount() {
    this.getAnswer();
  },
};
</script>

<template>
  <div class="border border-dashed border-white">
    <div v-for="object in info" class="">
      <!--<h3>BCD-00AC {{ object.name }} - {{ object.type }}</h3>
      <p>{{ object.text }}</p>-->
      <p>BCD-00AC - {{ object.name }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
