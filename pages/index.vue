<script setup>

// import { createClient } from '@supabase/supabase-js';

// const config = useRuntimeConfig();

// const supabase = createClient(config.public.teste, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzeW9iaHRoc3ljYmVpZWVnenBlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NDA5ODAxMSwiZXhwIjoyMDA5Njc0MDExfQ.OrHw-_5IW9NSHEWkblDDCvrzSsPMzgSO493AEY0PnN0')
// const countries = ref([])

// async function getCountries() {
//   const { data } = await useFetch('/api/categories/dbSuperbase')
//   countries.value = data.value
//   console.log(data.value)
// }
// async function clickCreate(){


//   const { data, error } = await supabase
//   .from('categories')
//   .insert([
//     { id: 6, title: 'Trabalho' },
//   ])
//   .select()

// }


// onMounted(() => {
//   getCountries()
// })
import {Client, Users, Databases } from "node-appwrite";


 
const runtimeConfig = useAppConfig();
const client = new Client();
const users  = new Users(client);
client
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('64f9e6d9333f28581642')
.setKey('8668d8b54484f45b04b72a172deba93082dfe6dd4692573f189f0aa05f2f6bb9b0e6f807f14fffcc288fa260e759c665f18c3a4a5ea742786373bb13a97d3df1ecad39ab0fc2a004aa4df644a47925d8d8a4610f75207bf650cb9830aa79b364fb34810058a5c1b352c5dfbfa50eb1fd8ceb1a0fb507442580a85fb31914459f');

const promise = users.list()
console.log(client)
</script>

<template>
     <LazyMenu />
<div class="w-full bg-gray-100">
  <ul>
    <!-- <li v-for="country in countries.data" :key="country.id">{{ country.title }}</li>

    <button @click="clickCreate">criar</button> -->
  </ul>
</div>
</template>