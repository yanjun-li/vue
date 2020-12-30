## src/core 目录介绍
src/core
├── components
│   ├── index.js
│   └── keep-alive.js
├── config.js
├── global-api
│   ├── assets.js
│   ├── extend.js
│   ├── index.js
│   ├── mixin.js
│   └── use.js
├── index.js
├── instance
│   ├── events.js  // Vue 原型链上添加 $on, $off, $emit 等函数
│   ├── index.js   // Vue 构造函数定义
│   ├── init.js    // Vue 原型链上添加 _init 函数，用于实例内部初始化
│   ├── inject.js
│   ├── lifecycle.js // Vue 生命周期相关函数
│   ├── proxy.js
│   ├── render-helpers
│   │   ├── bind-dynamic-keys.js
│   │   ├── bind-object-listeners.js
│   │   ├── bind-object-props.js
│   │   ├── check-keycodes.js
│   │   ├── index.js
│   │   ├── render-list.js
│   │   ├── render-slot.js
│   │   ├── render-static.js
│   │   ├── resolve-filter.js
│   │   ├── resolve-scoped-slots.js
│   │   └── resolve-slots.js
│   ├── render.js
│   └── state.js  // 初始化data, props, computed, methods, watcher 等属性
├── observer
│   ├── array.js
│   ├── dep.js
│   ├── index.js
│   ├── scheduler.js
│   ├── traverse.js
│   └── watcher.js
├── util
│   ├── debug.js
│   ├── env.js
│   ├── error.js
│   ├── index.js
│   ├── lang.js
│   ├── next-tick.js
│   ├── options.js
│   ├── perf.js
│   └── props.js
└── vdom
    ├── create-component.js
    ├── create-element.js
    ├── create-functional-component.js
    ├── helpers
    │   ├── extract-props.js
    │   ├── get-first-component-child.js
    │   ├── index.js
    │   ├── is-async-placeholder.js
    │   ├── merge-hook.js
    │   ├── normalize-children.js
    │   ├── normalize-scoped-slots.js
    │   ├── resolve-async-component.js
    │   └── update-listeners.js
    ├── modules
    │   ├── directives.js
    │   ├── index.js
    │   └── ref.js
    ├── patch.js
    └── vnode.js