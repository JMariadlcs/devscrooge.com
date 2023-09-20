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
import DeepDivesPage from "./components/DeepDives"
// import ProductsPage from "./components/Products"
import ArticlesPage from "./components/Articles"

function App() {


    return (
        <ThemeProvider theme={mainTheme}>
            <Box sx={{height: '100%', position:'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<ServicesPage />} />
                   {/* <Route path="/products" element={<ProductsPage />} /> */}
                    <Route path="/articles" element={<ArticlesPage />} />
                    <Route path="/deepdives" element={<DeepDivesPage />} />
                    <Route path="/threads" element={<Threadsv2 />} />
                    <Route path='/contact' element={<ContactPage />} />
                </Routes>
                <FooterBar />
            </Box>
        </ThemeProvider >
    );
}

export default App
