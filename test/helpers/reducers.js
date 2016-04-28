export function wrapReducer(spyOnMethods) {
  let eSpy = arguments[0]
  return function reducers(state = [], action) {
           switch(action.type) {
             case 'RECEIVED_ENTRIES':
               return []
             case 'REHYDRATE_ENTRIES':
               return []
             case 'MOVE_CURRENT_ENTRY':
               spyOnMethods(eSpy)
               return []
             case 'SET_CURRENT_ENTRY':
               spyOnMethods(eSpy)
               return []
             default:
               return state;
           }
         }
}
