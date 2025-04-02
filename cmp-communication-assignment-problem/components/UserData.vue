<template>
  <form @submit.prevent="submit">
    <div>
      <label for="username">Username</label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="age">Age</label>
      <input type="number" id="age" v-model="age" />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>
<script>
export default {
  emits: ["submit"],
  data() {
    return {
      username: "",
      age: null,
    };
  },
  methods: {
    submit() {
      this.$emit("submit", {
        username: this.username,
        age: this.age,
      });
    },
  },
};
</script>

<style>
@import url("../public/form.css");
</style>
