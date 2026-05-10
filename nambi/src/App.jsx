import Header from './components/Header'
import ProductList from './components/ProductList'
import CartSidebar from './components/CartSidebar'
import { CartProvider } from './context/CartContext'
import { products } from './data/products'
import './styles/App.css'

function AppContent() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <ProductList products={products} />
      </main>
      <CartSidebar />
    </div>
  )
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  )
}

export default App
