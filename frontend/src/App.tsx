import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./index.css";
import Home from "./pages/home/Home";

export default function App()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/test" element={<div>test</div>} />
            </Routes>
        </BrowserRouter>
    );  
}