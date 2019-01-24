<template>
    <div>
      <h3 id="message">{{ msg }}</h3>
      <h3 class="hh">{{ msg }}</h3>
      <button @click="msg = '你好'">改变msg</button>
      <router-link to="/pcSecond">走你</router-link>
      <button @click="go(list)">走你</button>
    </div>
</template>

<script>
    export default {
        name: "lifeCycle",
      data () {
          return {
            msg: 'hello',
            list:[
              {name: 'tom', age: 15},
              {name: 'jack', age: 20}
            ]
          }
      },
      methods: {
          show () {
            console.log('执行了show方法')
          },
        go(val){
            this.$router.push({
              path: '/pcSecond',
              query:{
                msg: val
              }
            })
          console.log(this.$route)
        }
        /*go(val){
          this.$router.push({
            name: 'SecondPage',
            params:{
              msg: val
            },
            query:{
              id:15
            }
          })
          console.log(this.$route)
        }*/
      },
      beforeCreate () { // 实例被创建之前会执行它
        console.log('生命周期页面执行了beforeCreated')
        // console.log(this.msg)
        // this.show()
        // 注意：在 beforeCreated 生命周期函数执行的时候，data和methods中的数据都还没有被初始化
      },
      created () {
        console.log('生命周期页面执行了created')
        // console.log(this.msg)
        // this.show()
        // 在created生命周期中，data和methods中的数据都已经被初始化好了
        // 如果想操作data中的数据，或者想调用methods中的方法，最早只能在created中操作
      },
      beforeMount () { // 此时模板已经编译好了，但是还没有挂载到页面中,在beforeMount执行的时候，页面中的元素，还没有被真正替换过来，只是之前写的一些模板字符串
        console.log('生命周期页面执行了beforeMount')
        // console.log(this.msg)
        // console.log(this.$el)
      },
      mounted () {// 此时，内存中的模板已经真实的挂载到页面中，用户可以看到渲染好的页面了
        console.log('生命周期页面执行了mounted')
        // console.log('真实DOM中的数据：'+document.getElementById('message').innerHTML)
        // console.log(this.msg)
        // console.log(this.$el)
        // 注意：mounted是实例创建期间的最后一个生命周期函数，当执行完mounted就表示，
        // 实例已经被完全创建好了，此时，如果没有其他操作的话，这个实例就在内存中不会变化
      },
      beforeUpdate () {
        console.log('生命周期页面执行了beforeUpdate')
        // console.log('真实DOM中的数据：'+document.getElementById('message').innerHTML)
        // console.log(this.msg)
        // console.log(this.$el.innerHTML)
      },
      updated () {
        console.log('生命周期页面执行了updated')
        // console.log('真实DOM中的数据：'+document.getElementById('message').innerHTML)
        // console.log(this.msg)
        // console.log(this.$el.innerHTML)
      },
      beforeDestroy () {
        console.log('生命周期页面执行了beforeDestroy')
        // console.log(this.msg)
        // console.log(this.$el.innerHTML)
      },
      destroyed () {
        console.log('生命周期页面执行了destroyed')
        // console.log(this.msg)
        // console.log(this.$el.innerHTML)
      }
    }
</script>

<style scoped>

</style>
