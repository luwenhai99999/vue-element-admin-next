import { defineStore } from "pinia";
import { ref } from "vue";

const isExpand = ref(false);
export const useExpand = defineStore("Expand", () => {
  function expandHandler() {
    isExpand.value = !isExpand.value;
  }
  function getExpand() {
    return isExpand.value;
  }
  return {
    isExpand,
    getExpand,
    expandHandler
  };
});
