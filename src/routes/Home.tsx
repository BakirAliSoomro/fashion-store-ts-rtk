
import HomeItems from "../components/HomeItems"
import { useAppSelector } from "../store/hooks";

const Home = () => {
        
const items = useAppSelector((store) => store.items)



  return ( 
  <main>
        <div className="mx-auto mt-5 grid max-w-7xl grid-cols-1 justify-items-center gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((item) => (
            <HomeItems key={item.id} item={item}/>
            ))}
        </div>
    </main>
    )
}

export default Home;