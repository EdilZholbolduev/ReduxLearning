import React from "react";


export function addUserAction(user){
   return async function (dispatch){

      const options = {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(user)
      }
      const response = await fetch('https://jsonplaceholder.typicode.com', options)
   }
}