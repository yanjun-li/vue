import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue) // 原型链上添加 _init函数
stateMixin(Vue)    // 原型链上添加 $data, $props, $set, $delete, $watch
eventsMixin(Vue)  // 原型链上添加 $on, $once, $off, $emit 等函数
lifecycleMixin(Vue)  // 原型链上添加 _update，$forceUpdate， $destroy 
renderMixin(Vue) // 原型链上添加 $nextTick, _render

export default Vue
