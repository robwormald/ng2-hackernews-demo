export function stories(state = {}, action){
  switch (action.type) {
    case 'UPDATE_TOP_STORIES':
      return Object.assign({}, state, {top: action.payload });
    case 'UPDATE_BEST_STORIES':
      return Object.assign({}, state, {best: action.payload });
    case 'UPDATE_NEW_STORIES':
      return Object.assign({}, state, {new: action.payload })
  }
  return state;
}
export function users(){}
export function items(){}
