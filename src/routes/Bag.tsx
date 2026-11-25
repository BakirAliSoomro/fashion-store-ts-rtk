import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { useAppSelector } from "../store/hooks";


const Bag = () => {

const bagitems = useAppSelector(state => state.bag)
const items = useAppSelector(state => state.items)
const finalItems = items.filter(item => {
const itemIndex = bagitems.indexOf(item.id)
return itemIndex >= 0;
})
    return (
    <main className="mx-auto max-w-6xl px-3 py-4 sm:px-6 lg:py-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="flex-1">
          {finalItems.length === 0 && (
            <p className="py-10 text-center text-gray-500">Your bag is empty</p>
          )}
          {finalItems.map(item => (
            <BagItem item={item} key={item.id}/>
          ))}
         
        </div>
        <div className="w-full lg:sticky lg:top-24 lg:w-80">
        <BagSummary/>
        </div>
      </div>
    </main>
 
    )
}

export default Bag;