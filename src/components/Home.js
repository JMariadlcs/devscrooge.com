import { Box, Typography, Divider } from "@mui/material"
import { JMariaBoxPC, JMariaBoxMobile } from "./Custom/CustomComponents"
import CircularImage from './Utils/HomeImage'
import HomeButtons from './Utils/HomeButtons'
import HireComponent from "./subcomponents/HireComponent";
import LearningResourcesComponent from "./subcomponents/LearningResourcesComponent"
import { MovingTextPc } from "./Custom/MovingText";

const Home = () => {

    return (
        <Box className="home-box" sx={{ background: 'radial-gradient(circle, #000000, #0f0109, #140415, #130920, #03102c)' }} padding="0 0 20px 0">
            {/*Text box only shown on mobile*/}
            <JMariaBoxMobile className="JMariaInfoBlock">
                <CircularImage src="../assets/scrooge.png" sx={{ width: 20, height: 20, marginRight: '2rem', marginLeft: '2rem' }} padding="0 50px 0 0" />
                <Box className="JMariaInfoText" sx={{ padding: '50px ' }}>
                    <Typography color="textPrimary">Blockchain Security Researcher and Engineer</Typography>
                    <Typography color='white' fontSize='40px' fontWeight='bold' margin='0 0 20px 0'>devScrooge</Typography>
                    <Typography color="textPrimary" margin='0 0 20px 0' fontSize='15px'>
                        Blockchain protocols are changing the world by improving people's lives by offering transparency, security and decentralized transactions. All protocols are born from an idea and we all have ideas, but without the technical knowledge it is not possible to achieve the most important thing, to implement them.
                    </Typography>
                    <Typography color="textPrimary" margin='0 0 20px 0' fontSize='15px'>
                        Due to the hours dedicated to the theoretical study of blockchain technology and my experience as a Blockchain Engineer both designing decentralized application architectures and developing Smart Contracts I am the ideal person with whom to consult - audit - develop your idea in an effective, efficient and secure way.
                    </Typography>
                    <HomeButtons />
                </Box>
            </JMariaBoxMobile>

            {/*Text box only shown on everything except mobile*/}
            <MovingTextPc text={"HIRE A PROFESSIONAL AUDIT FOR SECURING YOUR PROTOCOL!! Twitter DM: @devScrooge"} />
            <JMariaBoxPC className="JMariaInfoBlock" sx={{ display: { xs: 'none', lg: 'flex', xl: 'flex', md: 'flex', sm: 'flex' }, alignItems: 'center' }}>
                <CircularImage src="../assets/scrooge.png" sx={{ width: 100, height: 100, marginRight: '2rem' }} padding="0 50px 0 0" />
                <Box className="JMariaInfoText" padding="0 0 0 50px">
                    <Typography color="textPrimary">Blockchain Security Researcher and Engineer</Typography>
                    <Typography color='white' fontSize='40px' fontWeight='bold' margin='0 0 20px 0'>devScrooge</Typography>
                    <Typography color="textPrimary" margin='0 0 20px 0' fontSize='15px'>
                        Blockchain protocols are changing the world by improving people's lives by offering transparency, security and decentralized transactions. All protocols are born from an idea and we all have ideas, but without the technical knowledge it is not possible to achieve the most important thing, to implement them.
                    </Typography>
                    <Typography color="textPrimary" margin='0 0 20px 0 ' fontSize='15px'>
                        Due to the hours dedicated to the theoretical study of blockchain technology and my experience as a Blockchain Engineer both designing decentralized application architectures and developing Smart Contracts I am the ideal person with whom to consult - audit - develop your idea in an effective, efficient and secure way.
                    </Typography>
                    <HomeButtons />
                </Box>
            </JMariaBoxPC>


            <Typography color="white" fontSize='20px' fontWeight='bold' margin="0 0 0px 150px">Hire</Typography>
            <Divider />
            <HireComponent/>

            <Typography color="white" fontSize='20px' fontWeight='bold' margin="0 0 0px 150px">Security resources</Typography>
            <Divider />
            <LearningResourcesComponent/>
        </Box >

    )

}

export default Home