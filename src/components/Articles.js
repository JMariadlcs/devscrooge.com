import { Box, Typography, styled, Button } from "@mui/material"
import { StyledBox } from "./Custom/CustomComponents";
import { BannerMedium } from "./Utils/MediumBanner";
import { ArticlesTittle } from "./Custom/CustomComponents";
import { useNavigate } from 'react-router-dom';

const ArticlesPage = () => {
    const navigate = useNavigate();

    const ArticleBox = styled(Box)(({ theme }) => ({
        alignItems: 'center',
        backgroundColor: 'secondary.main',
        border: '1px solid #6F005B',
        boxShadow: '0px 0px 20px 1px #6F005B',
        flexGrow: '0',
        flexDirection: 'column',
        margin: '10px',
        height: '100%',
        maxWidth: '25%',
        padding: '0 10px 0 10px',
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
            boxShadow: '0px 0px 30px 3px #6F005B',
            transform: 'translateY(-5px)',
        },
    }));

    const handleClick = () => {
        navigate('/deepdives');
        window.scrollTo(0, 0);
    }

    return (
        <Box className="home-box" sx={{ backgroundColor: 'primary.main' }} margin="-25px 0 0 0" padding='0 0 10px 0'>
            <ArticlesTittle />
            
            
            <Box className="home-box" sx={{ background: 'radial-gradient(circle, #000000, #0e0006, #130012, #11001c, #010127)', height: '100%' }} padding='20px 0 0px 0' margin="-25px 0 0 0">
                <StyledBox className="home-hire-box" margin="20px 0 100px 0" padding="0px 200px">
                <ArticleBox className="home-buy-code4arena101-box">
                        <Typography variant="h5" component="h2" gutterBottom margin='30px 0 20px 0' align="center" alignSelf="center" fontWeight='bold' color='yellow' sx={{textShadow:"#FC0 1px 0 10px"}}>
                        Learn the most common blockchain vulnerabilities
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <Button variant="contained" onClick={handleClick} s sx={{
                                borderRadius: 2,
                                border: '1px solid yellow',
                                boxShadow: '0px 0px 20px 1px yellow',
                                margin: '0 0 10px 0'
                            }}>
                                Read
                            </Button>


                            <Box sx={{ ml: 2, margin: '0 0 10px 0' }} >
                                <Typography color="textPrimary" variant="body1" component="p" gutterBottom margin="20px 0 10px 0">
                                    <span style={{ color: 'white' }}></span>  Access 'Deep Dives' and learn in deep about Slippage, Oracle Manipulation, Signature Malleability...
                                </Typography>
                            </Box>
                        </Box>
                    </ArticleBox>

                    <ArticleBox className="home-buy-code4arena101-box">
                        <Typography variant="h5" component="h2" gutterBottom color="textSecondary" margin='30px 0 20px 0' align="center" alignSelf="center" fontWeight='bold' sx={{textShadow:"#FC0 1px 0 10px"}}>
                            Funding Rate and Perpetual Protocols
                        </Typography>
                        <BannerMedium src={"medium0"} />
                        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <Button variant="contained" href={"https://medium.com/@devscrooge/funding-rate-and-perpetual-protocols-d0da5ca7a5fb"} target="_blank" s sx={{
                                borderRadius: 2,
                                border: '1px solid #6F005B',
                                boxShadow: '0px 0px 20px 1px #6F005B',
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

                    <ArticleBox className="home-buy-code4arena101-box">
                        <Typography variant="h5" component="h2" gutterBottom color="textSecondary" margin='30px 0 20px 0' align="center" alignSelf="center" fontWeight='bold' sx={{textShadow:"#FC0 1px 0 10px"}}>
                            Funding Rate and Perpetual Protocols
                        </Typography>
                        <BannerMedium src={"medium0"} />
                        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <Button variant="contained" href={"https://medium.com/@devscrooge/funding-rate-and-perpetual-protocols-d0da5ca7a5fb"} target="_blank" s sx={{
                                borderRadius: 2,
                                border: '1px solid #6F005B',
                                boxShadow: '0px 0px 20px 1px #6F005B',
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