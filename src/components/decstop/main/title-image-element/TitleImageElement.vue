<template>
  <div class="col-lg-7 col-xl-6 d-none d-lg-block position-absolute top-0 end-0 pe-0" style="margin-top: 6.75rem;">
    <svg id="svg-wrapper" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1137.5 979.2">
      <path fill="#F9FBFF" d="M565.5,957.4c81.1-7.4,155.5-49.3,202.4-115.7C840,739.8,857,570,510.7,348.3C-35.5-1.5-4.2,340.3,2.7,389
              c0.7,4.7,1.2,9.5,1.7,14.2l29.3,321c14,154.2,150.6,267.8,304.9,253.8L565.5,957.4z"></path>
      <defs>
        <path id="mainHeroSVG1" d="M1137.5,0H450.4l-278,279.7C22.4,430.6,24.3,675,176.8,823.5l0,0C316.9,960,537.7,968.7,688.2,843.6l449.3-373.4V0z"></path>
      </defs>
      <clipPath id="mainHeroSVG2">
        <use xlink:href="#mainHeroSVG1"></use>
      </clipPath>
      <g transform="matrix(1 0 0 1 0 0)" clip-path="url(#mainHeroSVG2)">
        <image width="600px" height="600px"  v-bind:xlink:href="secondImage " transform="matrix(1.4462 0 0 1.4448 52.8755 0)"></image>
      </g>
    </svg>

  </div>
</template>

<script>
export default {
  name: "TitleImageElement",
  data() {
    return{

      // firstImage: require("../../assets/img/stock-photo-olympia-washington-july-2021-exterior.jpg"),
      secondImage: require("../../../../assets/img/stock-photo-woman-driver-showing-car-keys.jpg")
    }},

}
</script>

<style scoped>

</style>