const app = Vue.createApp({
  data() {
    return {
      name: "Test Testerson",
      age: "25",
      vueLink: "https://vuejs.org/",
      imageUrl:
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    };
  },
  methods: {
    agePlus5() {
      return this.age + 5;
    },
    favoriteNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
