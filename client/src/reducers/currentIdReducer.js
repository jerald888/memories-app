
export const currentIdReducer = (currentId = null, action) => { /* 18.1.3*/
  switch (action.type) { /* 18.1.3*/
    case "CURRENT_ID": /* 18.1.3*/

      return action.payload

    default:
      return currentId /* 18.1.3*/
  }

  
}