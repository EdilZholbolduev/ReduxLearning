import React from "react";
import { useDispatch, useSelector } from "react-redux";



function MathPage(){
   const dispatch = useDispatch()
   const {input1, input2}= useSelector((state) =>state.yourReducer)


   return(
      <div>
         <h1></h1>
         <input type="number" value={input1} />
         <input type="number" value={input2}/>
         <button>+</button>
         <button>-</button>
         <button>*</button>
         <button>/</button>
      </div>
   )
}
export default MathPage;