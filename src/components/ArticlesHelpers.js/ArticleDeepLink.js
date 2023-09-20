import { Box, Typography, styled, Button } from "@mui/material"
import { StyledBox } from "../Custom/CustomComponents";
import { useNavigate } from 'react-router-dom';

const ArticleDeepLink = () => {
    const navigate = useNavigate();
    const ArticleBox = styled(Box)(({ theme }) => ({
        alignItems: 'center',
        backgroundColor: 'secondary.main',
        border: '1px solid #6F005B',
        boxShadow: '0px 0px 20px 1px #6F005B',
        flexGrow: '0',
        flexDirection: 'column',
        margin: '10px',
        height: '300px',
        padding: '0 10px 0 10px',
        width: '300px',
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



        <StyledBox className="home-hire-box" margin="20px 0 100px 0" padding="0px 200px sx={{ background: 'radial-gradient(circle, #000000, #0e0006, #130012, #11001c, #010127)', height: '100%' }}">

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


        </StyledBox>

    )
}

export default ArticleDeepLink