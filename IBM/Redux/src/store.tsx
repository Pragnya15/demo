import {   configureStore } from '@reduxjs/toolkit'
import MyReducer from './MyReducer';
 
 

 const store = configureStore({
  reducer: {
    todos: MyReducer,
  },
});
export default store;
