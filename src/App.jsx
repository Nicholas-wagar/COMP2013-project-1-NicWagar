
import './App.css'
import ProductApp from './components/ProductApp'
import products from './data/products'
function App() {
  return (
    <ProductApp data={products} />
    //<ProductCard />
  )
}

export default App
