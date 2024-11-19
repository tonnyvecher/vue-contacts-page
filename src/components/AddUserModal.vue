<template>
  <AppModal>
    <div class="add-user-modal">
      <header class="add-user-modal__header">
        <h3>Добавление пользователя</h3>
        <button
          class="add-user-modal__header--button"
          type="button"
          @click="$emit('close')"
        >
          ✕
        </button>
      </header>
      <main>
        <form class="add-user-modal__main" @submit.prevent="addUser">
          <label>
            Имя:
            <input v-model="name" type="text" required />
          </label>
          <label>
            Телефон:
            <input v-model="phone" type="tel" required />
          </label>
          <label>
            Начальник:
            <select v-model="parentId">
              <option disabled value="">Please select one</option>
              <option
                v-for="user in contacts.list"
                :key="user.id"
                :value="user.id"
              >
                {{ user.name }}
              </option>
            </select>
          </label>
        </form>
      </main>
      <footer class="add-user-modal__footer">
        <button
          class="add-user-modal__footer--button"
          @click="addUser"
          type="submit"
          :disabled="!name || !phone"
        >
          Сохранить
        </button>
      </footer>
    </div>
  </AppModal>
</template>

<script>
import { ref } from "vue";
import { useContactsStore } from "../stores/contacts";
import AppModal from "./AppModal.vue";

export default {
  components: {
    AppModal,
  },
  emits: ["close"],
  setup(props, { emit }) {
    const contacts = useContactsStore();
    const parentId = ref(null);
    const name = ref("");
    const phone = ref("");

    const addUser = () => {
      contacts.addUser({
        name: name.value,
        phone: phone.value,
        parentId: parentId.value,
      });

      emit("close");
    };

    return { contacts, parentId, name, phone, addUser };
  },
};
</script>

<style scoped>
.add-user-modal__header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}
.add-user-modal__header--button {
  padding: 0;
  max-width: 56px;
  max-height: 56px;
}

.add-user-modal__main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
}

label {
  padding: 10px;
}

input,
select {
  max-width: 400px;
  max-height: 100px;
  padding: 0px 16px 0px 16px;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  border-radius: 36px;
}

.add-user-modal__footer--button {
  position: relative;
  top: 15px;
}
button {
  width: 144px;
  height: 56px;
  gap: 12px;
  border-radius: 32px;
  background: #ffb7fe;
  padding: 0 24px 0 24px;
  border: none;
  font-size: 20px;
  background-color: #e5d2fb;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
button:hover {
  background-color: rgb(201, 154, 209);
  color: #fff;
}
</style>
