import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ContactPages(){

   const title = useSelector(state=>state.contactTitle)
   const dispatch = useDispatch()
   const [input, setInput]=useState('')

   const withParams =()=>{
      dispatch({
         type: 'WITH_PARAMS',
         payload: 'I like programming in Redux'
      })
   }

   const addInput =()=>{
      dispatch({
         type: 'FROM_INPUT',
         payload: input
      })
   }
   return(
      <div>
         <h1>{title}</h1>
         <button onClick={withParams}>change title with params</button>
         <h1>------------------</h1>
         <input onChange={(event)=> setInput(event.target.value)} type="text" />
         <button onClick={addInput}>add</button>
      </div>
   )
}
export default ContactPages;