import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import Login from '../pages/Login.vue'
import Services from '../pages/Services.vue'
import SignUp from '../pages/SignUp.vue'
import FAQ from '../pages/FAQ.vue'
import ContactUs from '../pages/ContactUs.vue'
import ForgetPassword from '../pages/ForgetPassword.vue'



const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/login', component: Login },
    { path: '/services', component: Services },
    { path: '/register', component: SignUp },
    { path: '/faqs', component: FAQ },
    { path: '/contact-us', component: ContactUs },
    { path: '/forget-password',component:ForgetPassword},
  ]
})

export default router
