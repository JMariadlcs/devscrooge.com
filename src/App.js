import { Box, ThemeProvider } from "@mui/material"
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import FooterBar from "./components/FooterBar"
import Home from "./components/Home"

import ThreadsPage from "./components/Threads"
import Contact from "./components/Contact"
import mainTheme from "./themeConfig"

function App() {


    return (
        <ThemeProvider theme={mainTheme}>
            <Box>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path='/threads' element={<ThreadsPage />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
                <FooterBar />
            </Box>
        </ThemeProvider >
    );
}

export default App
