<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item" v-for="user in usersList" :key="user.id">
        <span class="user-name">{{ user.id }} -</span>
        <router-link :to="{ name: 'User', params: { id: user.id, user: user } }">
          <span class="user-name">{{ user.name }} -</span>
        </router-link>
        <span class="user-email">{{ user.email }} -</span>
        <button class="text-danger" @click="deleteUser(user.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Users",
  methods: {
    ...mapActions(["fetchUsers", "deleteUser"])
  },
  computed: mapGetters(["usersList"]),
  created() {
    this.fetchUsers();
  }
};
</script>

<style scoped>
.list-group {
  background-color: lightgray;
}

.list-group-item {
  margin-top: 20px;
  list-style: none;
}

.list-group-item span {
  margin-right: 5px;
}
</style>
