import {createSlice} from "@reduxjs/toolkit"

const fetchStatusSlice = createSlice({
    name: "fetchStatus",
    initialState: {
     fetchDone: false, //kiya data fetch download ho chuka hai?
     currentlyFetching: false,  //kiya abhi is waqt fetch chalrha hai
    },
    reducers: {
      markFetchDone: (state) => {
         state.fetchDone = true;
      },
      markFetchingStarting: (state) => {
        state.currentlyFetching = true;
      },
      markFetchingFinished: (state) => {
        state.currentlyFetching = false;
      }  
    }
})

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;