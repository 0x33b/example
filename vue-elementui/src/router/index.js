import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Foo from '@/components/Foo.vue'
import Bar from '@/components/Bar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/foo',
      name: 'Foo',
      component: Foo
    },
    {
      path: '/Bar',
      name: 'Bar',
      component: Bar
    }
  ]
})
