const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
    };
  },
  computed: {
    fullname() {
      return this.name === "" ? "" : this.name + " " + this.lastName;
    },
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    submitForm() {
      alert("Submitted!");
    },

    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
