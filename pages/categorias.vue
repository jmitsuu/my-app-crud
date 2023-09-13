<script setup>
const newCategory = ref();
const inputNewCategory = ref();
import { useDatabase } from "../stores/request";
const store = useDatabase();
const checkId = ref();
const editOff = ref(false);
const newInput = ref();
const categories = ref();
definePageMeta({
  middleware: [
    'auth',
  ],
});
async function getCategor() {
  const { data } = await useFetch(`/api/categories/dbApp`, {});
  const { documents } = data.value;
  categories.value = documents;
  console.log(data.value);
  editOff.value = true;
}
getCategor();

async function pushNewCategory() {
  if (!newCategory.value) return;
  useFetch(`/api/categories/dbAppCreate`, {
    method: "post",
    body: { title: `${newCategory.value}` },
  });

  setTimeout(() => {
    getCategor();
  }, 300);
}

function deleteCategory(id) {
  useFetch(`/api/categories/dbAppDelete?id=${id}`,{
    method:'delete',
  })
  setTimeout(() => {
    getCategor();
  }, 300);
}
function openEdit(id) {
  editOff.value = true;
  checkId.value = id;
}
function editCategory(id) {

  if (!inputNewCategory.value) return;
  useFetch(`/api/categories/dbAppEdit?id=${id}`, {
    method: "patch",
    body: {
      title: `${inputNewCategory.value}`
    },
  });
  setTimeout(() => {
    getCategor();
    openEdit();
  }, 300);
}
</script>

<template>
     <LazyMenu />
  <section class="w-full h-screen  m-2 rounded-3xl px-4  py-3 bg-gray-100">
    <div class=" h-screen w-full justify-center items-center flex flex-col ">
      <h1 class="text-[2.1rem] font-semibold mb-10">Adicionar Categoria</h1>
      <div class="flex flex-col sm:flex-row xl:flex-row md:flex-row lg:flex-row justify-center">
        <input type="text" v-model="newCategory" class="xl:w-64  p-3 rounded-md" />
        <button
          @click="pushNewCategory"
          class=" mt-2 xl:ml-2 py-3 px-2 rounded-md bg-blue-700 hover:bg-blue-800 text-white"
        >
          Adicionar
        </button>
      </div>
      <div class="bg-slate-200 xl:w-[800px]   overflow-y-visible h-2/2 m-h-2/3 bg-opacity-50 rounded-md">
        <h1 class="text-[1.2rem] border-b-2 p-2 font-semibold text-gray-600 mt-8">
          Categorias
        </h1>
     
        <div  class="text-sm xl:text-lg">
          <div
            class="flex mb-4 w-full font-semibold justify-between"
            v-for="item in categories"
            :key="item.$id"
          >
            <div>
              <input
                type="text"
                v-if="
                  item.$id == checkId ? (newInput = true) : (newInput = false)
                "
                v-model="inputNewCategory"
                :placeholder="item.title"
                class="text-gray-800 rounded-sm p-1"
              />
              <input
                type="text"
                v-else
                v-model="item.title"
                class="text-gray-800 bg-transparent p-1 rounded-sm"
                :disabled="!editOff"
              />
              <Icon
                name="ep:arrow-down-bold"
                class="text-green-500 hover:text-green-600 cursor-pointer ml-4"
                v-if="item.$id == checkId ? (editOff = true) : (editOff = false)"
                @click="editCategory(item.$id)"
              />
              <Icon
                name="ep:close"
                class="text-red-500 hover:text-red-600 cursor-pointer ml-2"
                v-if="item.$id == checkId ? (editOff = true) : (editOff = false)"
                @click="openEdit()"
              />
            </div>

            <div class="flex gap-2">
              <p
                class="text-blue-500 cursor-pointer hover:text-blue-600"
                @click="openEdit(item.$id)"
              >
                Edit
              </p>
              <p
                class="text-red-500 cursor-pointer hover:text-red-600"
                @click="deleteCategory(item.$id)"
              >
                Excluir
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
