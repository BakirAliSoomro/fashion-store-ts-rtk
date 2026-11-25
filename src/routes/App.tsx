import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet} from "react-router-dom"
import FetchItems from "../components/FetchItems"
import LoadingSpinner from "../components/LoadingSpinner"
import { useAppSelector } from "../store/hooks"


function App() {

  const fetchStatus = useAppSelector((store)=> store.fetchStatus)      

  return (
    <>
    <div className="min-h-screen bg-indigo-50 text-slate-800">
      <Header/>
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner/> : <Outlet/>}
     <Footer/>
    </div>
    
    </>
      
  )
}

export default App
