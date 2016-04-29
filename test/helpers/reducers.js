const initialState = {
  entries: { hidden: [], rendered: [], current: {} },
  entryFetchCounter: { start: 0, limit: 30}
}
export function wrapReducer(spyOnMethods) {
  let eSpy = arguments[0]
  return function reducers(state = initialState.entries, action) {
           switch(action.type) {
             case 'RECEIVED_ENTRIES':
               spyOnMethods(eSpy)
               return {
                 hidden: state.hidden,
                 rendered: state.rendered,
                 current: state.current
               }
             case 'REHYDRATE_ENTRIES':
               return []
             case 'MOVE_CURRENT_ENTRY':
               return []
             case 'SET_CURRENT_ENTRY':
               return []
             default:
               return state;
           }
         }
}
