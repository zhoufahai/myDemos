<template>
    <div class="market">这是市场
    <router-link to="/m-first" tag="span">跳转到first页面</router-link>
    <div>{{msg}}</div>
    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
        return {
          msg: '123'
        }
      },
      /*beforeRouteEnter(to, from, next){
          next(vm => {
            vm.msg = '456'
          })
      },*/
     /* beforeRouteUpdate(to, from, next){

      },*/
     /* beforeRouteLeave(to, from, next){
          alert('拜拜')
          next()
      }*/
    }
</script>

<style lang="scss" scoped>
  .market{
    font-size: 0.5rem;
  }
</style>
