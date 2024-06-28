<template>
  <section>
    <div>
      <h2 class="text-[56px] text-center mt-9 ml-10 text-[#2B2121] font-medium">
        Testimonial
      </h2>
      <p class="text-[14px] md:text-[24px] text-center text-[#2B2121] service">
        Get to know what other people have said about Us
      </p>

      <swiper :slides-per-view="1" :space-between="30" class="mySwiper">
        <swiper-slide>
          <div
            class="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14"
          >
            <review-card
              v-for="(review, index) in reviews"
              :key="index"
              :img-url="review.imgURL"
              :customer-name="review.customerName"
              :rating="review.rating"
              :feedback="review.feedback"
            />
          </div>
        </swiper-slide>
        
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { reviews } from "../../constants/index.js";
import ReviewCard from "../../components/ReviewCard Components/ReviewCard.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    ReviewCard
  },
  data() {
    return {
      reviews: reviews
    };
  }
};
</script>

<style scoped></style>
