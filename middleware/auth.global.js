
// import nuxtStorage from 'nuxt-storage';
export default defineNuxtRouteMiddleware(async(to, from) => {
let isLlogedIn = false
  
// if (process.server) return
//   // skip middleware on client side entirely


const {data} =  await useFetch('/api/auth/dbSupeSignin', {

  })
 if(!data.value) return
  data.value.data.filter(item => {
  
    // const idStore = nuxtStorage.localStorage.getData('key');
    if(item.auth === true  && to.path !== '/auth/login/'){
      isLlogedIn = item.auth;
      return navigateTo(to.path="/auth/login/")
      console.log('passou')
    }

console.log(item.auth)

  })
 
  console.log(isLlogedIn)
  // if(item.auth){
  //   isLlogedIn = item.auth
  //     }

});
