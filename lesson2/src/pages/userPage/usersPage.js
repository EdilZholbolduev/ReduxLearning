import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, changeInputAction } from "../../redux/actions";
import User from "../../components/user";

function UsersPage(){

   const {inputValue, users} = useSelector(state => state.usersReducer)
   const dispatch = useDispatch()

   const changeInput = (event) =>{
      dispatch(changeInputAction(event.target.value))
   }

   const addUser =()=>{
      dispatch(addUserAction(inputValue))
   }

   return (
      <div>
         <h1>{inputValue}</h1>
         <input type="text" placeholder="name" onChange={changeInput}/>
         <button onClick={addUser}>add</button>
         <button> delete all</button>

         {users.map((users, idx)=> <User key={idx} userName={users}/>)}
      </div>
   )
}
export default UsersPage