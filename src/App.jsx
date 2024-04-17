import './App.css'

import {Route, Routes} from "react-router-dom";
import Header from "./components/headers/Header.jsx";
import {Home} from "./components/views/Home.jsx";
import Footer from "./components/Footer.jsx";
import {CalculatorView} from "./components/views/CalculatorView.jsx";
import {BlackMarketView} from "./components/views/BlackMarketView.jsx";

function App() {
    return (
        <>
            <div className="flex flex-grow flex-col">
                <Header/>
                <div className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/calculator" element={<CalculatorView/>}/>
                        <Route path="/black-market" element={<BlackMarketView/>}/>
                    </Routes>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default App
