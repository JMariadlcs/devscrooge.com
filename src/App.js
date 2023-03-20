import { Box, ThemeProvider } from "@mui/material"
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import FooterComponent from "./components/Footer"
import Home from "./components/Home"
import ServicesPage from "./components/Services"
import ThreadsPage from "./components/Threads"
import Contact from "./components/Contact"
import mainTheme from "./themeConfig"

function App() {


    return (
        <ThemeProvider theme={mainTheme}>
            <Box>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/services' element={<ServicesPage />} />
                    <Route path='/threads' element={<ThreadsPage />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
                <FooterComponent />
            </Box>
        </ThemeProvider >
    );
}

export default App
