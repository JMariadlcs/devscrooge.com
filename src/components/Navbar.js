import { useLocation } from 'react-router-dom';
import React, { useState } from "react";
import { AppBar, Typography, Link, Button } from "@mui/material";
import { StyledToolbar, MenuPC, MenuMobile } from './Custom/CustomComponents'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Button href="/" variant="h6" sx={{ display: { xs: "none", sm: "block" }, flexDirection: 'row', fontWeight: 'bold' }}>
                    @devScrooge
                </Button>
                <Button href="/" sx={{ display: { xs: "block", sm: "none" }, fontSize: 13, fontWeight: 'bold', color: "white" }}>
                    @devScrooge
                </Button>
                <Typography variant="h6" sx={{ display: { xs: "flex", sm: "none", md: "none", lg: "none", xl: "none" }, color: "secondary.main", fontSize: 15 }} margin="0 10px 0 0"
                    onClick={(e) => setOpen(true)}
                >
                    MENU
                </Typography>
                <MenuPC>
                    <Link href="/" color={location.pathname === '/' ? 'textSecondary' : 'secondary.main'} underline='none' sx={{ display: { xs: "none", sm: "flex", md: "flex", lg: "flex", xl: "flex" }, fontSize: 20 }}>
                        Home
                    </Link>
                    <Link href="/services" color={location.pathname === '/services' ? 'textSecondary' : 'secondary.main'} underline='none' sx={{ display: { xs: "none", sm: "flex", md: "flex", lg: "flex", xl: "flex" }, fontSize: 20 }}>
                        Services
                    </Link>
                   {/* <Link href="/products" color={location.pathname === '/products' ? 'textSecondary' : 'secondary.main'} underline='none' sx={{ display: { xs: "none", sm: "flex", md: "flex", lg: "flex", xl: "flex" }, fontSize: 20 }}>
                        Products
                    </Link> */}
                    <Link href="/articles" color={location.pathname === '/articles' ? 'textSecondary' : 'secondary.main'} underline='none' sx={{ display: { xs: "none", sm: "flex", md: "flex", lg: "flex", xl: "flex" }, fontSize: 20 }}>
                        Articles
                    </Link>
                    <Link href="/threads" color={location.pathname === '/threads' ? 'textSecondary' : 'secondary.main'} underline='none' sx={{ display: { xs: "none", sm: "flex", md: "flex", lg: "flex", xl: "flex" }, fontSize: 20 }}>
                        Threads
                    </Link>
                    <Link href="/contact" color={location.pathname === '/contact' ? 'textSecondary' : 'secondary.main'} underline='none' sx={{ display: { xs: "none", sm: "flex", md: "flex", lg: "flex", xl: "flex" }, fontSize: 20 }}>
                        Contact
                    </Link>
                </MenuPC>

            </StyledToolbar>


            <MenuMobile
                sx={{ color: "secondary.main", backgroundColor: "999999", fontSize: 15 }}
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <Link href="/" underline='none' sx={{
                    display: "block",
                    color: "black",
                    padding: "0 0 0 20px",
                    margin: "0 8px 8px 0",
                }}>Home</Link>
                <Link href="/services" underline='none' sx={{
                    display: "block",
                    color: "black",
                    padding: "0 0 0 10px",
                    margin: "0 8px 8px 0"
                }}>Services</Link>
                {/*<Link href="/products" underline='none' sx={{
                    display: "block",
                    color: "black",
                    padding: "0 0 0 10px",
                    margin: "0 8px 8px 0"
                }}>Products</Link> */}
                <Link href="/articles" underline='none' sx={{
                    display: "block",
                    color: "black",
                    padding: "0 0 0 10px",
                    margin: "0 8px 8px 0"
                }}>Articles</Link>
                <Link href="/threads" underline='none' sx={{
                    display: "block",
                    color: "black",
                    padding: "0 0 0 10px",
                    margin: "0 8px 8px 0"
                }}>Threads</Link>
                <Link href="/contact" underline='none' sx={{
                    display: "block",
                    color: "black",
                    padding: "0 0 0 10px",
                    margin: "0 8px 8px 0",
                }}>Contact</Link>
            </MenuMobile>
        </AppBar >
    );
};

export default Navbar;