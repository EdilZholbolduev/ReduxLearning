import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { changeTitleAction, withParamsAction } from "../redux/actions";


function MainPage() {

   // const title = useSelector(state=>state.titleReducer.title) 
   const {title} = useSelector(state => state.titleReducer)
   const dispatch = useDispatch()

   const changeTitle=()=>{
      dispatch(changeTitleAction())
   }

   const changeTitleWithParams=()=>{
      dispatch(withParamsAction('Hello everybody'))
   }
   
   return(
      <div> 
         <h1>{title}</h1>
         <button onClick={changeTitle}>change title</button>
         <button onClick={changeTitleWithParams}>with params</button>
      </div>
   )
}
export default MainPage;