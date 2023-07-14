export interface DynamicMountOptions {
  name?: string
  className?: string
  extend?: any
  defaultOption?: Record<string, any>
  nextTick?: () => void
}

export interface MountReturnValue {
  app: any
  close: () => void
  component: () => any
  destroy: () => void
}

export default () => ({
  install(Vue: any, options?: DynamicMountOptions) {
    const {
      name = '$dynamicMount',
      className = 'dynamic-element',
      extend,
      nextTick,
      defaultOption = {}
    } = options || {}
    if (!extend) return

    Vue.prototype[name] = (options: any): MountReturnValue => {
      const DynamicComponent = Vue.extend(extend)
      const app = new DynamicComponent({
        data: () => ({
          ...defaultOption,
          ...options,
          destroy: () => destroy()
        })
      })

      const destroy = () => {
        app.$el.remove()
        app.$destroy()
        options.onDestroy?.()
      }

      const div = document.createElement('div')
      div.className = className
      document.body.appendChild(div)
      app.$mount(div)

      nextTick && app.$nextTick(nextTick)
      return {
        app,
        destroy,
        close: () => app.close?.(),
        component: () => app.$refs.component
      }
    }
  }
})
