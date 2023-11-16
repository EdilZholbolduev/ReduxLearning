import { types } from "./types";
export function changeTitleAction(){
   return{
      type: types.MAIN_TITLE
   }
}
export function withParamsAction(title){
   return{
      type:types.WITH_PARAMS,
      payload:title
   }  
}
