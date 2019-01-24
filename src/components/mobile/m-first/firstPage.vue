<template>
    <div class="m-first">
      这是手机页面
      <div class="item1">这是手机页面</div>
      <div class="item2">132</div>
      <div class="item3">132</div>
      <mt-button type="primary" @click="goBack">手机版</mt-button>
    </div>
</template>

<script>
    export default {
        name: "firstPage",
      data () {
          return {
            name: 'hellooooooo'
          }
      },
      methods: {
        goBack() {
          this.$router.go(-1)
        }
      },
      beforeRouteEnter(to, from, next){
          next(vm => {
            console.log(22222222)
            console.log(vm)
            console.log(vm.name)
          })
      }
    }
</script>

<style lang="scss" scoped>
/*@import "../../../style/mobile/m-first/mfirst";*/
</style>
