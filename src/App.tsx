
import { useState, createContext } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/HomePage/Home'
import ProductPage from './components/Product/ProductPage'
import Footer from './components/Footer'
import CollectionPages from './components/Collections/CollectionPages'
export type ViewType = 'home' | 'product' | 'collection';

export const NavigationContext = createContext<{
  view: ViewType;
  setView: (v: ViewType) => void;
}>({ view: 'home', setView: () => { } });

function App() {
  const [view, setView] = useState<ViewType>('collection');

  return (
    <NavigationContext.Provider value={{ view, setView }}>
      <Header />
      {view === 'home' && <Home />}
      {/* {view === 'product' && <ProductPage />} */}
      {view === 'collection' && <CollectionPages />}
      <Footer />
    </NavigationContext.Provider>
  )
}

export default App
