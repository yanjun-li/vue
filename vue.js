const Vue = require('./dist/vue');

Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

var app = new Vue({
    data: {
      message: 'Hello Vue!'
    },
    inject: ['pros'],
    provide: {
      foo: 'bar'
    },
    template: '<div><keep-alive><button-counter/></keep-alive></div>'
  })



  console.log('data' in app._renderProxy);