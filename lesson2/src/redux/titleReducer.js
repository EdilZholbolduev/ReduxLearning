import { types } from "./types"

const initialState = {
   title: 'old title',
}



export default function titleReducer (state = initialState, action){
   // if(action.type === types.MAIN_TITLE){
   //    return {title: 'new title '}
   // }
   // else if(action.type === types.WITH_PARAMS){
   //    return {title: action.payload}
   // }
   switch (action.type){
      case types.MAIN_TITLE:
         return {...state, title: 'new title'}
      case types.WITH_PARAMS:
         return {...state, title: action.payload}
      default: return state
   }
}