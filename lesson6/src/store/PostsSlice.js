import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
   'getPosts',
   async function (info, {dispatch, rejectWithValue}){
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await response.json()
      dispatch(postsInfo(posts))

   }
)

const postsSlice = createSlice({
   name: 'postsSlice',
   initialState: {
      posts:[]
   },
   reducers: {
      postsInfo: (state, action)=>{
         state.posts = action.payload
      }
   }
})


export const {postsInfo} = postsSlice.actions

export default postsSlice.reducer