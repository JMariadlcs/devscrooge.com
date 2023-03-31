import { Box, Typography, Divider, Button, styled } from "@mui/material"
import { JMariaBoxPC, JMariaBoxMobile, ServicesBox, StyledBox } from "./Custom/CustomComponents"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CircularImage from './Utils/HomeImage'
import HomeButtons from './Utils/HomeButtons'
import ProductsPage from './Products'

const Home = () => {
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

    return (
        <Box className="home-box" sx={{ backgroundColor: 'primary.main' }} padding="0 0 20px 0">
            {/*Text box only shown on mobile*/}
            <JMariaBoxMobile className="JMariaInfoBlock">
                <CircularImage src="../assets/scrooge.png" sx={{ width: 20, height: 20, marginRight: '2rem', marginLeft: '2rem' }} padding="0 50px 0 0" />
                <Box className="JMariaInfoText" sx={{ padding: '50px ' }}>
                    <Typography color="textPrimary">Blockchain Engineer - Smart Contract dev</Typography>
                    <Typography color='white' fontSize='40px' fontWeight='bold' margin='0 0 20px 0'>JMaria</Typography>
                    <Typography color="textPrimary" margin='0 0 20px 0'>
                        Blockchain protocols are changing the world by improving people's lives by offering transparency, security and decentralized transactions. All protocols are born from an idea and we all have ideas, but without the technical knowledge it is not possible to achieve the most important thing, to implement them.
                    </Typography>
                    <Typography color="textPrimary" margin='0 0 20px 0'>
                        Due to the hours dedicated to the theoretical study of blockchain technology and my experience as a Blockchain Engineer both designing decentralized application architectures and developing Smart Contracts I am the ideal person with whom to consult - audit - develop your idea in an effective, efficient and secure way.
                    </Typography>

                    <Typography color="textPrimary" margin='0 0 20px 0'>
                        Now is the time to join this revolution and discover how blockchain technology can improve your life and your business. Be part of the innovation and join the present of decentralized software.
                    </Typography>
                    <HomeButtons />
                </Box>
            </JMariaBoxMobile>

            {/*Text box only shown on everything except mobile*/}
            <JMariaBoxPC className="JMariaInfoBlock" sx={{ display: { xs: 'none', lg: 'flex', xl: 'flex', md: 'flex', sm: 'flex' }, alignItems: 'center' }}>
                <CircularImage src="../assets/scrooge.png" sx={{ width: 200, height: 200, marginRight: '2rem' }} padding="0 50px 0 0" />
                <Box className="JMariaInfoText" padding="0 0 0 50px">
                    <Typography color="textPrimary">Blockchain Engineer - Smart Contract dev</Typography>
                    <Typography color='white' fontSize='40px' fontWeight='bold' margin='0 0 20px 0'>JMaria</Typography>
                    <Typography color="textPrimary" margin='0 0 20px 0'>
                        Blockchain protocols are changing the world by improving people's lives by offering transparency, security and decentralized transactions. All protocols are born from an idea and we all have ideas, but without the technical knowledge it is not possible to achieve the most important thing, to implement them.
                    </Typography>
                    <Typography color="textPrimary" margin='0 0 20px 0'>
                        Due to the hours dedicated to the theoretical study of blockchain technology and my experience as a Blockchain Engineer both designing decentralized application architectures and developing Smart Contracts I am the ideal person with whom to consult - audit - develop your idea in an effective, efficient and secure way.
                    </Typography>
                    <Typography color="textPrimary" margin='0 0 20px 0'>
                        Now is the time to join this revolution and discover how blockchain technology can improve your life and your business. Be part of the innovation and join the present of decentralized software.
                    </Typography>
                    <HomeButtons />
                </Box>
            </JMariaBoxPC>

            {/*ServicesBox*/}
            <Typography color="white" fontSize='20px' fontWeight='bold' margin="0 0 10px 150px">Services</Typography>
            <Divider />
            <StyledBox className="home-services-box" margin="20px 0 0 0" padding="0px 200px">
                <ServicesBox className="home-consulting-box" >
                    <Typography color="textSecondary" fontSize='25px' fontWeight='bold'>Consulting</Typography>
                    <Typography color="textPrimary" fontSize='15px' margin="0 0 20px 0" >Do you have an idea to develop but don't know what technical requirements you need?</Typography>
                    <Typography color="textPrimary" fontSize='15px' >We schedule a call where we discuss how to transform your idea into software, focusing on the Smart Contracts part. At the end of the call you will have a clear picture of what types of Smart Contracts and what Smart Contracts architecture will be needed.</Typography>
                </ServicesBox>
                <ServicesBox className="home-development-box">
                    <Typography color="textSecondary" fontSize='25px' fontWeight='bold'>Smart Contracts audits</Typography>
                    <Typography color="textPrimary" fontSize='15px' margin="0 0 30px 0" >Have you turned an idea into software (Smart Contracts) but still have doubts about its correct behavior? Reviewing your Smart Contracts by a third party is necessary to prevent vulnerabilities. This audit service is offered in two modalities.</Typography>
                    <Typography color="textPrimary" fontSize='15px' margin="0 0 10px 0"> Simple: The code is reviewed by searching for the existence of the most common vulnerabilities.</Typography>
                    <Typography color="textPrimary" fontSize='15px' >Complex: In addition of checking for vulnerabilities, custom developed scripts are used to test the operation of the code.</Typography>
                </ServicesBox>
                <ServicesBox className="home-auditing-box">
                    <Typography color="textSecondary" fontSize='25px' fontWeight='bold'>Smart Contracts development</Typography>
                    <Typography color="textPrimary" fontSize='15px' >After having a conversation with you about your idea and knowing that Smart Contracts are going to be needed, we start working on their implementation.</Typography>
                </ServicesBox>
            </StyledBox>

            {/*HireBox*/}
            <Typography color="white" fontSize='20px' fontWeight='bold' margin="0 0 0px 150px">Hire</Typography>
            <Divider />

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

            {/*ProductsBox*/}
            <Typography color="white" fontSize='20px' fontWeight='bold' margin="0 0 0px 150px">Products</Typography>
            <Divider />
            <ProductsPage />
        </Box >

    )

}

export default Home