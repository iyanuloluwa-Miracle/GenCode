<template>
  <main class="w-full md:my-12 md:items-start flex flex-col overflow-x-hidden">

   <section class="w-screen flex items-center justify-center">
    <form class="w-11/12 md:w-1/2 xl:w-1/4" @submit.prevent="handleSubmit">
      <section>
        <img src="../assets/icons/Gen_Code.svg" alt="Logo" class="h-14"/>
      </section>
      <section>
        <h3 class="text-xl font-semibold  text-black01">Register</h3>
        <p class="text-sm text-Till091">Please input your details below to register</p>

      </section>
      <section class="my-2 mb-2">
        <label class="text-base02 block my-2">
          First Name
        </label>
        <input v-model="firstName" class="input border-[1px] border-blue01 focus:border-Till10101 focus:outline-none rounded-md w-full h-11 transition-all px-3 duration-300 ease-linear" type="text" placeholder="Iyanuloluwa" required="" name="Iyanuloluwa" value="">
      </section>
      <section class="my-2 mb-2">
        <label class="text-base02 block my-2">
          Last Name
        </label>
        <input v-model="lastName" class="input border-[1px]  border-blue01 focus:border-Till10101 focus:outline-none rounded-md w-full h-11 transition-all px-3 duration-300 ease-linear" type="text" placeholder="last name" required="" name="Iyanuloluwa" value="">
      </section>
      <section class="my-2 mb-2">
        <label htmlFor="email" class="text-base02 block my-2">
          Email
        </label>
        <input v-model="email" class="input border-[1px]  border-blue01 focus:border-Till10101 focus:outline-none rounded-md w-full h-11 transition-all px-3 duration-300 ease-linear" type="text" placeholder="email" required="" name="email" value="">
      </section>
      <section class="my-2 mb-2">
        <label class="text-base02 block my-2">
          Password
        </label>
        <input v-model="password" class="input border-[1px]  border-blue01 focus:border-Till10101 focus:outline-none rounded-md w-full h-11 px-3 transition-all duration-300 ease-linear" type="text" placeholder="password" required="" name="password" value="">
      </section>      
      <p class="text-[11px]">Password must be atleast 8 character</p>
      <section class="my-4 mb-5 w-full">
        <button :disabled="loading" class="font-semibold selection:capitalize rounded p-2 cursor-pointer transition-all duration-150 ease-in transform undefined text-whites bg-Till10101 hover:bg-blue01 w-full ">
          {{ loading ? 'Registering...' : 'Register' }}
        </button>
      </section>
      <section>
        <p class="capitalize text-[10px] text-center">
          Already have a Gencode account ?
          <router-link to="/login" class="capitalize text-[12px] px-1">Login</router-link>
        </p>
      </section>
    </form>
    

   </section>
  </main>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      loading: false,
      error: '',
      success: ''
    };
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true;
        const response = await axios.post('http://localhost:3009/api/signup/', {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password
        });
        this.success = 'User signed up successfully';
        this.error = '';
        this.loading = false;
        console.log(response.data);
         // Redirect to the login page after successful registration
         this.$router.push('/login');
      } catch (error) {
        this.error = 'Error signing up';
        this.success = '';
        this.loading = false;
        console.error(error);
      }
    }
  }
};
</script>


<style></style>
