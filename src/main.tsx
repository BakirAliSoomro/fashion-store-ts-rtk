import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css';
import App from './routes/App';
import Bag from './routes/Bag';
import Home from './routes/Home';
import eccomstore from './store/index.ts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path: "/", element: <Home/>},
      {path: "/bag", element: <Bag/>},
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={eccomstore}>
     <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
