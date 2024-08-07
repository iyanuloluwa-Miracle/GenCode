<template>
  <section class="bg-[#F3FAFD] py-16 lg:py-0">
    <section class="max-w-7xl mx-auto">
      <!-- Sentinel element -->
      <div id="sentinel" class="h-1"></div>

      <header :class="{ 'sticky-header': isSticky }">
        <nav
          class="flex flex-col lg:items-center lg:justify-between lg:flex-row lg:pr-5"
        >
          <figure
            class="flex justify-between items-center pr-5 lg:pr-0 lg:block"
          >
            <router-link to="/">
              <img
                src="../../assets/icons/Gen_Code.svg"
                alt="nav-logo"
                class="nav-logo"
              />
            </router-link>

            <!-- responsible for opening and closing of the links on mobile and tablet -->
            <div class="flex text-4xl lg:hidden">
              <i
                v-if="!isBarVisible"
                @click="close"
                class="pi pi-times visible cursor-pointer"
              ></i>
              <i
                v-else="isBarVisible"
                @click="open"
                class="pi pi-bars visible cursor-pointer"
              ></i>
            </div>
          </figure>

          <ul
            v-show="showAnchorLinks"
            class="flex flex-col mb-10 ml-20 space-y-10 md:items-center lg:flex-row lg:space-x-16 lg:mb-0 lg:space-y-0 md:ml-0"
          >
            <li class="text-MidnightGreen font-bold">
              <router-link to="/">Home</router-link>
            </li>
            <li class="text-MidnightGreen font-bold">
              <router-link to="/services">Services</router-link>
            </li>
            <li class="text-MidnightGreen font-bold">
              <router-link to="/contact-us">Contact Us</router-link>
            </li>
            <li class="text-MidnightGreen font-bold">
              <router-link to="/faqs">FAQS</router-link>
            </li>

            <!-- this is for the mobile and tablet screens -->
            <div class="flex flex-col gap-5 md:flex-row lg:hidden md:gap-7">
              <router-link to="/login" class="flex items-center gap-9">
                <button
                  class="capitalize rounded p-2 cursor-pointer text-sm font-bold transition-all duration-150 ease-in transform text-Teal border-[1px] border-TiffanyBlue hover:bg-PaynesGray hover:text-white w-28"
                >
                  Login
                </button>
              </router-link>

              <router-link to="/register" class="flex items-center gap-9">
                <button
                  class="capitalize text-xs font-bold rounded p-2 cursor-pointer transition-all duration-150 ease-in transform text-Licorice bg-TiffanyBlue hover:bg-PaynesGray hover:text-white w-28"
                >
                  Register
                </button>
              </router-link>
            </div>
          </ul>

          <!-- this is for the laptop and bigger screens -->
          <div class="hidden lg:flex items-center gap-7">
            <router-link to="/login" class="flex items-center gap-9">
              <button
                class="capitalize rounded p-2 cursor-pointer text-xs font-bold transition-all duration-150 ease-in transform bg-white text-Teal border-[1px] border-TiffanyBlue hover:bg-PaynesGray hover:text-white w-28"
              >
                Login
              </button>
            </router-link>

            <router-link to="/register" class="flex items-center gap-9">
              <button
                class="capitalize text-xs font-bold rounded p-2 cursor-pointer transition-all duration-150 ease-in transform text-Licorice bg-TiffanyBlue hover:bg-PaynesGray hover:text-white w-28"
              >
                Register
              </button>
            </router-link>
          </div>
        </nav>
      </header>
    </section>
  </section>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from "vue";

const isBarVisible = ref(true);
const showAnchorLinks = ref(false);
const isSticky = ref(false);

const open = () => {
  console.log("open");
  isBarVisible.value = false;
  showAnchorLinks.value = true;
};

const close = () => {
  console.log("close");
  isBarVisible.value = true;
  showAnchorLinks.value = false;
};

onMounted(() => {
  if (window.innerWidth >= 1024) {
    showAnchorLinks.value = true;
  }

  // Set up Intersection Observer
  const sentinel = document.querySelector("#sentinel");
  const observer = new IntersectionObserver(
    ([entries]) => {
      isSticky.value = !entries.isIntersecting;
    },
    { threshold: 0 }
  );

  if (sentinel) {
    observer.observe(sentinel);
  }

  onBeforeUnmount(() => {
    if (sentinel) {
      observer.unobserve(sentinel);
    }
  });
});
</script>
<style scoped>
.sticky-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #f3fafd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
