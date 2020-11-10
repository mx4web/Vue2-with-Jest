<template>
  <div>
    <div>
      <span v-if="show">{{ msg }}</span>
      <span v-else>{{ msg }} again!</span>
    </div>
    <div>
      <span class="counter">Click the button {{ counter }} times!</span>
      <button @click="increaseCounter">Click me</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      required: true
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    increaseCounter() {
      this.counter += 1;
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  background-color: lightblue;
  margin-bottom: 20px;
}
</style>
