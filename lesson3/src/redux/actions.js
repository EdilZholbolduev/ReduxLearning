import { types } from "./types";

export function changeTitileAction(){
   return{
      type: types.CHANGE_TITLE
   }
}

export function asyncFunctionAction(){
   return function (dispatch){
      setTimeout(()=>{
         alert('geeks!')
      }, 2000)
   }
}

export function getUsersAction(users){
   return{
      type: types.USERS,
      payload: users
   }
}



