<script lang="ts">
import type { LoginRequest } from '@/types/ApiRequest';
import type{ LoginResponse } from '@/types/ApiResponse';
import axios, { type AxiosResponse } from 'axios'

export default {
    data() {
        return {
            loginRequest: {} as LoginRequest,
            loginResponse: {} as LoginResponse,
        }
    },
    methods: {
        async submitLogin() {
            try {
                this.loginResponse = (await axios.post<LoginRequest, AxiosResponse<LoginResponse>>(
                    `${import.meta.env.VITE_BACKEND_URL}/accounts/login/`,
                    this.loginRequest
                )).data;
                console.log(this.loginResponse.token);
            }
            catch {
                console.log("dfd")
            }
        }
    }
}
</script>

<template>
    <!-- Register -->
    <!-- <div>
        <input v-model="username" placeholder="User Name">
        <input v-model="password" placeholder="Password">
        <input v-model="password" placeholder="Confirm Password">
    </div> -->

    <!-- Login -->
    <div class="bg-zinc-900 text-white border border-white border-dashed p-4">
        <input v-model="loginRequest.username" placeholder="User Name" class="text-black" value="testuser3">
        <br>
        <br>
        <input v-model="loginRequest.password" placeholder="Password" class="text-black" value="Durka1337!">
        <br>
        <br>
        <button @click="submitLogin">Submit</button>
    </div>
</template>

<style scoped></style>
