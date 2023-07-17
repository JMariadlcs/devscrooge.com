import { Box, Typography, styled, Button } from "@mui/material"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { StyledBox } from "./Custom/CustomComponents";
import { BannerMedium } from "./Utils/MediumBanner";
import { ArticlesTittle } from "./Custom/CustomComponents";

const ArticlesPage = () => {
    const theme = useTheme();
    const isXlScreen = useMediaQuery(theme.breakpoints.up('xl'));

    const ArticleBox = styled(Box)(({ theme }) => ({
        alignItems: 'center',
        backgroundColor: 'secondary.main',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0px 0px 20px 1px rgba(255, 255, 255, 0.2)',
        flexGrow: '0',
        flexDirection: 'column',
        margin: '50px -20px 10px 0px', // Decreased margin here
        maxWidth: '30%',
        padding: isXlScreen ? '0 100px' : ' 0 50px',
        width: '100px%',
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

    return (
        <Box className="home-box" sx={{ backgroundColor: 'primary.main' }} margin="-25px 0 0 0">
            <ArticlesTittle />
            <Box className="home-box" sx={{ backgroundColor: 'primary.main', height: '140vh' }} padding='0 0 150px 0' margin="-25px 0 0 0">
                <StyledBox className="home-hire-box" margin="20px 0 100px 0" padding="0px 200px">
                    <ArticleBox className="home-buy-code4arena101-box">
                        <Typography variant="h5" component="h2" gutterBottom color="textSecondary" margin='30px 0 20px 0' align="center" alignSelf="center" fontWeight='bold'>
                            Funding Rate and Perpetual Protocols
                        </Typography>
                        <BannerMedium src={"medium0"} />
                        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <Button variant="contained" href={"https://medium.com/@devscrooge/funding-rate-and-perpetual-protocols-d0da5ca7a5fb"} target="_blank" s sx={{
                                borderRadius: 2,
                                border: '1px solid rgba(27, 123, 236, 1)',
                                boxShadow: '0px 0px 20px 1px rgba(255, 255, 255, 0.2)',
                                margin: '0 0 10px 0'
                            }}>
                                Read
                            </Button>


                            <Box sx={{ ml: 2, margin: '0 0 10px 0' }} >
                                <Typography color="textPrimary" variant="body1" component="p" gutterBottom margin="20px 0 10px 0">
                                    <span style={{ color: 'white' }}></span> If you are into blockchain security space you may have notice that lots of Perpetual protocols are emerging (GMX, etc). Auditing this type of protocols is not easy as the introduce complex terms, for example...

                                    Have you ever heard about the "Funding Rate"?
                                </Typography>
                            </Box>
                        </Box>
                    </ArticleBox>
                </StyledBox>
            </Box>
        </Box>
    )
}

export default ArticlesPage