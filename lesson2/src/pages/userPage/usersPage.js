import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, changeInputAction, deleteAllAction } from "../../redux/actions";
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
   const deleteAll =()=>{
      dispatch(deleteAllAction())
   }

   return (
      <div>
         <h1>{inputValue}</h1>
         <input type="text" placeholder="name" value={inputValue} onChange={changeInput}/>
         <button onClick={addUser}>add</button>
         <button onClick={deleteAll}> delete all</button>

         {users.map((users, idx)=> <User key={idx} userName={users}/>)}
      </div>
   )
}
export default UsersPage