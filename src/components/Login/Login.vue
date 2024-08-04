<template>
  <section class="w-screen h-screen flex items-center justify-center">
    <form class="w-11/12 md:w-1/2 xl:w-1/4" @submit.prevent="handleLogin">
      <section>
        <img src="../../assets/icons/Gen_Code.svg" alt="Logo" class="h-14" />
      </section>
      <section class="my-8">
        <h3 class="text-xl capitalize font-semibold text-black01">
          Welcome back !
        </h3>
        <p class="capitalize text-sm text-Till091 font-semibold">
          Please input the details below to log in
        </p>
      </section>

      <section class="my-2 mb-2">
        <label for="email" class="text-base02 block my-2">E-mail</label>
        <input
          v-model="email"
          class="input border-[1px] border-blue01 focus:border-Till10101 focus:outline-none rounded-md w-full h-11 px-3 transition-all duration-300 ease-linear"
          type="email"
          placeholder=" Enter your email"
          required=""
          name="email"
          value=""
        />
      </section>

      <section class="my-2 mb-2">
        <label class="text-base02 block my-2"> Password </label>
        <input
          v-model="password"
          class="input border-[1px] border-blue01 focus:border-Till10101 focus:outline-none rounded-md w-full h-11 px-3 transition-all duration-300 ease-linear"
          type="text"
          placeholder="password"
          required=""
          name="password"
          value=""
        />
      </section>

      <section class="my-4 mb-5 w-full">
        <button
          :disabled="loading"
          class="font-semibold selection:capitalize rounded p-2 cursor-pointer transition-all duration-150 ease-in transform undefined text-whites bg-Till10101 hover:bg-blue01 w-full"
        >
          {{ loading ? 'Logging in.....' : 'Login' }}
        </button>
      </section>

      <section>
        <p class="font-semibold capitalize inline text-[13px]">
          no account?<router-link
            to="/register"
            class="font-semibold capitalize text-[13px] px-1 text-Till091"
            >create account</router-link
          ><router-link
            class="font-semibold capitalize text-[13px] px-1 text-Till091"
            to="/forget-password"
            >Forgot Password</router-link
          >
        </p>
      </section>
    </form>
  </section>
</template>

<script>
import axios from 'axios';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

export default {
  data(){
    return{
      email: '',
      password: '',
      loading: false,
      error: '',
      success: ''

    }
  },
  methods:{
    async handleLogin(){
      try {
        this.loading = true;
        const response = await axios.post('https://gen-code-api.onrender.com/api/login/', {
          email: this.email,
          password: this.password
        });

         // Save the token to localStorage
        localStorage.setItem('authToken', response.data.accessToken);


        this.success = 'User signed up successfully';
        this.error = '';
        this.loading = false;
        console.log(response.data);
        // Show a toast notification
        Toastify({
          text: "Login successful! Redirecting to dashboard...",
          duration: 3000,
          close: true,
          gravity: "top",
          position: "right",
          backgroundColor: "#4CAF50",
        }).showToast();
        // Redirect to the login page after a short delay to allow the toast to be seen
        setTimeout(() => {
          this.$router.push('/url-dashboard');
        }, 3000);
      } catch (error) {
        this.error = 'Error Logging in';
        this.success = '';
        this.loading = false;
        // Show a toast notification for error
        Toastify({
          text: "Error signing up",
          duration: 3000,
          close: true,
          gravity: "top",
          position: "right",
          backgroundColor: "#FF0000",
        }).showToast();
        console.error(error);
      }
    }
  }
}


</script>

<style scoped></style>
