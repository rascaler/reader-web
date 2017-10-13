<style rel="stylesheet/less" lang="less">
  /*.home {*/
    /*background-image: url("../../static/images/swipe_1.jpg");*/
  /*}*/
  .bk-swipe {
    width: 100%;
  }
</style>
<template>
  <div class="home">
    <mu-flexbox>
      <mu-flexbox-item class="logo">
        redding中文网
      </mu-flexbox-item>
      <mu-flexbox-item class="account">
        <mu-icon value="account_circle" :size="36" color="red"/>
      </mu-flexbox-item>
    </mu-flexbox>
    <mu-flexbox>
      <mu-flexbox-item style="height: 150px;">
        <mt-swipe :auto="4000">
          <mt-swipe-item><img class="bk-swipe" src="../../static/images/swipe_1.jpg" /></mt-swipe-item>
          <mt-swipe-item><img class="bk-swipe" src="../../static/images/swipe_2.jpg" /></mt-swipe-item>
          <mt-swipe-item><img class="bk-swipe" src="../../static/images/swipe_3.jpg" /></mt-swipe-item>
          <mt-swipe-item><img class="bk-swipe" src="../../static/images/swipe_4.jpg" /></mt-swipe-item>
        </mt-swipe>
      </mu-flexbox-item>
    </mu-flexbox>
    <mu-flexbox orient="vertical" gutter="0">
      <mu-flexbox-item>
        <mu-flexbox>
          <mu-flexbox-item class="bk-type" style="border: 1px solid;" align="center">
            <mu-flexbox orient="vertical">
              <mu-flexbox-item align="center">
                <mu-icon value="account_circle" :size="36" color="red"/>
              </mu-flexbox-item>
              <mu-flexbox-item align="center">
                玄幻
              </mu-flexbox-item>
            </mu-flexbox>
          </mu-flexbox-item>
          <mu-flexbox-item>
  武侠
          </mu-flexbox-item>
          <mu-flexbox-item>
  都市
          </mu-flexbox-item>
          <mu-flexbox-item>
  军事
          </mu-flexbox-item>
          <mu-flexbox-item>
  游戏
          </mu-flexbox-item>
        </mu-flexbox>
      </mu-flexbox-item>
      <mu-flexbox-item>
        <mu-flexbox>
          <mu-flexbox-item class="bk-type" style="border: 1px solid;" align="center">
            <mu-flexbox orient="vertical">
              <mu-flexbox-item align="center">
                <mu-icon value="account_circle" :size="36" color="red"/>
              </mu-flexbox-item>
              <mu-flexbox-item align="center">
                科幻
              </mu-flexbox-item>
            </mu-flexbox>
          </mu-flexbox-item>
          <mu-flexbox-item>
            女生网
          </mu-flexbox-item>
          <mu-flexbox-item>
            奇幻
          </mu-flexbox-item>
          <mu-flexbox-item>
            仙侠
          </mu-flexbox-item>
          <mu-flexbox-item>
            现实
          </mu-flexbox-item>
        </mu-flexbox>
      </mu-flexbox-item>
      <mu-flexbox-item>
        <mu-flexbox>
          <mu-flexbox-item class="bk-type" style="border: 1px solid;" align="center">
            <mu-flexbox orient="vertical">
              <mu-flexbox-item align="center">
                <mu-icon value="account_circle" :size="36" color="red"/>
              </mu-flexbox-item>
              <mu-flexbox-item align="center">
                历史
              </mu-flexbox-item>
            </mu-flexbox>
          </mu-flexbox-item>
          <mu-flexbox-item>
            体育
          </mu-flexbox-item>
          <mu-flexbox-item>
            灵异
          </mu-flexbox-item>
          <mu-flexbox-item>
            二次元
          </mu-flexbox-item>
          <mu-flexbox-item>

          </mu-flexbox-item>
        </mu-flexbox>
      </mu-flexbox-item>
    </mu-flexbox>
    <mu-flexbox style="margin-top: 10px;">
      <mu-flexbox-item>
        <span style="color:red;">| </span>排行榜
      </mu-flexbox-item>
      <mu-flexbox-item>
        <div style="display: block;overflow-x: scroll;width: 100%;">
          <img src="../../static/images/paihangbang_1.jpg">
          <img src="../../static/images/paihangbang_2.jpg">
          <img src="../../static/images/paihangbang_3.jpg">
          <img src="../../static/images/paihangbang_4.jpg">
          <img src="../../static/images/paihangbang_5.jpg">
          <img src="../../static/images/paihangbang_6.jpg">
          <img src="../../static/images/paihangbang_7.jpg">
          <img src="../../static/images/paihangbang_8.jpg">
          <img src="../../static/images/paihangbang_9.jpg">
        </div>
      </mu-flexbox-item>
    </mu-flexbox>
  </div>
</template>
<script>
  export default {
    name: '',
    mounted () {
    },
    watch: {
    },
    methods: {
    },
    data () {
      return {
      }
    }
  }
</script>


