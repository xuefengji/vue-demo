<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>


          <h3>PC产品</h3>
          <ul>
            <li>数据统计</li>
            <li>数据统计</li>
            <li>数据统计</li>
            <li>数据统计</li>
          </ul>
          <div class="hr"></div>
          <h3>手机应用类</h3>
          <ul>
            <li>数据统计</li>
            <li>数据统计</li>
            <li>数据统计</li>
            <li>数据统计</li>
          </ul>
      </div>
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li>数据统计</li>
          <li>数据统计</li>
          <li>数据统计</li>
          <li>数据统计</li>
        </ul>
      </div>
    </div>
      <div class="index-right">
        <slide-show></slide-show>
        <div class="index-board-list">
          <div class="index-board-item index-board-car">
          <div class="index-board-item-inner" >
            <h2>开放产品</h2>
            <p>开放产品是一款开放产品</p>
            <div class="index-board-button">
              <a class="button" >立即购买</a>
            </div>
          </div>
        </div>
          <div class="index-board-item index-board-loud">
            <div class="index-board-item-inner" >
              <h2>开放产品</h2>
              <p>开放产品是一款开放产品</p>
              <div class="index-board-button">
                <a class="button" >立即购买</a>
              </div>
            </div>
          </div>
          <div class="index-board-item index-board-earth">
            <div class="index-board-item-inner" >
              <h2>开放产品</h2>
              <p>开放产品是一款开放产品</p>
              <div class="index-board-button">
                <a class="button" >立即购买</a>
              </div>
            </div>
          </div>
          <div class="index-board-item index-board-hill">
            <div class="index-board-item-inner" >
              <h2>开放产品</h2>
              <p>开放产品是一款开放产品</p>
              <div class="index-board-button">
                <a class="button" >立即购买</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import slideShow from '@/components/slideShow'
    export default {
        name: "index",
      components: {
        slideShow
      }
    }
</script>

<style scoped>
  .index-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .index-left {
    float: left;
    width: 300px;
    text-align: left;
  }
  .index-right {
    float: left;
    width: 900px;
  }
  .index-left-block {
    margin: 15px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
  }
  .index-left-block .hr {
    margin-bottom: 20px;
  }
  .index-left-block h2 {
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
  }
  .index-left-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
  }
  .index-left-block ul {
    padding: 10px 15px;
  }
  .index-left-block li {
    padding: 5px;
  }
  .index-board-list {
    overflow: hidden;
  }
  .index-board-item {
    float: left;
    width: 390px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .index-board-item-inner {
    min-height: 125px;
    padding-left: 120px;
  }
  .index-board-car .index-board-item-inner{
    background: url(../assets/images/1.png) no-repeat;
  }
  .index-board-loud .index-board-item-inner{
    background: url(../assets/images/2.png) no-repeat;
  }
  .index-board-earth .index-board-item-inner{
    background: url(../assets/images/3.png) no-repeat;
  }
  .index-board-hill .index-board-item-inner{
    background: url(../assets/images/4.png) no-repeat;
  }
  .index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }
  .line-last {
    margin-right: 0;
  }
  .index-board-button {
    margin-top: 20px;
  }
  .lastest-news {
    min-height: 512px;
  }
  .hot-tag {
    background: red;
    color: #fff;
  }
  .new-item {
    display: inline-block;
    width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
