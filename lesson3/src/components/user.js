import React from "react";


function User({userInfo}){
   return(
      <ul>
         <li>user: {userInfo.name}</li>
         <li>email: {userInfo.email}</li>


         <button>get mode</button>
      </ul>
   )
}
export default User;