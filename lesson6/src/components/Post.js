import React from "react";

function Post({ postInfo }) {
   return (
      <div>
         <h1>{postInfo.title}</h1>
         <button>More Information</button>
         <p>--------------------</p>
      </div>
   )
}
export default Post;