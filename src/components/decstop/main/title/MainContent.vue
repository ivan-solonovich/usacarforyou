<template>
  <div class="main-content-wrapper">
      <div class="main-content col-lg-7">
        <div class="mb-8">
          <h1 class=" title display-5 mb-3 ">
           Машина твоей мечты из США
            <h3>
              <VueWriter id="typing-text" :array="slogans" :eraseSpeed="10" :typeSpeed="70"  :intervals="200"/>
            </h3>
          </h1>

          <p class="lead">Мы разработали, надежную систему закупки, транспортировки и обслуживания автомобилей.
            Процесс приобретения автомобиля мы сделалм, не только выгодным, но и комфортным. </p>
        </div>

        <div class="d-grid d-sm-flex gap-3">
          <a class="btn btn-primary btn-transition px-6" href="./page-login-simple.html">Связатся с менеджером</a>
          <a class="btn btn-link" href="#">Узнать больше <i class="bi-chevron-right small ms-1"></i></a>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: "MainContent",
  data() {
    return { slogans:
        ["На 40-60% дешевле",
        "С прозрачной историей",
        "И в великолепном состоянии"] };
  }
}
</script>

<style scoped>
.main-content-wrapper{
  width: 100%;
  display: flex;
  justify-content: center;
}
  #typing-text{
    color: #e72254;
  }
  .title{
    color: #4794cb;
  }
  .main-content{
    background-image: url("../../../../assets/img/banner-bg2.jpg");
    background-repeat: no-repeat;
    background-origin: border-box;
    ackground-size: cover;
    background-size: contain;
  }
</style>