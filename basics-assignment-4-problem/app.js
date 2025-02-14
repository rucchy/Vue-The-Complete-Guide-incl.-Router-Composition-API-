const app = Vue.createApp({
  data() {
    return {
      classes: "",
      visibility: true,
      inputBackground: "",
    };
  },
  computed: {
    classParagraph() {
      return {
        user1: this.classes === "user1",
        user2: this.classes === "user2",
        visible: this.visibility,
        hidden: !this.visibility,
      };
    },
  },
  methods: {
    toggleVisibility() {
      this.visibility = !this.visibility;
    },
  },
});

app.mount("#assignment");
