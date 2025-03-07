const app = Vue.createApp({
  data() {
    return { tasks: [], enteredValue: "", showList: true };
  },
  methods: {
    addTask() {
      if (this.enteredValue !== "") {
        this.tasks.push(this.enteredValue);
      }
    },
    toggleList() {
      this.showList = !this.showList;
    },
  },
});

app.mount("#assignment");
