<template>
  <Fragment>
    <tr
      class="user-row"
      :class="{ 'user-row--clickable': user.children.length }"
      @click="toggleOpen"
    >
      <th class="user-row__name">{{ level }} {{ user.name }}</th>
      <th class="user-row__phone">{{ user.phone }}</th>
    </tr>
    <template v-if="user.children.length && isOpen">
      <UserRow
        v-for="child in user.children"
        :key="child.id"
        :user="child"
        :level="level.length + 1"
      />
    </template>
  </Fragment>
</template>

<script>
import { computed, ref } from "vue";
import { Fragment } from "vue-frag";
export default {
  components: {
    Fragment,
  },
  name: "UserRow",
  props: ["user", "level"],
  setup(props) {
    const isOpen = ref(true);
    const level = computed(() =>
      Array.from({ length: props.level })
        .map(() => "-")
        .join("")
    );

    const toggleOpen = () => {
      if (!level) return;

      isOpen.value = !isOpen.value;
    };

    return { level, isOpen, toggleOpen };
  },
};
</script>
<style scoped>
.user-row {
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  border-collapse: collapse;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  background-color: #ffffff;
}

.user-row__name,
.user-row__phone {
  padding: 10px;
  display: table-cell;
  text-align: left;
}

.user-row__name--child {
  padding-left: 15px;
}

.user-row__phone {
  padding: 10px;
  text-align: left;
}
.user-row--clickable {
  cursor: pointer;
}
</style>
