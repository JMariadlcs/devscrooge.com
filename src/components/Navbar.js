import { useLocation } from 'react-router-dom';
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    InputBase,
    Menu,
    MenuItem,
    styled,
    Toolbar,
    Typography,
    Link
} from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const MenuPC = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    },
}));

const MenuMobile = styled(Menu)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "none",
    },
}));

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const location = useLocation();

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" }, flexDirection: 'row', fontWeight: 'bold' }}>
                    JMaria - devScrooge
                </Typography>
                <Typography sx={{ display: { xs: "block", sm: "none" }, fontSize: 15, fontWeight: 'bold' }}>
                    JMaria - devScrooge
                </Typography>
                <Typography variant="h6" sx={{ display: { xs: "flex", sm: "none", md: "none", lg: "none", xl: "none" }, color: "secondary.main", fontSize: 15 }} margin="0 10px 0 0"
                    onClick={(e) => setOpen(true)}
                >
                    MENU
                </Typography>
                <MenuPC>
                    <Link href="/" color={location.pathname === '/' ? 'textSecondary' : 'secondary.main'} underline='none' sx={{ display: { xs: "none", sm: "flex", md: "flex", lg: "flex", xl: "flex" }, fontSize: 15 }}>
                        Home
                    </Link>
                    <Link href="/services" color={location.pathname === '/services' ? 'textSecondary' : 'secondary.main'} underline='none' sx={{ display: { xs: "none", sm: "flex", md: "flex", lg: "flex", xl: "flex" }, fontSize: 15 }}>
                        Services
                    </Link>
                    <Link href="/threads" color={location.pathname === '/threads' ? 'textSecondary' : 'secondary.main'} underline='none' sx={{ display: { xs: "none", sm: "flex", md: "flex", lg: "flex", xl: "flex" }, fontSize: 15 }}>
                        Threads
                    </Link>
                    <Link href="/contact" color={location.pathname === '/contact' ? 'textSecondary' : 'secondary.main'} underline='none' sx={{ display: { xs: "none", sm: "flex", md: "flex", lg: "flex", xl: "flex" }, fontSize: 15 }}>
                        Contact
                    </Link>
                </MenuPC>

            </StyledToolbar>


            <MenuMobile
                sx={{ color: "secondary.main", fontSize: 15 }}
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