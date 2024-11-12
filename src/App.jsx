import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from "../src/components/Footer/Footer.jsx"
import Header from "../src/components/Header/Header.jsx"
import Home from './components/Home/Home.jsx';
import About from "./components/About/About.jsx"
import Contact from "./components/Contact/Contact.jsx"
import ProductsPage from "./components/Products/Products.jsx";
import ItemDetail from "./components/ItemDetail/ItemDetail.jsx"
import ProductsCategory from "./components/Category/Category.jsx";

function App() {

    return (
        <>
        <BrowserRouter>
            <section className="h-[80px]">
            <Header/>
            </section>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/category/:categoryId' element={<ProductsCategory />} />
                <Route path='/products' element={<ProductsPage />} />
                <Route path='/products/:productId' element={<ItemDetail />} />
            </Routes>
            <Footer />
        </BrowserRouter>
        </>
    )
}
export default App