vue<template>
    <div class="section">
        <header class="shop-top">
            <i>淘</i>
            <div class="input">寻找baobeidianpu</div>
        </header>
        <section class="shop-section">
            <ul class="content">
                <van-swipe :autoplay="3000" indicator-color="white" class="swiper">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                 <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                 <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                 <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                 <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
            </ul>
        </section>
        <footer>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
        </footer>
    </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";
export default {
  data() {
    return {
      user: {
        name: "",
        password: ""
      }
    };
  },
  mounted() {
      let scroll = new BScroll('.shop-section')
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.section {
      overflow: hidden;

  .shop-top {
    height: 74px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    width: 100%;
    background-color: #ff852a;
    @include flex(flex-start);
    i {
      font-size: 32px;
      color: #fff;
      display: block;
      margin: 0 20px;
    }
    .input {
      height: 50px;
      width: 86%;
      background-color: #ff4e22;
      text-align: center;
      border-radius: 6px;
      line-height: 50px;
      color: #fff;
    }
  }
  .shop-section{
      margin-top:74px;
      overflow: hidden;
      height:calc(100vh - 74px - 86px);
      .swiper{
          height: 200px;
          background: #00f;
          color: #fff;
      }
  }
  footer{
      height:  86px;
      background: #ff852a;
      @include flex;
  }
}
</style>
