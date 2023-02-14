import { App, createApp } from "vue";
import DoggyWidgetApp from "./App.vue";

interface DoggyWidgetOptions {
  container: HTMLElement;
}

(() => {
  class DoggyWidget {
    private app: App;
    private container: HTMLElement;
    private containerId: string;

    constructor({ container }: DoggyWidgetOptions) {
      this.container = container;
      this.containerId = container.id;

      this.app = createApp(DoggyWidgetApp, {
        config: {
          containerId: this.containerId,
          container,
        },
      });

      this.app.mount("#" + this.containerId);
    }

    destroy() {
      this.app.unmount();
      this.container.innerHTML = "";
    }
  }

  (window as any).DoggyWidget = {
    init(config) {
      return new DoggyWidget(config);
    },
  };
})();
