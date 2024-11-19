import { ref, watch } from "vue";
import { defineStore } from "pinia";

const initialValue = [
  {
    id: "some id",
    name: "some name",
    phone: "some phone",
    parentId: null,
  },
  {
    id: "some id 2",
    name: "some name 2",
    phone: "some phone 2",
    parentId: null,
  },
  {
    id: "some id 5",
    name: "some name 5",
    phone: "some phone 5",
    parentId: null,
  },
  {
    id: "some id 3",
    name: "some name 3",
    phone: "some phone 3",
    parentId: "some id",
  },
  {
    id: "some id 4",
    name: "some name 4",
    phone: "some phone 4",
    parentId: "some id 3",
  },
];

export const useContactsStore = defineStore("contacts", () => {
  const list = ref(JSON.parse(localStorage.getItem("list")) || initialValue);

  const addUser = (user) => {
    list.value = [...list.value, { id: crypto.randomUUID(), ...user }];
  };

  watch(
    list,
    (state) => {
      localStorage.setItem("list", JSON.stringify(state));
    },
    { deep: true }
  );

  return { list, addUser };
});
