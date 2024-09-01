import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Home from './pages/page_1.jsx'
import About from './pages/page_2.jsx'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
            
        </div>
    )
}


export default App;
