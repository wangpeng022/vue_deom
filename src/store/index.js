import Vue from "vue"
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  username: '',
  num: 0,
  notes: [{
      text: '新建文本',
      favorite: false
    }],
  activeNote: {},
  curIndex:'',
}

const getters = {

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
