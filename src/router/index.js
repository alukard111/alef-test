import { format } from 'path'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Form from '../views/Form.vue'
import Preview from '../views/Preview.vue'
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Form',
    component: Form,
    
  },
  {
    path: '/preview',
    name: 'Preview',
    component: Preview,
    beforeEnter: (to, from, next) => {
      async function isValid() {
        const awaitValidation = await store.dispatch('form/VALIDATION')
        if (awaitValidation) {
          next()
        } else {
          next(false)
        }
      }

      isValid()
    }
  }
 
]

const router = new VueRouter({
  routes
})



export default router
