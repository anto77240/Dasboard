import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Draggable, { DraggablePlugin } from "@braks/revue-draggable";


createApp(App).use(router).use(DraggablePlugin).mount("#app");

// App.directive("draggable", DraggableDirective);
App.component("DraggablePlugin", Draggable);

App.mount("#root");
