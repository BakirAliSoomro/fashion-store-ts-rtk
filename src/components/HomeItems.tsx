
import { bagActions } from "../store/BagSlice";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
import type { Item } from "../types/item";
import { useAppDispatch, useAppSelector } from "../store/hooks";

interface HomeItemsProps{
    item: Item;
}

 const HomeItems = ({item}: HomeItemsProps) => {

 const bagItems = useAppSelector((store) => store.bag)  
 const dispatch = useAppDispatch()
 const elementFound = bagItems.indexOf(item.id) >= 0;
 
 

 const handleAddToBag = () => {
        dispatch(bagActions.addToBag(item.id))
    }

    const handleRemove = () => {
        dispatch(bagActions.removeFromBag(item.id))
    }

    return (
     <div className="flex h-full w-full flex-col  overflow-hidden rounded-xl border border-gray-200 bg-white p-2 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-3">
      <img className={`h-40 w-full object-contain sm:h-48 md:h-56  ${item.company === "Levi's" ? "mt-4" : ""}`} src={item.image} alt="item image"/>
      <div className="text-xs text-gray-600">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="mb-1 mt-4 truncate text-base font-bold leading-tight text-gray-600">{item.company}</div>
      <div className="line-clamp-2 text-xs text-gray-500 sm:text-sm">{item.item_name}</div>
      <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="text-sm font-bold text-gray-600">Rs {item.current_price}</span>
          <span className=" text-xs text-gray-400 line-through">Rs {item.original_price}</span>
          <span className="text-xs font-medium text-orange-500">({item.discount_percentage}% OFF)</span>
      </div>
      <div className="mt-auto pt-2">
       {elementFound ? <button className="inline-flex rounded-2xl w-full items-center justify-center gap-2 bg-red-500 px-3 py-2 text-xs font-semibold  text-white transition duration-200 hover:bg-red-700 sm:py-3 sm:text-sm" onClick={() => handleRemove()}>
        <AiFillDelete /> 
        Remove
        </button> : 
        <button className="inline-flex w-full items-center justify-center gap-2 rounded border-none bg-green-600 px-3 py-2 text-xs font-semibold text-white transition duration-200 hover:bg-green-700 focus:outline-none focus:ring-2  focus:ring-green-500 focus:ring-offset-2 sm:py-3 sm:text-sm" onClick={() => handleAddToBag()}>
        <IoMdAddCircleOutline /> 
        Add to bag
        </button>  
        } 
        </div>
    </div>
    )
}

export default HomeItems;