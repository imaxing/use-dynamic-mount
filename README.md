# 动态挂载 vue 示例

#### Installtion

```bash
npm i dnamic-mount
```

#### Usage

```js
import Vue from "vue";
import useDnamicMount from "use-dnamic-mount";

Vue.use(useDnamicMount(), {
  name: "$toast",
  extend: {
    data: () => ({ message: "" }),
    render(h) {
      return h("span", this.message);
    },
  },
});

this.$toast({ message: "hello world" });
```

#### Options

| 参数名    | 说明                 | 类型 | 默认值 |
| --------- | -------------------- | ------ | -------------- |
| name      | 方法名               | String     | $dnamicMount   |
| extend    | 挂载的组件 (必填)    | VNode      | -              |
| nextTick  | 挂载后的回调         | Function      | -              |
| className | 挂载节点自定义 class | String      | dnamic-element |
