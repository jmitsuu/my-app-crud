

export default defineNuxtRouteMiddleware(async(to, from) => {
let isLlogedIn = false
  
// if (process.server) return
//   // skip middleware on client side entirely


const {data} =  await useFetch('/api/auth/dbSupeSignin', {

  })

  data.value.data.filter(item => {
    if((item.auth === true  && to.path !== '/auth/login/){
    isLlogedIn = item.auth;
      return navigateTo(to.path="/auth/login/")
      console.log('passou')

    }
  })

if(to.path != "/auth/register")
if (!isLlogedIn && to.path !== '/auth/login/') {
  return navigateTo(to.path="/auth/login/")
}
});
