<template>
  <div class="video-wrapper">
    <video :width="videoOfWidth" style="border-radius: 2rem" autoplay muted loop>
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
      videoOfWidth: window.innerWidth
    }},
    created(){
      window.addEventListener('load', ()=>{
        this.videoOfWidth = window.innerWidth - 40;
        console.log(window.innerWidth)
        console.log( this.videoOfWidth)
      })
      window.addEventListener('resize', ()=>{
        this.videoOfWidth = window.innerWidth - 40;
      })

      }

}
</script>

<style scoped>
.video-wrapper{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>