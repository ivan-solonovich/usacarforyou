<template>
<div class="main-wrapper">
  <div id="decstop" v-show="!isMobile" >
        <HeaderContainer/>
        <div class="content-wrapper container d-lg-flex align-items-lg-center content-space-t-1 content-space-lg-0 min-vh-lg-100">
          <MainContent/>
         <TitleImageElement/>

    </div>

  </div>
  <div id="mobile" v-show="isMobile">
    <div class="header-wrapper">
      <HeaderContainerMobile/>
    </div>

    <div class=" container mobile-wrapper">
      <div class="title-image-wrapper-mobile">
        <TitleImageElementMobile/>
      </div>

      <MainContent/>
    </div>

  </div>
</div>
</template>

<script>
import TitleImageElement from "@/components/decstop/main/title-image-element/TitleImageElement";
import HeaderContainer from "@/components/decstop/header/HeaderContainer";
import MainContent from "@/components/decstop/main/title/MainContent";
import TitleImageElementMobile from "@/components/mobile/title-image-element-mobile/TitleImageElementMobile";
import HeaderContainerMobile from "@/components/mobile/header-mobile/HeaderContainerMobile";
export default {

  name: "MainWrapper",
  data(){
    return{
      isMobile: false
    }
  },
  components:{
    TitleImageElement,
    HeaderContainer,
    MainContent,
    TitleImageElementMobile,
    HeaderContainerMobile
  },
 computed:{

  },
  created() {
    window.addEventListener('load', ()=>{
      if (innerWidth<1280){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    })
    window.addEventListener('resize', ()=>{
      if (innerWidth<1280){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    })
  },
  methods:{
    windowWidth(){

    }
  }
}

</script>

<style scoped>
.content-wrapper{
  width: 100%;
  height: 750px;
}
.mobile-wrapper{
  width: 100%;
  display: flex;
  flex-direction: column;
}
.header-wrapper{
  padding-bottom: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title-image-wrapper-mobile{
  padding-bottom: 1rem;
  border-radius: 20px;
}
</style>