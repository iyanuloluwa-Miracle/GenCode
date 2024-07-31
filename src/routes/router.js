import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import Login from '../pages/Login.vue'
import Services from '../pages/Services.vue'
import SignUp from '../pages/SignUp.vue'
import FAQ from '../pages/FAQ.vue'
import ContactUs from '../pages/ContactUs.vue'
import ForgotPassword from '../pages/ForgotPassword.vue'
import Settings from '../pages/Dashboard/Settings.vue'
import ProfileDashboard from '../pages/Dashboard/ProfileDashboard.vue'
import UrlDashboard from '../pages/Dashboard/UrlDashboard.vue'
import TextDashboard from '../pages/Dashboard/TextDashboard.vue'
import FacebookDashboard from '../pages/Dashboard/FacebookDashboard.vue'
import XDashboard from '../pages/Dashboard/XDashboard.vue'
import EmailDashboard from '../pages/Dashboard/EmailDashboard.vue'
import YoutubeDashboard from '../pages/Dashboard/YoutubeDashboard.vue'
import EventsDashboard from '../pages/Dashboard/EventsDashboard.vue'
import ContactDashboard from '../pages/Dashboard/ContactCardDashboard.vue'
import NotFoundView from '../pages/404Page.vue';



// Mock function to check if user is authenticated
function isAuthenticated() {
  return !!localStorage.getItem('authToken');
}


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/login', component: Login },
    { path: '/services', component: Services },
    { path: '/register', component: SignUp },
    { path: '/faqs', component: FAQ },
    { path: '/contact-us', component: ContactUs },
    { path: '/forgot-password',component:ForgotPassword},
    { path: '/settings',component:Settings},
    { path: '/profile-dashboard',component:ProfileDashboard},
    { path: '/url-dashboard',component:UrlDashboard},
    { path: '/text-dashboard',component:TextDashboard},
    { path: '/facebook-dashboard',component:FacebookDashboard},
    { path: '/email-dashboard',component:EmailDashboard},
    { path: '/contact-dashboard',component:ContactDashboard}, 
    { path: '/twitter-dashboard',component:XDashboard}, 
    { path: '/youtube-dashboard',component:YoutubeDashboard},
    { path: '/event-dashboard',component:EventsDashboard},
    {path: '/:catchAll(.*)',component: NotFoundView},
  ]
})



// Global route guard
router.beforeEach((to, from, next) => {
  const publicPages = ['/', '/login', '/services', '/register', '/faqs', '/contact-us', '/forgot-password'];
  const authRequired = !publicPages.includes(to.path);

  if (authRequired && !isAuthenticated()) {
    return next('/login');
  }

  next();
});
export default router
