import { Box, Typography, Button, styled } from "@mui/material"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { StyledBox } from "../Custom/CustomComponents"

const HireComponent = () => {
    const theme = useTheme();
    const isXlScreen = useMediaQuery(theme.breakpoints.up('xl'));
    const HireBox = styled(Box)(({ theme }) => ({
        alignItems: 'center',
        backgroundColor: 'secondary.main',
        border: '1px solid #6F005B',
        boxShadow: '0px 0px 20px 1px #6F005B',
        flexGrow: '0',
        flexDirection: 'column',
        margin: '10px',
        height: '470px',
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
            boxShadow: '0px 0px 30px 3px #6F005B',
            transform: 'translateY(-5px)',
        },
    }));
    return (

    <StyledBox className="home-hire-box" margin="20px 0 50px 0" padding="0px 200px">
        <HireBox className="home-hire-simpleAudit-box" >
            <Typography variant="h5" component="h2" gutterBottom color="textSecondary" margin='50px 0 20px 0' align="center" alignSelf="center" fontWeight='bold' sx={{textShadow:"#FC0 1px 0 10px"}}>
                DEEP DIVE AUDIT
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                    <Button variant="contained" href={"https://docs.google.com/forms/d/e/1FAIpQLSees9RL4-zXmWkWsY_tZ4-52JL1AoGjYH_1ajjuizNDV5PFdg/viewform?usp=sf_link"} target="_blank" s sx={{
                        borderRadius: 2,
                        border: '1px solid #6F005B',
                        boxShadow: '0px 0px 20px 1px #6F005B',
                        margin: '0 5px 0 0'
                    }}>
                        Hire
                    </Button>
                    <Button variant="contained" href={"https://twitter.com/0xjmaria"} target="_blank" s sx={{
                        borderRadius: 2,
                        border: '1px solid #6F005B',
                        boxShadow: '0px 0px 20px 1px #6F005B',
                    }}>
                        DM
                    </Button>
                </Box>
                <Box sx={{ ml: 2 }} >
                    <Typography color="textPrimary" variant="body1" component="p" gutterBottom margin="20px 0 10px 0">
                        <span style={{ color: 'white' }}>&bull;</span> Code review
                    </Typography>
                    <Typography color="textPrimary" variant="body1" component="p" gutterBottom margin="0 0 10px 0">
                        <span style={{ color: 'white' }}>&bull;</span> Deep search for vulnerability detection
                    </Typography>
                    <Typography color="textPrimary" variant="body1" component="p" gutterBottom margin="0 0 10px 0">
                        <span style={{ color: 'white' }}>&bull;</span> Testing with personalized scripts
                    </Typography>
                    <Typography color="textPrimary" variant="body1" component="p" gutterBottom margin="0 0 10px 0">
                        <span style={{ color: 'white' }}>&bull;</span> Report on detected vulnerabilities classified on low, medium and high severity
                    </Typography>
                    <Typography color="textPrimary" variant="body1" component="p" gutterBottom margin="0 0 10px 0">
                        <span style={{ color: 'white' }}>&bull;</span> Report on the above points and how to solve them
                    </Typography>
                </Box>
            </Box>
        </HireBox>

        <HireBox className="home-hire-simpleAudit-box">
            <Typography variant="h5" component="h2" gutterBottom color="textSecondary" margin='30px 0 20px 0' align="center" alignSelf="center" fontWeight='bold' sx={{textShadow:"#FC0 1px 0 10px"}}>
                SMART CONTRACT DEVELOPMENT
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                    <Button variant="contained" href={"https://docs.google.com/forms/d/e/1FAIpQLSees9RL4-zXmWkWsY_tZ4-52JL1AoGjYH_1ajjuizNDV5PFdg/viewform?usp=sf_link"} target="_blank" s sx={{
                        borderRadius: 2,
                        border: '1px solid #6F005B',
                        boxShadow: '0px 0px 20px 1px #6F005B',
                        margin: '0 5px 0 0'
                    }}>
                        Hire
                    </Button>
                    <Button variant="contained" href={"https://twitter.com/0xjmaria"} target="_blank" s sx={{
                        borderRadius: 2,
                        border: '1px solid #6F005B',
                        boxShadow: '0px 0px 20px 1px #6F005B',
                    }}>
                        DM
                    </Button>
                </Box>
                <Box sx={{ ml: 2 }} >
                    <Typography color="textPrimary" variant="body1" component="p" gutterBottom margin="20px 0 10px 0">
                        <span style={{ color: 'white' }}>&bull;</span> Personalized development environment
                    </Typography>
                    <Typography color="textPrimary" variant="body1" component="p" gutterBottom margin="0 0 10px 0">
                        <span style={{ color: 'white' }}>&bull;</span> Development of the needed Smart Contracts
                    </Typography>
                    <Typography color="textPrimary" variant="body1" component="p" gutterBottom margin="0 0 10px 0">
                        <span style={{ color: 'white' }}>&bull;</span> Development of the needed scripts to support the Smart Contract
                    </Typography>
                    <Typography color="textPrimary" variant="body1" component="p" gutterBottom margin="0 0 10px 0">
                        <span style={{ color: 'white' }}>&bull;</span> Unit testing for the Smart Contract
                    </Typography>
                    <Typography color="textPrimary" variant="body1" component="p" gutterBottom margin="0 0 10px 0">
                        <span style={{ color: 'white' }}>&bull;</span> Deployment scripts
                    </Typography>
                    <Typography color="textPrimary" variant="body1" component="p" gutterBottom margin="0 0 10px 0">
                        <span style={{ color: 'white' }}>&bull;</span> Smart Contract deployment
                    </Typography>
                </Box>
            </Box>
        </HireBox>

        <HireBox className="home-hire-consulting-box">
            <Typography variant="h5" component="h2" gutterBottom color="textSecondary" margin='30px 0 20px 0' align="center" alignSelf="center" fontWeight='bold' sx={{textShadow:"#FC0 1px 0 10px"}}>
                CONSULTANCY
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                    <Button variant="contained" href={"https://docs.google.com/forms/d/e/1FAIpQLSees9RL4-zXmWkWsY_tZ4-52JL1AoGjYH_1ajjuizNDV5PFdg/viewform?usp=sf_link"} target="_blank" s sx={{
                        borderRadius: 2,
                        border: '1px solid #6F005B',
                        boxShadow: '0px 0px 20px 1px #6F005B',
                        margin: '0 5px 0 0'
                    }}>
                        Hire
                    </Button>
                    <Button variant="contained" href={"https://twitter.com/0xjmaria"} target="_blank" s sx={{
                        borderRadius: 2,
                        border: '1px solid #6F005B',
                        boxShadow: '0px 0px 20px 1px #6F005B',
                    }}>
                        DM
                    </Button>
                </Box>
                <Box sx={{ ml: 2 }} >
                    <Typography color="textPrimary" variant="body1" component="p" gutterBottom margin="20px 0 10px 0">
                        <span style={{ color: 'white' }}>&bull;</span> 1 to 1 call
                    </Typography>
                    <Typography color="textPrimary" variant="body1" component="p" gutterBottom margin="0 0 10px 0">
                        <span style={{ color: 'white' }}>&bull;</span> Solving doubts about technical implementation
                    </Typography>
                    <Typography color="textPrimary" variant="body1" component="p" gutterBottom margin="0 0 10px 0">
                        <span style={{ color: 'white' }}>&bull;</span> Information on which Smart Contracts are required
                    </Typography>
                    <Typography color="textPrimary" variant="body1" component="p" gutterBottom margin="0 0 10px 0">
                        <span style={{ color: 'white' }}>&bull;</span> Preliminary architecture design of Smart Contracts
                    </Typography>
                </Box>
            </Box>
        </HireBox>
    </StyledBox>
)
}

export default HireComponent