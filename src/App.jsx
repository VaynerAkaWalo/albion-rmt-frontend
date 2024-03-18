import './App.css'

import {Route, Routes} from "react-router-dom";
import Header from "./components/headers/Header.jsx";
import {Home} from "./components/views/Home.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
