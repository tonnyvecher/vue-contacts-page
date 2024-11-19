<template>
  <div class="app">
    <header class="app_header">
      <h1>Таблица пользователей</h1>
    </header>
    <main class="app_main">
      <UserTable />
    </main>
  </div>
</template>

<script>
import UserTable from "./components/UserTable.vue";
export default {
  components: {
    UserTable,
  },
};
</script>

<style scoped>
.app {
  font-family: Arial, sans-serif;
  background: linear-gradient(to bottom, #dcbdff, #ffffff);
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 20px;
}
</style>
