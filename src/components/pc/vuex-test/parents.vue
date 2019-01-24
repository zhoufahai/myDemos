<template>
  <div class="parents">
    <h3>这是父组件</h3>
    <button @click="clickHandler">修改自己的文本</button>
    <button @click="clickHandler1">修改子组件的文本啊啊啊</button>
    <h3>Text:{{testMsg}}</h3>
    <children></children>
    <div>{{num}}</div>
    <div>调用vuex的方法:{{getfunctionOne(10)}}</div>
    <el-button type="danger" size="lager"  @click="add">addddd</el-button>
    <!--<h3>{{ getfunctionOne(10) }}</h3>-->
  </div>
</template>

<script>
  import store from '../../../store'
  import {mapGetters} from 'vuex'
  import Children from "./children";
  import VuexTesthandler from '../../../handler/vuexTestHandler'
  const vuexTesthandler = new VuexTesthandler()
    export default {
        name: "parents",
      data () {
          return{
            msg: '',
            num: 0
          }
      },
      components: {Children},
      computed: {
        ...mapGetters(['testMsg','childText','getfunctionOne'])
      },
      methods: {
        clickHandler () {
          vuexTesthandler.changeMessages()
          // store.commit('setTestMsg', '我改变了自己的文本')
          // this.msg = this.testMsg
        },
        clickHandler1() {
          store.commit('setChildText','子组件已经被我修改了')
        },
        add () {
          let ss = Math.random().toFixed(2)*100
          // this.num = this.getfunctionOne(10)
          this.num = this.$store.getters.getfunctionOne(ss)
        }
      },

      created(){
          // setInterval(this.clickHandler1,2000)
        // vuexTesthandler.changeMessages()
        // this.msg = this.testMsg
        // this.msg = this.$store.state.testMsg
      }
    }
</script>

<style scoped>

</style>
