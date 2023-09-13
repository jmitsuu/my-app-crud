<script setup>
import account from "../composables/useAppwrite";
const modal = ref(false);
const name = ref()
const logout = ref(false);
function getUserName(){
  const promise = account.get();
promise.then(function (response) {
  name.value = response.name;
 name.value = response.name
}, function (error) {
    console.log(error); // Failure
});
}

function logOutSession(){
  const promise = account.listSessions();

promise.then(function (response) {
  response.sessions.filter(item =>{
    account.deleteSession(item.$id)

  })

}
);

}
onMounted(()=>{
  getUserName()
})



</script>
<template>
  <header class=" w-72 h-screen hidden  lg:block pt-2 overflow-hidden bg-blue-950  rounded-3xl">
    <div @click="!logout ? logout =true : logout =false" class="text-white m-auto flex-col flex items-center justify-center mb-10">
        <img src="https://picsum.photos/200" class="w-10  hover:opacity-50 transition-all cursor-pointer rounded-full" />
        <p class="font-bold text-[1.1rem]">{{ name }}</p>
        <NuxtLink to="/auth/login">
          <p  v-if="logout" @click="logOutSession" class="cursor-pointer font-bold text-[1.2rem] hover:text-gray-300">sair</p>
        </NuxtLink>
       
      </div>
    <nav class="flex flex-col  text-white gap-10 text-center font-bold  ">
    
    
    <NuxtLink to="/" class="mr-2 hover:bg-blue-200  rounded-md py-2 transition-all">Home</NuxtLink>
    <NuxtLink to="/gastos" class="mr-2  hover:bg-blue-200  rounded-md py-2 transition-all">Gastos</NuxtLink>
    <NuxtLink to="/categorias" class="mr-2  hover:bg-blue-200  rounded-md py-2 transition-all">Categorias</NuxtLink>
    </nav>
  </header>
  <div class="relative lg:hidden" >
    <div class="absolute top-3 left-4 flex  w-full">
      <Icon v-if="!modal" name="charm:menu-hamburger" color="black" class="z-50  absolute left-0 w-10 h-10 cursor-pointer"
      @click="!modal? modal = true : modal = false"
      />
      <Icon v-else name="charm:circle-cross" color="black" class=" z-50  absolute left-0 w-10 h-10 cursor-pointer"
      @click="!modal? modal = true : modal = false"
      />
    <div v-if="modal" class=" bg-blue-950  text-white rounded-md bg-opacity-90 p-2 text-[1.3rem] font-semibold absolute z-50 left-10  flex flex-col "  @click.self="modal"  >
      <NuxtLink to="/" class="mr-2 hover:bg-blue-200  rounded-md py-2 transition-all" @click=" modal = false">Home</NuxtLink>
    <NuxtLink to="/gastos" class="mr-2  hover:bg-blue-200  rounded-md py-2 transition-all"  @click=" modal = false">Gastos</NuxtLink>
    <NuxtLink to="/categorias" class="mr-2  hover:bg-blue-200  rounded-md py-2 transition-all"  @click=" modal = false">Categorias</NuxtLink>
    </div>
    </div>
  

  </div>
  
</template>