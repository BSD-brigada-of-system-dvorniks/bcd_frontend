<script lang="ts">
import type { LoginRequest } from '@/types/ApiRequest';
import type{ LoginResponse } from '@/types/ApiResponse';
import axios, { AxiosError, type AxiosResponse } from 'axios'

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
            catch (error) {
                const err = error as AxiosError<LoginResponse>;
                this.loginResponse = err.response?.data as LoginResponse;
            }
        }
    },
    computed: {
        checkResponseError() : boolean {
            return this.loginResponse.error === "Invalid credentials";
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
    <div class="bg-zinc-200 shadow-inner shadow-zinc-700 p-4">
        <div class="bg-zinc-900 p-0">
            <div class="select-none py-6 px-4 font-logo text-2xl content-center text-start terminal">
                <p class="text-terminal mb-6">
                    You are not authorized. Please, authorize in system before start working.
                </p>
                <div class="mb-0 text-terminal">
                    Username:
                    <input v-model="loginRequest.username"
                        placeholder="User Name"
                        class="bg-zinc-900 text-terminal border-0 border-terminal animate-pulse"
                        value="testuser3">
                </div>
                <div class="mb-6 text-terminal">
                    Password:
                    <input v-model="loginRequest.password"
                        placeholder="Password"
                        class="bg-zinc-900 text-terminal border-0 border-terminal animate-pulse"
                        value="Durka1337!">
                </div>
                <button class="text-terminal" @click="submitLogin">
                    > Submit
                </button>
                <div v-if="checkResponseError" class="text-terminal text-terminal-error">{{loginResponse.error}}</div>
            </div>
        </div>
    </div>
</template>


<style scoped>
    *:focus {
        outline: none;
    }
    input {
        background: none;
    }
    .font-logo {
        font-family: 'Share Tech Mono', monospace;
    }
    .terminal {
        display: block;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(
            to bottom,
            rgba(18, 16, 16, 0) 50%,
            rgba(0, 0, 0, 0.25) 50%
        );
        background-size: 100% 4px;
        z-index: 2;
    }
    .text-terminal {
        color: #13A10E;
        text-shadow: 0 0 2px #13A10E;
        font-family: "Share Tech Mono", system-ui;
        line-height: 1.5rem;

    }
    .text-terminal-error {
        color: #a10e0e;
        text-shadow: 0 0 2px #a10e0e;
    }
    .border-terminal {
        border-color: #13A10E;
    }
</style>
