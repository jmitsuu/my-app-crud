

<template>
  <div>
  
    <div class=" ">
      
      <div class=" flex justify-center   bg-blue-950 ">  
      <LazyLogin v-if="isLlogedIn"/>
      <NuxtPage v-else/>
      
    </div>

    </div>

  </div>
</template>
<style scoped>

</style>