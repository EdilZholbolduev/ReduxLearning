import React from "react";
import { useDispatch, useSelector } from "react-redux";

function CounterPage(){
   const dispatch = useDispatch( )
   const count = useSelector(state =>state.count)

   const plusCounter =()=>{
      dispatch({
         type: 'PLUS'
      })
   }
   const minusCounter =()=>{
      dispatch({
         type: 'MINUS'
      })
   }
   return(
      <div>
         <h1>{count}</h1>
         <button onClick={plusCounter}>+</button>
         <button onClick={minusCounter}>-</button>
      </div>
   )
}
export default CounterPage;