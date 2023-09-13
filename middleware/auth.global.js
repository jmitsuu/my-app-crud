import account from "../composables/useAppwrite";

export default defineNuxtRouteMiddleware((to, from) => {
  const promise = account.get();
    if(to.path != "/auth/register"){
    promise.then(
      async function (response) {
        if (response.status) {

          return navigateTo(to.fullPath);
        }
      },
      function (error) {
        if (error) {
          console.log(error.message);
          return navigateTo(to.path="/auth/login");
        }
      }
    );}

});
