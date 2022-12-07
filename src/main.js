export default () => ({
  install(Vue, config = {}) {
    const {
      name = "$dynamicMount",
      className = "dynamic-element",
      extend,
      nextTick,
    } = config;
    if (!extend) return;
    Vue.prototype[name] = (options) => {
      const DynamicComponentConstructor = Vue.extend(extend);
      const app = new DynamicComponentConstructor({
        data: () => ({
          ...options,
          destroy: () => {
            app.$el.remove();
            app.$destroy();
          },
        }),
      });

      const div = document.createElement("div");
      div.className = className;
      document.body.appendChild(div);
      app.$mount(div);

      nextTick && app.$nextTick(nextTick);
      return {
        app,
        close: () => app.close && app.close(),
        component: () => app.$refs.component,
        destroy: () => {
          app.$el.remove();
          app.$destroy();
        },
      };
    };
  },
});
