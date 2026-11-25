import { useAppSelector } from "../store/hooks";


const CONVENIENCE_FEES = 99;

const formatPrice = (amount: number) => `RS ${amount.toLocaleString("en-PK")}`

const BagSummary = () => {
    const  bagItemIds = useAppSelector(state => state.bag)
    const items = useAppSelector(state => state.items)
    const finalItems = items.filter((item)  =>  bagItemIds.indexOf(item.id) >= 0)

   let totalItem = finalItems.length;
   let totalOriginal = 0;
   let totalDiscount = 0;  


    finalItems.forEach(bagItem => {
    totalOriginal += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
   })

  const fee = totalItem > 0 ? CONVENIENCE_FEES : 0;
  const finalPayment = totalOriginal -totalDiscount + fee;

   


      return (
     <div className="rounded border border-grat-200 bg-white p-4 text-sm text-[#282c3f]">
     <div 
     className="mb-4 text-xs font-bold uppercase text-[#535766]">
     PRICE DETAILS ({totalItem === 1 ? "Item" : "Items"})
     </div>

     <div className="mb-3 flex justify-between">
     <span className="price-item-tag">Original Price</span>
     <span className="">{formatPrice(totalOriginal)}</span>
     </div>

     <div className="mb-3 flex justify-between">
     <span>Discount on Original_price</span>
     <span className="text-[#03a685]">-{formatPrice(totalDiscount)}</span>
     </div>

     <div className="mb-3 flex justify-between">
      <span>Convenience Fee</span>
      <span className="price-item-value">{formatPrice(fee)}</span>
    </div>

    <hr/>
    <div className="mt-4 flex justify-between border-t border-gray-200 pt-4 text-[15px] font-bold text-[#3e4152]">
      <span>Total Amount</span>
      <span>{formatPrice(finalPayment)}</span>
    </div>
  
  <button disabled={totalItem === 0} className="mt-4 w-full cursor-pointer rounded-sm bg-[#ff3f6c] px-4 py-2.5 text-sm font-semibold tracking-wide text-white transition hover:bg-[#e8315d] disabled:cursor-not-allowed disabled:opacity-50">
   PLACE ORDER
  </button>
  </div>
    )
}

export default BagSummary;