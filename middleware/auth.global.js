export default defineNuxtRouteMiddleware(async(to, from) => {
  let isLlogedIn = false
    
  
  const {data} =  await useFetch('/api/auth/dbSupeSignin', {
  
    })

    data.value.data.filter(item => {
    
  
      if(item.auth === true  && to.path !== '/auth/login/'){
     
        isLlogedIn = item.auth;
        return navigateTo(to.path="/auth/login/")
        console.log('passou')
      }
  
  
  console.log(item.auth)
  
    })
   


  });