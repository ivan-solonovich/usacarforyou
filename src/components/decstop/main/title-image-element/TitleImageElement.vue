<template>
  <div class="title-image-element">
    <div class="video-container align-items-lg-center">
      <video width="600" style="border-radius: 2rem"  autoplay muted loop>
        <source src="../../../../assets/video/gorgeous-woman.mp4" type="video/mp4">
        Error Message
      </video>
    </div>



  </div>
</template>

<script>
export default {
  name: "TitleImageElement",
  data() {
    return{

    }},

}
</script>

<style scoped>
.title-image-element{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>