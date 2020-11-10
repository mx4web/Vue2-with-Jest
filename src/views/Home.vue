<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Greeting msg="Welcome to Vue.js App" />
  </div>
</template>

<script>
import Greeting from '@/components/Greeting.vue';

export default {
  name: 'Home',
  components: {
    Greeting,
  },
};
</script>
