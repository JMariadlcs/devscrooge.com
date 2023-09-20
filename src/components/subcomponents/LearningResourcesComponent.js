import { Box, Typography, Button, styled } from "@mui/material"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { StyledBox } from "../Custom/CustomComponents"
import { useNavigate } from 'react-router-dom';

const LearningResourcesComponent = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isXlScreen = useMediaQuery(theme.breakpoints.up('xl'));
    const HireBox = styled(Box)(({ theme }) => ({
        alignItems: 'center',
        backgroundColor: 'secondary.main',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0px 0px 20px 1px rgba(255, 255, 255, 0.2)',
        flexGrow: '0',
        flexDirection: 'column',
        margin: '10px',
        height: '300px',
        maxWidth: '25%',
        padding: isXlScreen ? '0' : ' 0',
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

    const handleClickArticles = () => {
        navigate('/articles');
        window.scrollTo(0, 0);
    };

    const handleClickDeep = () => {
        navigate('/deepdives');
        window.scrollTo(0, 0);
    };
    return (

    <StyledBox className="home-hire-box" margin="20px 0 50px 0" padding="0px 200px">
        <HireBox className="home-hire-simpleAudit-box" >
            <Typography variant="h5" component="h2" gutterBottom color="textSecondary" margin='50px 0 20px 0' align="center" alignSelf="center" fontWeight='bold' sx={{textShadow:"#FC0 1px 0 10px"}}>
                ALL ARTICLES
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          
                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                    <Button variant="contained" onClick={handleClickArticles} s sx={{
                        borderRadius: 2,
                        border: '1px solid #6F005B',
                        boxShadow: '0px 0px 20px 1px rgba(255, 255, 255, 0.2)',
                        margin: '0 5px 0 0'
                    }}>
                        READ
                    </Button>
                   
                </Box>
                <Box sx={{ ml: 2 }} >
                    <Typography color="textPrimary" variant="body1" component="p" gutterBottom margin="20px 0 10px 0">
                        <span style={{ color: 'white' }}></span> Access all the articles for learning about blockchain security, common vulnerabilities, and best practices.
                    </Typography>
                    
                </Box>
            </Box>
        </HireBox>

        <HireBox className="home-hire-simpleAudit-box" >
            <Typography variant="h5" component="h2" gutterBottom color="textSecondary" margin='50px 0 20px 0' align="center" alignSelf="center" fontWeight='bold' sx={{textShadow:"#FC0 1px 0 10px"}}>
                DEEP DIVES
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                    <Button variant="contained" onClick={handleClickDeep} s sx={{
                        borderRadius: 2,
                        border: '1px solid #6F005B',
                        boxShadow: '0px 0px 20px 1px rgba(255, 255, 255, 0.2)',
                        margin: '0 5px 0 0'
                    }}>
                        READ
                    </Button>
                   
                </Box>
                <Box sx={{ ml: 2 }} >
                    <Typography color="textPrimary" variant="body1" component="p" gutterBottom margin="20px 0 10px 0">
                        <span style={{ color: 'white' }}></span> Access a compilation of blockchain basics articles to learn everything you need to know about the main web3 security topics.
                    </Typography>
                    
                </Box>
            </Box>
        </HireBox>

        <HireBox className="home-hire-consulting-box">
            <Typography variant="h5" component="h2" gutterBottom color="textSecondary" margin='30px 0 20px 0' align="center" alignSelf="center" fontWeight='bold' sx={{textShadow:"#FC0 1px 0 10px"}}>
                VIDEOS
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <Box sx={{ ml: 2 }} >
                    <Typography color="textPrimary" variant="body1" component="p" gutterBottom margin="20px 0 10px 0">
                        <span style={{ color: 'white' }}></span> UPCOMING...
                    </Typography>
                </Box>
            </Box>
        </HireBox>
    </StyledBox>
)
}

export default LearningResourcesComponent