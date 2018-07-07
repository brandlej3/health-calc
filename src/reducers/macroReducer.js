import * as actionType from './../actions/ActionType';
const initialState = {}
const macroReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionType.ADD_MACRO_OBJ:
        return Object.assign(state, action.payload);
      default:
        return state
    }
  }
  
export default macroReducer;