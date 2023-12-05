import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/PostsSlice";
import Post from "../../components/Post";

function PostPage(){

   const {posts} = useSelector(state => state.postsReducer)
   const dispatch = useDispatch()

   const getPostsFunc = () =>{
      dispatch(getPosts())
   }

   console.log(posts)

   return(
      <div>
         <button onClick={getPostsFunc}>get posts</button>
         
         {posts.map(post => <Post key={post.id} postInfo={post}/>)}
      </div>
   )
}

export default PostPage;