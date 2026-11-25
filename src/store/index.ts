import {configureStore} from "@reduxjs/toolkit"
import itemsSlice from "./itemsSlice"
import fetchStatusSlice from "./FetchStatusSlice"
import BagSlice from "./BagSlice"
const eccomstore = configureStore({
 reducer:{
    items: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag:  BagSlice.reducer
 }   
})

export type RootState = ReturnType<typeof eccomstore.getState>
export type AppDispatch = typeof eccomstore.dispatch;

eccomstore.subscribe(()=> {
   try {
      localStorage.setItem("bag", JSON.stringify(eccomstore.getState().bag))
   }catch {
      
   }
})

export default eccomstore;
