<template>
  <active-user
    v-if="activeUser"
    :username="activeUser.username"
    :age="activeUser.age"
  />
  <user-data @submit="submit" />
</template>
<script>
export default {
  data() {
    return {
      activeUser: null,
    };
  },
  methods: {
    submit({ username, age }) {
      this.activeUser = {
        username: username,
        age: age,
      };
    },
  },
};
</script>

<style>
@import url("../public/styles.css");
</style>
