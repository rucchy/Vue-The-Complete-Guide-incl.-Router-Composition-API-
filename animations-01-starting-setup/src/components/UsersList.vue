<template>
  <TransitionGroup tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </TransitionGroup>

  <div>
    <input type="text" ref="userNameInput" />
    <button @click="addUser">Add User</button>
  </div>
</template>
<script>
export default {
  data() {
    return { users: ['John', 'Jane', 'Jack', 'Jill', 'Joe'] };
  },
  methods: {
    addUser() {
      this.users.unshift(this.$refs.userNameInput.value);
    },
    removeUser(user) {
      this.users = this.users.filter((u) => u !== user);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}
li {
  padding: 1rem;
  text-align: center;
  border: 1px solid #ccc;
}

.user-list-enter-from {
  transform: translateX(-30px);
  opacity: 0;
}
.user-list-enter-active {
  transition: all 1s ease-out;
}
.user-list-enter-to,
.user-list-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.user-list-leave-active {
  transition: all 1s ease-in;
  position: absolute;
}
.user-list-leave-to {
  transform: translateX(30px);
  opacity: 0;
}

.user-list-move {
  transition: transform 0.8s ease;
}
</style>
