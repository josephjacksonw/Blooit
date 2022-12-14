import * as c from './../actions/ActionTypes';

//const action1 =

const reducer = (state = {}, action) => {
  const { title, author, text, id, upvotes, downvotes, creationDate } = action;
  switch (action.type) {
  case c.ADD_POST:
    return Object.assign({}, state, {
      [id]: {
        title: title,
        author: author,
        text: text,
        id: id,
        upvotes: upvotes,
        downvotes: downvotes,
        creationDate: new Date().toUTCString() //if you want a dateTime on creation, do it here
      }
    });
  case c.DELETE_POST:
    let newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};

export default reducer;