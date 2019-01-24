<template>
    <div class="home">
      这是主页
      <button class="btn" @click="go">跳转到first页面</button>
    </div>
</template>

<script>
    export default {
        name: "index",
      methods: {
          go () {
            this.$router.push({path: '/m-first'})
            // this.$router.push({name: 'FirstPage'})
          }
      },
      beforeRouteLeave (to, from, next) {
          next(vm => {
            console.log(1111111)
            console.log(vm)
          })
      }
    }
</script>

<style scoped>

</style>
