<style rel="stylesheet/less" lang="less">
  /*.home {*/
    /*background-image: url("../../static/images/swipe_1.jpg");*/
  /*}*/
  .bk-swipe {
    width: 100%;
  }
  p {
    margin: 0px;
    text-align: center;
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
    <mu-flexbox style="margin-top: 10px;" orient="vertical">
      <mu-flexbox-item>
        <span style="color:red;">| </span>排行榜
      </mu-flexbox-item>
      <mu-flexbox-item>
        <ul style="white-space: nowrap;overflow-x: auto;margin: 0px;padding: 0px;">
          <li style="display: inline-block;list-style: none;width: 100px;height: 125px;">
            <a href="https://www.baidu.com" style="color: #333;text-decoration: none;outline: none;">
              <img src="../../static/images/paihangbang_1.jpg" style="width: 100%;">
              <p>书名</p>
              <p>作者</p>
            </a>
          </li>
          <li style="display: inline-block;list-style: none;width: 100px;height: 125px;">
            <img src="../../static/images/paihangbang_2.jpg" style="width: 100%;">
            <p>书名</p>
            <p>作者</p>
          </li>
          <li style="display: inline-block;list-style: none;width: 100px;height: 125px;">
            <img src="../../static/images/paihangbang_3.jpg" style="width: 100%;">
            <p>书名</p>
            <p>作者</p>
          </li>
          <li style="display: inline-block;list-style: none;width: 100px;height: 125px;">
            <img src="../../static/images/paihangbang_4.jpg" style="width: 100%;">
            <p>书名</p>
            <p>作者</p>
          </li>
          <li style="display: inline-block;list-style: none;width: 100px;height: 125px;">
            <img src="../../static/images/paihangbang_5.jpg" style="width: 100%;">
            <p>书名</p>
            <p>作者</p>
          </li>
          <li style="display: inline-block;list-style: none;width: 100px;height: 125px;">
            <img src="../../static/images/paihangbang_6.jpg" style="width: 100%;">
            <p>书名</p>
            <p>作者</p>
          </li>
          <li style="display: inline-block;list-style: none;width: 100px;height: 125px;">
            <img src="../../static/images/paihangbang_7.jpg" style="width: 100%;">
            <p>书名</p>
            <p>作者</p>
          </li>
          <li style="display: inline-block;list-style: none;width: 100px;height: 125px;">
            <img src="../../static/images/paihangbang_8.jpg" style="width: 100%;">
            <p>书名</p>
            <p>作者</p>
          </li>
        </ul>
      </mu-flexbox-item>
    </mu-flexbox>

    <mu-flexbox style="margin-top: 10px;" orient="vertical">
      <mu-flexbox-item>
        <span style="color:red;">| </span>热门小说
      </mu-flexbox-item>
      <mu-flexbox-item>
        <ul style="white-space: nowrap;overflow-x: auto;margin: 0px;padding: 0px;">
          <li style="display: inline-block;list-style: none;width: 100px;height: 125px;">
            <a href="https://www.baidu.com" style="color: #333;text-decoration: none;outline: none;">
              <img src="../../static/images/paihangbang_1.jpg" style="width: 100%;">
              <p>书名</p>
              <p>作者</p>
            </a>
          </li>
          <li style="display: inline-block;list-style: none;width: 100px;height: 125px;">
            <img src="../../static/images/paihangbang_2.jpg" style="width: 100%;">
            <p>书名</p>
            <p>作者</p>
          </li>
          <li style="display: inline-block;list-style: none;width: 100px;height: 125px;">
            <img src="../../static/images/paihangbang_3.jpg" style="width: 100%;">
            <p>书名</p>
            <p>作者</p>
          </li>
          <li style="display: inline-block;list-style: none;width: 100px;height: 125px;">
            <img src="../../static/images/paihangbang_4.jpg" style="width: 100%;">
            <p>书名</p>
            <p>作者</p>
          </li>
          <li style="display: inline-block;list-style: none;width: 100px;height: 125px;">
            <img src="../../static/images/paihangbang_5.jpg" style="width: 100%;">
            <p>书名</p>
            <p>作者</p>
          </li>
          <li style="display: inline-block;list-style: none;width: 100px;height: 125px;">
            <img src="../../static/images/paihangbang_6.jpg" style="width: 100%;">
            <p>书名</p>
            <p>作者</p>
          </li>
          <li style="display: inline-block;list-style: none;width: 100px;height: 125px;">
            <img src="../../static/images/paihangbang_7.jpg" style="width: 100%;">
            <p>书名</p>
            <p>作者</p>
          </li>
          <li style="display: inline-block;list-style: none;width: 100px;height: 125px;">
            <img src="../../static/images/paihangbang_8.jpg" style="width: 100%;">
            <p>书名</p>
            <p>作者</p>
          </li>
        </ul>
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


