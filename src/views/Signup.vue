<template>
  <div>
    <h1>Vue 2 + VeeValidate - Sign Up</h1>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <ValidationProvider name="Name" rules="required|alpha" v-slot="{ errors }">
          <div class="form-group">
            <label>Name</label>
            <input class="form-control" v-model="formData.name" />
            <span class="error">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
          <div class="form-group">
            <label>Email</label>
            <input class="form-control" v-model="formData.email" type="email" />
            <span class="error">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Password" rules="required|min:6|max:12" v-slot="{ errors }">
          <div class="form-group">
            <label>Password</label>
            <input class="form-control" v-model="formData.password" type="password" />
            <span class="error">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Gender" rules="required" v-slot="{ errors }">
          <div class="form-group">
            <label>Gender</label>
            <select class="form-control" v-model="formData.gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <span class="error">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="AcceptTerms" rules="required" v-slot="{ errors }">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="formData.acceptTerms" />
            <label class="form-check-label">Accept Terms</label>
            <span class="error">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <input class="btn btn-primary mt-2" type="submit" text="submit" />
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import Vue from "vue";
import { ValidationObserver } from "vee-validate";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
export default {
  data: () => ({
    formData: {
      name: "",
      email: "",
      password: "",
      gender: "",
      acceptTerms: null
    }
  }),
  methods: {
    onSubmit() {
      console.log(this.formData);
    }
  }
};
</script>
<style scoped>
.form-group input {
  margin: 10px;
}
.error {
  color: red;
}
</style>
