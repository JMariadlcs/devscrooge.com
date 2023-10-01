import { Button, Box } from '@mui/material';
// import CV from '../../Documents/CV.pdf'

/* const blueButtonStyle = {
    color: 'white',
    backgroundColor: '#424242',
    borderColor: '#1B7BEC',
    borderRadius: '20px',
    margin: '10px'
}; */

const whiteButtonStyle = {
    color: 'white',
    backgroundColor: '#424242',
    borderColor: 'white',
    borderRadius: '20px',
    margin: '10px'
};

const HomeButtons = () => {
    const email = '0xjmariadelacruz@gmail.com';

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {/*<Button
                variant="outlined"
                href={CV}
                target="_blank"
                style={blueButtonStyle}
            >
                Download CV
            </Button>*/}
            <Button
                variant="outlined"
                href={`mailto:${email}`}
                target="_blank"
                style={whiteButtonStyle}
            >
                Contact
            </Button>
        </Box>
    );
};

export default HomeButtons;