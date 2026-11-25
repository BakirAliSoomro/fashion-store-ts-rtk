import {createSlice, type PayloadAction} from "@reduxjs/toolkit"
import type { Item } from "../types/item";
// import { DEFAULT_ITEMS } from "../data/items";

const itemsSlice = createSlice({
    name: "items",
    initialState: [] as Item[],
    reducers: {
      addInitialItems: (_state, action: PayloadAction<Item[]>) => {
        return action.payload;
      }  
    }
})

export const itemsActions = itemsSlice.actions;

export default itemsSlice;