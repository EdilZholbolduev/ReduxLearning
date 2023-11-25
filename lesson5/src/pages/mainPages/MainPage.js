import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTitle, changeTitleWithParams } from "../../store/titleSlice";


function MainPage(){

   const dispatch = useDispatch()
   const {title} = useSelector(state=>state.titleReducer)


   const withParams = () =>{
      dispatch(changeTitleWithParams('title params'))
   }

   
   return(
      <div>
         <h1>{title}</h1>
         {/* <button onClick={()=>dispatch(changeTitle())}>change titile</button>
         <button onClick={withParams}>with params</button> */}

         <input type="text"/>
         <button>clear</button>
         <button>add</button>
         <button>delete title</button>
      </div>
   )
}
export default  MainPage;