import { createApp } from "vue";
import App from "./App.vue";
import FriendContant from "./components/FriendContant.vue";
import NewFriend from "./components/NewFriend.vue";

const app = createApp(App);
app.component("friend-contact", FriendContant);
app.component("new-friend", NewFriend);

app.mount("#app");
