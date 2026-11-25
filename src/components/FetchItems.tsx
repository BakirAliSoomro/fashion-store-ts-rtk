import { useEffect } from "react";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/FetchStatusSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import type { Item } from "../types/item";

const FetchItems = () => {

const fetchDone = useAppSelector((store)=> store.fetchStatus.fetchDone);    
const dispatch = useAppDispatch()



 useEffect(()=>{
    if(fetchDone) return;
       
    const controller = new AbortController();
    dispatch(fetchStatusActions.markFetchingStarting());

    fetch("http://localhost:5000/items", {signal: controller.signal})
    .then((res)=> res.json()) // response ke data ko json me kardiya 
    .then((items: Item[])=>{
     dispatch(itemsActions.addInitialItems(items))
     dispatch(fetchStatusActions.markFetchDone())
     dispatch(fetchStatusActions.markFetchingFinished())   
    })
    .catch((err)=> {
      if(err.name === "AbortError"){
         console.log("Fetch cancelled")
      }else{
         console.error("Fetch error", err);
         dispatch(fetchStatusActions.markFetchingFinished())
      }
    });

    return () => controller.abort();
   }, [fetchDone, dispatch])
     
    return null;

};


export default FetchItems;