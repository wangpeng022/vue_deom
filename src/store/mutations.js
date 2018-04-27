export default {
  ADD_T(state) {
    const newNote = {
      text: '新建文本'+state.num,
      favorite: false
    }
    state.notes.push(newNote);
    state.activeNote = newNote;
    state.num++;
  },
  DELETE_T(state,index) {
    state.notes.splice(index,1);
  },
}
