import { defineStore } from "pinia";
import {Client, Databases} from "node-appwrite";
const count = ref(0);
const dateValue = reactive(ref([]));
const allDate = ref([])
const priceValue = ref()
const duplicados = ref([]);
const totalDay = ref([]);

export const useDatabase = defineStore("useDatabase", () => {

function getGraph(items){

  items.filter(item=>{
  dateValue.value.push(
    {
      total:[item.date, item.price]
    }
  );

})

allDate.value = dateValue.value.filter(((valor, indice, self)=>{

  return self.indexOf(valor) === indice;
}) )
duplicados.value.push(allDate.value)

}
  

  return {
   dateValue,
   allDate,
   getGraph,
   priceValue,
   duplicados
  };
});
