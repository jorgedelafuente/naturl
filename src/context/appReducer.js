export default (state, action) => {
  switch(action.type) {

    case 'add_singleEvent':
      return {
        ...state,
        items: [action.payload, ...state.items] 
      }
    default:
      return state;
  }
}