
import  { bagActions } from "../store/BagSlice"
import { useAppDispatch } from "../store/hooks";
import type { Item } from "../types/item";

interface bagItemsProps{
    item: Item;
}

const BagItem = ({item}: bagItemsProps) => {
const dispatch = useAppDispatch()

const handleremoveitem = () => {
 dispatch(bagActions.removeFromBag(item.id))
}
    return (
        <div className="relative mb-3 flex gap-3 rounded border border-gray-200 bg-white p-3 text-sm text-[#282c3f] sm:gap-4">
    <div className="h-28 w-24 shrink-0 bg-[#fff2df] sm:h-36 sm:w-28">
      <img className="h-full w-full object-contain" src={item.image}/>
    </div>

    <div className="min-w-0 flex-1 pr-6">
      <div className="truncate font-bold">{item.company}</div>
      <div className="line-clamp-2 text-[#535766]">{item.item_name}</div>

      <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
        <span className="font-bold">Rs {item.current_price}</span>
        <span className="text-xs text-gray-400 line-through">Rs {item.original_price}</span>
        <span className="text-xs font-medium text-orange-500">{item.discount_percentage}% OFF</span>
      </div>

      <div className="mt-2 text-xs sm:text-sm">
        <span className="mr-1 font-bold">{item.return_period} days</span> 
        return available
      </div>

      <div className="mt-1 text-xs">
        Delivery by {" "}
        <span className="font-bold text-[#03a685]">{item.delivery_date}</span>
      </div>
    </div>

    <div className="absolute right-3 top-2 cursor-pointer text-lg leading-none text-gray-500 hover:text-red-500" onClick={handleremoveitem}>X</div>
  </div>
    )
}

export default BagItem;