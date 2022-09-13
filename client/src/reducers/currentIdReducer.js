import { CURRENT_ID } from "../constants/actionTypes" /* 22 */

export const currentIdReducer = (currentId = null, action) => { /* 18.1.3*/
  switch (action.type) { /* 18.1.3*/
    case CURRENT_ID: /* 18.1.3*/ /* 22 replaced action type string with variables from constants */

      return action.payload

    default:
      return currentId /* 18.1.3*/
  }

  
}