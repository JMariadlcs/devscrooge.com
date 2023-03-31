import { Box, ThemeProvider } from "@mui/material"
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import FooterBar from "./components/FooterBar"
import Home from "./components/Home"
import ServicesPage from "./components/Services"
// import ThreadsPage from "./components/Threads"
import ContactPage from "./components/Contact"
import mainTheme from "./themeConfig"
import Threadsv2 from "./components/Threadsv2"
import ProductsPage from "./components/Products"

function App() {


    return (
        <ThemeProvider theme={mainTheme}>
            <Box>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/threads" element={<Threadsv2 />} />
                    <Route path='/contact' element={<ContactPage />} />
                </Routes>
                <FooterBar />
            </Box>
        </ThemeProvider >
    );
}

export default App
