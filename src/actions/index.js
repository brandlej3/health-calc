import * as actionType from './ActionType';

export const addMacroObj = (macroObject) => ({
  type: actionType.ADD_MACRO_OBJ,
  payload: macroObject
});