<template>
    <div>
      <h1 class="h1">{{ $t('message.100000')}}</h1>
      <h2 class="h2">{{ $t('message.100001')}}</h2>
      <h3 class="h3">{{ $t('message.100002')}}</h3>
      <h3 class="h3">{{ $t('message.100003')}}</h3>
      <div>{{item}}</div>
      <div>{{this.$route.params.id}}</div>
    </div>
</template>

<script>
    export default {
        name: "pcSecond",
      data(){
          return{
            item: ''
          }
      },
      beforeCreate () { // 实例被创建之前会执行它
        console.log('Second页面执行了beforeCreated')
        // 注意：在 beforeCreated 生命周期函数执行的时候，data和methods中的数据都还没有被初始化
      },
      created () {
        console.log('Second页面执行了created')
        // 在created生命周期中，data和methods中的数据都已经被初始化好了
        // 如果想操作data中的数据，或者想调用methods中的方法，最早只能在created中操作
      },
      beforeMount () { // 此时模板已经编译好了，但是还没有挂载到页面中
        console.log('Second页面执行了beforeMount')
      },
      mounted () {
        console.log('Second页面执行了mounted')
      },
      beforeUpdate () {
        console.log('Second页面执行了beforeUpdate')
      },
      updated () {
        console.log('Second页面执行了updated')
      },
      beforeDestroy () {
        console.log('Second页面执行了beforeDestroy')
      },
      destroyed () {
        console.log('Second页面执行了destroyed')
      },
      created(){
          this.item = this.$route.query.msg
          // this.item = this.$route.params.msg
      }
    }
</script>

<style scoped>

</style>
