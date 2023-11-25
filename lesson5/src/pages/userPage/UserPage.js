import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, changeInput } from "../../store/userSlice";
import User from "../components/User";

function UserPage(){

   const dispatch = useDispatch()

   const {inputValue, users } = useSelector(state => state.usersReducer)

   const changeInputFunc = (event)=>{
      dispatch(changeInput(event.target.value))
   }


   const addUserFunc = ()=>{
      dispatch(addUser(inputValue))
   }



   return(
      <>
            <input value={inputValue} type="text" onChange={changeInputFunc}/>
            <button onClick={addUserFunc}>add user</button>
            
            <button>clear</button>
            <button>delete all</button>

            {users.map(user=><User name={user}/>)}
      </>
   )
}
export default UserPage;