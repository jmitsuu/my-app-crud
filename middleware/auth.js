import account from "../composables/useAppwrite";

export default defineNuxtRouteMiddleware((to, from) => {
  const promise = account.get();

  promise.then(
    function (response) {
      if (response.status) {

        return navigateTo(to.fullPath);
      }
    },
    function (error) {
      if (error) {
        console.log(error.message);
        return navigateTo("/auth/login");
      }
    }
  );
});
