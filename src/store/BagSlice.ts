import {createSlice, type PayloadAction} from "@reduxjs/toolkit"


const loadbag = (): string[] => {
  try {
    const saved = localStorage.getItem("bag");
    if(!saved) return []
    const parsed: unknown = JSON.parse(saved);
    return Array.isArray(parsed)
    ? parsed.filter((id): id is string => typeof id === "string")
    : [];
  }catch {
    return []
  }
}

const BagSlice = createSlice({
    name: "bag",
    initialState: loadbag, 
    reducers: {
      addToBag: (state, action: PayloadAction<string>) => {
        state.push(action.payload)
      },
      removeFromBag: (state, action: PayloadAction<string>) => {
       return state.filter(itemId =>  itemId !== action.payload)
      }  
    }
})

export const bagActions = BagSlice.actions;

export default BagSlice;