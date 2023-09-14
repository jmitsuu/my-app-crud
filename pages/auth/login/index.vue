<script setup>
import account from "../../../composables/useAppwrite";
const message = ref(false)
const email = ref()
const password = ref();

const login = async () => {
    // if (!email.value && !password.value) return
    try {
        const { data, error } = useFetch('/api/auth/dbSupeSignin', {
            method: 'get',

        })

        data.value.data.filter(item => {
            if (item.email === email.value && item.password === password.value) {
                console.log('truee')
                authorization(item)
                console.log(item.id)
            } else {
                console.log('false')
            }
        })

    } catch (error) {
        console.log(error)
    }
}

async function authorization(id){
    await useFetch(`/api/auth/dbSupUptoken?id=${id}`, {
                    method: "put",
                    body: true,
                });
}

function redirect(){
    if(!email.value && !password.value) return
    setTimeout(() => {
        window.location.href ="/gastos"
    }, 4000);
}

</script>


<template>
    <div class="flex h-screen justify-center items-center ">

        <div class="bg-gray-200  py-4 bg-opacity-80  rounded-md">
            <form class=" flex flex-col px-6 gap-2" @submit.prevent="login">
                <h1 class="text-center text-[2.1rem]">Acessar Painel</h1>

                <label class="text-[1.2rem]">Email</label>
                <input type="email" v-model="email" required
                    class="w-64 py-2 rounded-sm outline-none text-gray-600 font-semibold px-1" placeholder="E-mail" />
                <label class="text-[1.2rem]">Senha</label>
                <input type="password" required v-model="password"
                    class="w-64 py-2 rounded-sm outline-none text-gray-600 font-semibold px-1" placeholder="Senha" />

                <button
                @click="redirect"
                    class="mt-3 py-1 px-2 rounded-md bg-gray-300 text-slate-600  hover:text-slate-200 transition-all font-semibold w-32 mx-auto hover:bg-gray-700">
                    Logar</button>



                <NuxtLink to="/auth/register">
                    <p class="text-center cursor-pointer text-semibold text-gray-600"> Registrar</p>
                </NuxtLink>
            </form>


        </div>


    </div>
</template>
