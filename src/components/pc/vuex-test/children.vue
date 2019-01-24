<template>
    <div class="children">
      <h3>这是子组件</h3>
      <h4>Text:{{childText}}</h4>
      <button @click="clickHandler">修改父组件的文本</button>
      <button @click="clickHandler1">修改自己的文本啊啊啊</button>
    </div>
</template>

<script>
  import store from '../../../store'
  import VuexTesthandler from '../../../handler/vuexTestHandler'
  const vuexTesthandler = new VuexTesthandler()
  import {mapGetters} from 'vuex'
    export default {
        name: "children",
      data () {
        return {
          num: ''
        }
      },
      computed: {
        ...mapGetters(['childText']),

      },
      methods: {
        clickHandler () {
          store.commit('setTestMsg','我已经修改了父组件的文本')
        },
        clickHandler1 () {
          store.commit('setChildText', '子组件被我自己修改了')
        }
      },
      created () {
        // vuexTesthandler.changeMessages()
      },
    }
</script>

<style scoped>

</style>
