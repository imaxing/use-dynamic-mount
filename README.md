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
  name: "$renderButton",
  extend: {
    data: () => ({ text: "" }),
    render(h) {
      return h("button", this.text);
    },
  },
});

this.$renderButton({ text: "hello world" });
```

#### Options

| 参数名    | 说明                 | 默认值 |
| --------- | -------------------- | ------ | -------------- |
| name      | 方法名               | \*     | $dnamicMount   |
| extend    | 挂载的组件 (必填)    | -      | -              |
| nextTick  | 挂载后的回调         | -      | -              |
| className | 挂载节点自定义 class | -      | dnamic-element |
