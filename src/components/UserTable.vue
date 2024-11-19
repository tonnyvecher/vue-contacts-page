<template>
  <div class="user-table">
    <button @click="openModal" class="user-table__add-button">
      Добавить пользователя
    </button>
    <AppTable />
    <AddUserModal v-if="isModalOpen" @close="closeModal" />
  </div>
</template>

<script>
import UserRow from "./UserRow.vue";
import AddUserModal from "./AddUserModal.vue";
import AppTable from "./AppTable.vue";
import { ref } from "vue";

export default {
  components: { UserRow, AddUserModal, AppTable },
  setup() {
    const isModalOpen = ref(false);
    const parentId = ref(null);

    const openModal = () => {
      isModalOpen.value = !isModalOpen.value;
      parentId.value = null;
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };

    return { isModalOpen, parentId, openModal, closeModal };
  },
};
</script>

<style scoped>
.user-table {
  padding: 10px;

  width: 100%;
  border-collapse: collapse;
  display: flex;
  flex-direction: column;
}

.user-table__add-button {
  margin: 10px;
  padding-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  color: rgb(56, 36, 64);
  border: 2px solid #a874e2;
  border-radius: 8px;
  background-color: #e5d2fb;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.user-table__add-button:hover {
  background-color: #9012af;
  color: white;
}
</style>
