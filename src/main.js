// 使用工具函数
import {add,mul} from "./js/info.js"
console.log(add(100,100))
console.log(mul(100,100))

//引入样式
require('./css/normal.css')
require('./css/special.less')


// Vue基础使用
import Vue from 'vue'
// new Vue({
//   el: '#app',
//   data: {
//     name: 'Chuckie'
//   }
// })

// Vue组件化开发
// const App = {
//   template: `<h2>{{message}}</h2>`,
//   data(){
//     return {
//       message: '我是APP组件'
//     }
//   }
// }

// new Vue({
//   el: '#app',
//   template: `
//   <div id="app"> 
//     <h2>{{fname}}</h2>
//     <c-cpn/>
//   </div>
//   `,
//   data: {
//     fname: 'Chuckie'
//   },
//   components: {
//     'c-cpn' : App
//   }
// })


// .vue文件封装的使用
import App from './vue/App.vue'

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})