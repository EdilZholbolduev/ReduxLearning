import React from "react";
import { useDispatch, useSelector } from "react-redux";

function MainPage() {
   const title = useSelector(state =>state.title)

   const dispatch = useDispatch()

   const changeTitle = () =>{
      dispatch({
         type: 'Change_Title'
      })
   }

   return(
      <div>
         <h1>{title}</h1>
         <button onClick={changeTitle}>change title</button>
      </div>
   )
}

export default MainPage