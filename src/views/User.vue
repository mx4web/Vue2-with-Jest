<template lang="">
  <div class="user">
    <h1>Current user name: {{ user.name }}</h1>
    <hr />

    <h3>User ID: {{ user.id }}</h3>
    <h3>Email: {{ user.email }}</h3>
    <h3>Address: {{ address }}</h3>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: ['user'],
  computed: {
    address() {
      return this.user.address
        ? `${this.user.address.street}, ${this.user.address.city}, ${this.user.address.zipcode}`
        : 'Not available';
    },
  },
};
</script>
