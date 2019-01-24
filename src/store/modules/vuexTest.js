import VuexTestHandler from '../../handler/vuexTestHandler'
const vuexTestHandler = new VuexTestHandler()

const vueTest = {
  state: {
    testMsg: null,
    childText: null
  },
  mutations: {
    setTestMsg: (state, str) => {
      state.testMsg = str
    },
    setChildText: (state, str) => {
      state.childText = str
    }
  },
  getters: {
    testMsg: state => {
      return state.testMsg
    },
    childText: state => {
      return state.childText
    },
    getfunctionOne: state => (val) => {
      return vuexTestHandler.getfunctionOne(val)
    }
  }
}

export default vueTest
