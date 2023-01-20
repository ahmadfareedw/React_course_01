import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';

// const routDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage />} />
//     <Route path='/products' element={<ProductsPage />} />
//   </Route>
// )

// const router = createBrowserRouter(routDefinitions)

const router = createBrowserRouter([
  { 
    path: '', 
    element: <RootLayout />, 
    children: [
      { path: '/', element: <HomePage />},
      { path: '/products', element: <ProductsPage />}
    ],
  },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;