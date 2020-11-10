<template>
  <form @submit.prevent="onUserSubmit">
    <div class="form-group">
      <input type="text" name="name" placeholder="Enter name" v-model="name" />
    </div>
    <div class="form-group">
      <input type="text" name="email" placeholder="Enter email" v-model="email" />
    </div>
    <input type="submit" value="Add" />
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddUser",
  data() {
    return {
      name: "",
      email: "",
    };
  },
  methods: {
    ...mapActions(["addUsers"]),
    onUserSubmit() {
      this.addUsers({
        name: this.name,
        email: this.email,
      });
      this.name = "";
      this.email = "";
      this.$router.push("/admin");
    },
  },
};
</script>
