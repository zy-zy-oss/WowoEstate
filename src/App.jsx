
import HomePage from './routes/homePage/homePage'
import ListPage from './routes/listPage/listPage'
import Layout from './routes/layout/layout'
import SinglePage from './routes/singlePage/singlePage'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path:"/:id",
          element:<SinglePage/>
        },
      ],
    },

  ]);
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App