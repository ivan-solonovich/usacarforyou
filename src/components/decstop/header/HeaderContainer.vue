<template>
<div class="header-container container container-lg">
  <div class="logo-container">

      <img class="logo-brand"  src="../../../assets/logo/main-logo50px.png" alt="Logo">
      <div class="logo">
        <img src="../../../assets/logo/uscarforyou350.png" alt="">
      </div>
  </div>
  <div class="menu-container">

  </div>
   <div class="contacts-container">

   </div>

</div>
</template>

<script>
export default {
  name: "HeaderContainer"
}
</script>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap');
  header-container{
    font-family: 'Open Sans', sans-serif;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

  }
  .logo-brand{
    padding-left: 1rem;
    padding-right: 1rem;
  }
    .logo-container{
      font-weight: bolder;
      font-size: 50px;
      width: 240px;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
</style>