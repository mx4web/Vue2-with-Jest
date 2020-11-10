<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input v-model="newGoal" name="newGoal" placeholder="Enter your goal" />
      <input type="submit" value="Add New Goal" />
    </form>

    <div v-if="submitted">
      <h2>List of your goals:</h2>
      <div class="goal-list" v-for="goal in goals" :key="goal">
        {{ goal }}
      </div>
    </div>
  </div>
</template>

<script>
//shortcut to adding template
export default {
  data() {
    return {
      goals: [],
      newGoal: "",
      submitted: false,
    };
  },
  methods: {
    handleSubmit() {
      if (this.newGoal) {
        this.submitted = true;
        this.goals.push(this.newGoal);
        this.newGoal = "";
      }
    },
  },
};
</script>
