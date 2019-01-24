import store from '../store/index'

class vuexTestHandler {
  changeMessages () {
    store.commit('setTestMsg', '哈哈哈哈哈，我变了')
    store.commit('setChildText', '子组件也变了，基金会的')
  }
  getfunctionOne (val) {
    let sum = val + 10
    return sum
  }
}

export default vuexTestHandler
