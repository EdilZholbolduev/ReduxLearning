const initialState = {
   title: 'old title',
   aboutTitle: 'old about title',
   contactTitle: '',
   count: 0
}


export default function reducer (state = initialState, action){


   if(action.type === 'Change_Title') {
      return {...state,title: 'new title'}
   } 
   else if(action.type === 'CHANGE_ABOUT_TITLE'){
      return{...state, aboutTitle: 'New about title'}
   }
   else if(action.type === 'WITH_PARAMS'){
      return{...state, contactTitle: action.payload}
   }
   else if(action.type === 'FROM_INPUT'){
      return{...state, contactTitle: action.payload}
   }
   else if(action.type === 'PLUS'){
      return{...state, count: state.count +1}
   }
   else if(action.type === 'MINUS'){
      return{...state, count: state.count -1}
   }

   return state
}