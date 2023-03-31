import { Box, Typography, styled, Button } from "@mui/material"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { StyledBox } from "./Custom/CustomComponents";
import { BannerProduct } from "./Utils/ProductBanner";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    dialogPaper: {
        color: 'white',
        backgroundColor: '#2B2B2B', // Set the background color to #2B2B2B
        border: '2px solid #235DA8', // Set the border to 2px solid #235DA8
        borderRadius: theme.shape.borderRadius,
        '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
    },
}));

const ProductsPage = () => {
    const theme = useTheme();
    const isXlScreen = useMediaQuery(theme.breakpoints.up('xl'));

    const HireBox = styled(Box)(({ theme }) => ({
        alignItems: 'center',
        backgroundColor: 'secondary.main',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0px 0px 20px 1px rgba(255, 255, 255, 0.2)',
        flexGrow: '0',
        flexDirection: 'column',
        margin: '50px -20px 10px 0px', // Decreased margin here
        maxWidth: '30%',
        padding: isXlScreen ? '0 100px' : ' 0 50px',
        width: '100%',
        borderRadius: 10,
        [theme.breakpoints.down('lg')]: {
            flexDirection: 'column',
            height: 'fit-content',
            margin: '50px 0px 10px 0px',
            padding: '0 20px 20px 20px',
            maxWidth: '80%',
            width: '500px',
        },
        '&:hover': {
            boxShadow: '0px 0px 30px 3px rgba(255, 255, 255, 0.3)',
            transform: 'translateY(-5px)',
        },
    }));

    // But buy crypto button
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleButtonClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box className="home-box" sx={{ backgroundColor: 'primary.main' }} margin="-25px 0 0 0">
            <StyledBox className="home-hire-box" margin="20px 0 100px 0" padding="0px 200px">
                <HireBox className="home-buy-code4arena101-box">
                    <Typography variant="h5" component="h2" gutterBottom color="textSecondary" margin='30px 0 20px 0' align="center" alignSelf="center" fontWeight='bold'>
                        Code4Arena Issues 101
                    </Typography>
                    <BannerProduct src={"code4arena"} />
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <Button variant="contained" href={"https://devscrooge.gumroad.com/l/code4arena101"} target="_blank" s sx={{
                            borderRadius: 2,
                            border: '1px solid rgba(27, 123, 236, 1)',
                            boxShadow: '0px 0px 20px 1px rgba(255, 255, 255, 0.2)',
                            margin: '0 0 10px 0'
                        }}>
                            Buy
                        </Button>
                        <div>
                            <Button variant="contained" onClick={handleButtonClick} sx={{
                                borderRadius: 2,
                                border: '1px solid rgba(27, 123, 236, 1)',
                                boxShadow: '0px 0px 20px 1px rgba(255, 255, 255, 0.2)',
                            }}>
                                Buy with Crypto!
                            </Button>
                            <Dialog open={open} onClose={handleClose} classes={{ paper: classes.dialogPaper }}>
                                <DialogTitle style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Buy with Crypto!</div>
                                </DialogTitle>
                                <DialogContent style={{ textAlign: 'center' }}>
                                    <p style={{ fontWeight: 'bold', color: '#7CFC00' }}>Price: $20</p>
                                    <p style={{ fontWeight: 'bold' }}>Supported Chains:</p>
                                    <p>Polygon, Fantom</p>
                                    <p style={{ fontWeight: 'bold' }}>Supported Coins:</p>
                                    <p>USDT, USDC, DAI</p>
                                    <p style={{ fontWeight: 'bold', color: '#ff0000' }}>How to pay?:</p>
                                    <p style={{ fontWeight: 'bold' }}>First step:</p>
                                    <p>Send a tx with the price in stable coin to '0xd03D08426F9ED35C65236F8F54C332b5D14f187A'</p>
                                    <p style={{ fontWeight: 'bold' }}>Second step:</p>
                                    <p>Send link to polyscan/fantomscan tx, 'https://polyscan.io/tx/xxxx' to '0xdevscrooge@gmail.com'</p>
                                    <p>You payment will be verified and you will receive a link to the product in 1-2 days.</p>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} sx={{ color: "white" }}>
                                        Close
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                        <Box sx={{ ml: 2, margin: '0 0 10px 0' }} >
                            <Typography color="textPrimary" variant="body1" component="p" gutterBottom margin="20px 0 10px 0">
                                <span style={{ color: 'white' }}></span> This product compiles some smart contract security issues from past Code4Arena contests and classifies them into different categories based on the part of the technology that was attacked.
                                You have LIFETIME access to CODEARENA ISSUES 101. This product does not contain all past code4arena report contests. Only some of them are being analyzed and classified but the product will be constantly analyzed in order to include new issues.
                            </Typography>
                        </Box>
                    </Box>
                </HireBox>
            </StyledBox>
        </Box>
    )
}

export default ProductsPage