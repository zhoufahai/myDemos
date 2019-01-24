<template>
  <div>
    <div class="tabs">
      <ul>
        <router-link to="/tabs/home" tag="li" exact>
          <div>首页</div>
        </router-link>
        <router-link to="/tabs/market" tag="li">
          <div>市场</div>
        </router-link>
        <router-link to="/tabs/me" tag="li">
          <div>我的</div>
        </router-link>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
  .tabs {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 0 2px 4px #000;
    width: 100%;
    & > ul, & > ul > li {
      margin: 0;
      padding: 0;
    }
    ul {
      display: table;
      width: 100%;
      & > li {
        text-align: center;
        font-size: 16px;
        display: table-cell;
        padding: 8px 12px;
        cursor: pointer;
        color: #999999;

        &.router-link-active{
          color: #285fd0;
        }
        & > div {
          /*font-size: 14px;*/
        }
      }
    }
  }
</style>
