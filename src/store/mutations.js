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
  DELETE_T(state) {
    var index = state.notes.indexOf(state.activeNote)
    if (index>=0) {
    state.notes.splice(index,1);
    state.activeNote =index>0? state.notes[index-1]: index==0? state.notes[0]||{}:{};
    }
  },
  select(state,item){
    // console.log(state,item);
    state.activeNote = item;
  },
  favour(state){
    state.activeNote.favorite = !state.activeNote.favorite;
  }
}
