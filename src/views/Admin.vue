<template>
  <div class="admin">
    <h1>All Users:</h1>
    <Users />
    <hr />
    <router-link to="/user/new">
      <h1>
        Add New User
      </h1>
    </router-link>
  </div>
</template>

<script>
import Users from '@/components/Users.vue';

export default {
  components: {
    Users,
  },
};
</script>
