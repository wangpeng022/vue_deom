export default {
  addT({
    commit
  }) {
    commit("ADD_T")
  },
  deleteT({
    commit
  }) {
    commit("DELETE_T")
  },
  select({commit},item) {
    commit("select",item)
  },
  favour({commit}){
    commit("favour")
  }
}
