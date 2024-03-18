import './App.css'
import Header from "./components/basic/Header.jsx";
import Content from "./components/basic/Content.jsx";
import Footer from "./components/basic/Footer.jsx";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Content/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
