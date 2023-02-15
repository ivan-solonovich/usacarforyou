<template>
  <div class="video-wrapper">
    <video :width="videoOfWidthChecker" style="border-radius: 2rem" autoplay muted loop>
      <source src="../../../assets/video/gorgeous-woman.mp4" type="video/mp4">
      Error Message
    </video>


  </div>
</template>

<script>
export default {
  name: "TitleImageElement",
  data() {
    return{

    }},
    computed:{

      videoOfWidthChecker(){
       let videoOfWidth = window.innerWidth - 20;
        return  videoOfWidth
      }
    }
}
</script>

<style scoped>
.video-wrapper{
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>