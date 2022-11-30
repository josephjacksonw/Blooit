const reducer = (state = {}, action) => {
  const { title, author, text, id } = action;
  switch (action.type) {
  case 'ADD_POST':
    return Object.assign({}, state, {
      [id]: {
        title: title,
        author: author,
        text: text,
        id: id
      }
    });
  case 'DELETE_POST':
    let newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};

export default reducer;