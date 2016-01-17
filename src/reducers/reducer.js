const initialState = ['enchiridion_8'];

export default function quotes(state = initialState, action) {
  switch(action.type) {
    case 'ADD_FAVORITE':
      if (state.indexOf(action.id) > -1) {
        return state;
      } else {
        return [ ...state, action.id ];
      }
    case 'DELETE_FAVORITE':
      return state.filter(quote => quote !== action.id);
    default:
      return state;
  }
}
