import { Box, Typography, styled, Button } from "@mui/material"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const ServicesPage = () => {
    const theme = useTheme();
    const isXlScreen = useMediaQuery(theme.breakpoints.up('xl'));

    const StyledBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            padding: '50px'
        },
        [theme.breakpoints.down('lg')]: {
            flexDirection: 'column',
            padding: '50'
        },
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px 200px 50px 200px',
        flexWrap: 'wrap',
        margin: '0'
    }));

    const HireBox = styled(Box)(({ theme }) => ({
        alignItems: 'center',
        backgroundColor: 'secondary.main',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0px 0px 20px 1px rgba(255, 255, 255, 0.2)',
        flexGrow: '0',
        flexDirection: 'column',
        margin: '50px -20px 10px 0px', // Decreased margin here
        height: '470px',
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

    const TitleBox = styled(Box)(({ theme }) => ({
        backgroundColor: '#2b2b2b',
        color: '#FFFFFF',
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '200px', // set the height to be larger than text height
        margin: '50px 0 0 0'
    }));

    const TitleTypography = styled(Typography)(({ theme }) => ({
        fontWeight: 'bold',
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
        textAlign: 'left',
    }));

    const TitleDivider = styled(Box)(({ theme }) => ({
        backgroundColor: '#252525',
        borderBottom: `1px solid ${theme.palette.divider}`,
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
    }));

    const ServiceTitle = () => {
        return (
            <div className="servicesTittle" sx={{ margin: '50px 0 0 0' }}>
                <TitleDivider />
                <TitleBox>
                    <TitleTypography variant="h4" component="h1">
                        Services
                    </TitleTypography>
                    <Typography variant="body1">
                        The prices for all services are custom-designed in a specialized way
                        for each project depending on its size and complexity. A quotation
                        will be given after contact.
                    </Typography>
                </TitleBox>
                <TitleDivider />
            </div>
        );
    };


    return (
        <Box className="home-box" sx={{ backgroundColor: 'primary.main' }} margin="-25px 0 0 0">
            <ServiceTitle />
            <StyledBox className="home-hire-box" margin="20px 0 100px 0" padding="0px 200px">
                <HireBox className="home-hire-consulting-box">
                    <Typography variant="h5" component="h2" gutterBottom color="textSecondary" margin='30px 0 20px 0' align="center" alignSelf="center" fontWeight='bold'>
                        Consulting
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <Button variant="contained" href={"https://docs.google.com/forms/d/e/1FAIpQLSees9RL4-zXmWkWsY_tZ4-52JL1AoGjYH_1ajjuizNDV5PFdg/viewform?usp=sf_link"} target="_blank" s sx={{
                            borderRadius: 2,
                            border: '1px solid rgba(27, 123, 236, 1)',
                            boxShadow: '0px 0px 20px 1px rgba(255, 255, 255, 0.2)',
                        }}>
                            Hire
                        </Button>
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

                <HireBox className="home-hire-simpleAudit-box">
                    <Typography variant="h5" component="h2" gutterBottom color="textSecondary" margin='30px 0 20px 0' align="center" alignSelf="center" fontWeight='bold'>
                        Smart Contracts Development
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <Button variant="contained" href={"https://docs.google.com/forms/d/e/1FAIpQLSees9RL4-zXmWkWsY_tZ4-52JL1AoGjYH_1ajjuizNDV5PFdg/viewform?usp=sf_link"} target="_blank" s sx={{
                            borderRadius: 2,
                            border: '1px solid rgba(27, 123, 236, 1)',
                            boxShadow: '0px 0px 20px 1px rgba(255, 255, 255, 0.2)',
                        }}>
                            Hire
                        </Button>
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


                <HireBox className="home-hire-simpleAudit-box">
                    <Typography variant="h5" component="h2" gutterBottom color="textSecondary" margin='50px 0 20px 0' align="center" alignSelf="center" fontWeight='bold'>
                        Simple Audit
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <Button variant="contained" href={"https://docs.google.com/forms/d/e/1FAIpQLSees9RL4-zXmWkWsY_tZ4-52JL1AoGjYH_1ajjuizNDV5PFdg/viewform?usp=sf_link"} target="_blank" s sx={{
                            borderRadius: 2,
                            border: '1px solid rgba(27, 123, 236, 1)',
                            boxShadow: '0px 0px 20px 1px rgba(255, 255, 255, 0.2)',
                        }}>
                            Hire
                        </Button>
                        <Box sx={{ ml: 2 }} >
                            <Typography color="textPrimary" variant="body1" component="p" gutterBottom margin="20px 0 10px 0">
                                <span style={{ color: 'white' }}>&bull;</span> Code review
                            </Typography>
                            <Typography color="textPrimary" variant="body1" component="p" gutterBottom margin="0 0 10px 0">
                                <span style={{ color: 'white' }}>&bull;</span> Shallow search for vulnerability detection
                            </Typography>
                            <Typography color="textPrimary" variant="body1" component="p" gutterBottom margin="0 0 10px 0">
                                <span style={{ color: 'white' }}>&bull;</span> Tips on improving code efficiency
                            </Typography>
                            <Typography color="textPrimary" variant="body1" component="p" gutterBottom margin="0 0 10px 0">
                                <span style={{ color: 'white' }}>&bull;</span> Report on the above points and how to solve them
                            </Typography>
                        </Box>
                    </Box>
                </HireBox>

                <HireBox className="home-hire-simpleAudit-box" >
                    <Typography variant="h5" component="h2" gutterBottom color="textSecondary" margin='50px 0 20px 0' align="center" alignSelf="center" fontWeight='bold'>
                        Complex Audit
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <Button variant="contained" href={"https://docs.google.com/forms/d/e/1FAIpQLSees9RL4-zXmWkWsY_tZ4-52JL1AoGjYH_1ajjuizNDV5PFdg/viewform?usp=sf_link"} target="_blank" s sx={{
                            borderRadius: 2,
                            border: '1px solid rgba(27, 123, 236, 1)',
                            boxShadow: '0px 0px 20px 1px rgba(255, 255, 255, 0.2)',
                        }}>
                            Hire
                        </Button>
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
            </StyledBox>
        </Box>
    )
}

export default ServicesPage