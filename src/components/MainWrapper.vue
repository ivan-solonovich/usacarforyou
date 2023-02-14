<template>
<div class="main-wrapper">
  <HeaderContainer/>
  <div class="content-wrapper container d-lg-flex align-items-lg-center content-space-t-3 content-space-lg-0 min-vh-lg-100">

  <TitleImageElement/>
  <MainContent/>
</div>
</div>
</template>

<script>
import TitleImageElement from "@/components/main/title-image-element/TitleImageElement";
import HeaderContainer from "@/components/header/HeaderContainer";
import MainContent from "@/components/main/title/MainContent";
export default {

  name: "MainWrapper",
  components:{
    TitleImageElement,
    HeaderContainer,
    MainContent
  },
  computed:{

  }
}

</script>

<style scoped>
.content-wrapper{
  width: 100%;
  height: 750px;
}
</style>