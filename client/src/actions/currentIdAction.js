import { CURRENT_ID } from "../constants/actionTypes" /* 22 */

export const currentIdAction = (currentId) => { /* 18.1.2 */
  return {
    type: CURRENT_ID, /* 18.1.2 */ /* 22 replaced string types with variables from constants folder*/
    payload: currentId /* 18.1.2 */
  }
}