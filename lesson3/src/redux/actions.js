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



export function fetchUsersAction(){
   return async function (dispatch){
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      dispatch (getUsersAction(data))
   }
}