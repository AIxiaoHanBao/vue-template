<template>
  <div>
    <h1>{{ token }}</h1>
    <el-input v-model="newToken"></el-input>
    <el-button @click="updateToken">Set Token</el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {useUserStore} from "../store/modules/UserStore";


const userStore = useUserStore();
const newToken = ref("");

const updateToken =async () => {
  await userStore.setToken(newToken.value);
  token.value = JSON.parse(localStorage.getItem("token")).token ;
};

const token = ref(JSON.parse(localStorage.getItem("token")).token);
</script>
