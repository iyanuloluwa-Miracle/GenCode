<script setup>
import { RouterLink } from 'vue-router'

</script>




<template>
    <section class="text-center flex flex-col justify-center items-center h-96">
        <img src="../assets/images/404-error-with-people-holding-numbers-concept-illustration.png" alt="404 page image" width="400px" height="400px"/>
        <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
        <p class="text-xl mb-5">This page does not exist</p>
        <RouterLink to="/" class="text-white bg-Till10101 hover:bg-Aqua  rounded-md px-3 py-2 mt-4">Go Back
        </RouterLink>
    </section>
</template>