import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <div className="App">
            <Navigation />
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/Contact" element={<Contact />} />
                    <Route exact path="/Details/:id" element={<Details />} />
                    <Route path="/**" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
