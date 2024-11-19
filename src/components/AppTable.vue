<template>
  <table class="app-table">
    <thead class="app-table__header">
      <tr>
        <th v-for="item in ['Имя', 'Телефон']">{{ item }}</th>
      </tr>
    </thead>
    <tbody class="app-table__content">
      <UserRow v-for="user in tree" :key="user.id" :user="user" />
    </tbody>
  </table>
</template>
<script>
import { computed } from "vue";
import UserRow from "./UserRow.vue";
import { useContactsStore } from "../stores/contacts";

export default {
  components: { UserRow },
  setup() {
    const contacts = useContactsStore();

    function buildTree(flatArray, parentId = null) {
      const tree = {};

      flatArray
        .filter((item) => item.parentId === parentId)
        .forEach((item) => {
          tree[item.id] = { ...item, children: buildTree(flatArray, item.id) };
        });

      return Object.values(tree);
    }

    const tree = computed(() => buildTree(contacts.list));

    return { tree, contacts };
  },
};
</script>
<style scoped>
.app-table {
  padding: 10px;
  border: 2px solid #bd89f9;
  border-radius: 8px;
  background-color: rgb(255, 235, 255);
  color: #333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.app-table:hover {
  border-color: #9f1ac0;
}
.app-table:focus {
  outline: none;
  border-color: #9f1ac0;
  box-shadow: 0 0 8px rgba(174, 59, 224, 0.5);
}
.app-table__header {
  background-color: #a75cd8;
  color: white;
  padding: 10px;
}
.app-table__content {
  padding: 12px 15px;
  border-radius: 5px;
}
</style>
