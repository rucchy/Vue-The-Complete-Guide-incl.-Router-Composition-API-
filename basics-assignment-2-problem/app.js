const app = Vue.createApp({
  data() {
    return {
      text: "",
      text2: "",
      confirmedText2: "",
    };
  },
  methods: {
    submitForm() {
      alert("Submitted!");
    },
    updateInput(event) {
      this.text = event.target.value;
    },
    updateInput2(event) {
      this.text2 = event.target.value;
    },
    confirmText2() {
      this.confirmedText2 = this.text2;
    },
  },
});

app.mount("#assignment");
