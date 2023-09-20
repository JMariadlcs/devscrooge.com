import { Box, Typography, Link, Button } from '@mui/material';
import { LinkedIn, Twitter, Mail } from '@mui/icons-material';
import { ContactTitle } from "./Custom/CustomComponents"

const ContactPage = () => {


    return (
        <Box height="100%" className="home-box" sx={{ backgroundColor: 'primary.main' }} margin="-25px 0 0 0">
            <ContactTitle></ContactTitle>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    minHeight: '70vh',
                    width: '100%',
                    background: 'radial-gradient(circle, #000000, #0e0006, #130012, #11001c, #010127)',
                    color: '#c9c7c7',
                    textAlign: 'center',
                    py: 5,
                    px: { xs: 2, sm: 5 },
                }}
            >
                <Typography variant="h4" sx={{ mb: 3, color: 'yellow', textShadow:"#FC0 1px 0 10px" }}>
                    How can I help you?
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LinkedIn
                        sx={{ mr: 1 }}
                        fontSize="large"
                    />
                    <Typography variant="body1" sx={{ mr: 2 }}>
                        You can contact me on LinkedIn:
                    </Typography>
                    <Link
                        href="https://www.linkedin.com/in/jmariadlcs"
                        target="_blank"
                        rel="noopener"
                        underline="hover"
                        sx={{ color: '#c9c7c7' }}
                    >
                        linkedin.com/in/your-profile-url
                    </Link>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
                    <Twitter
                        sx={{ mr: 1 }}
                        fontSize="large"
                    />
                    <Typography variant="body1" sx={{ mr: 2 }}>
                        You can contact me on Twitter:
                    </Typography>
                    <Link
                        href="https://twitter.com/devScrooge"
                        target="_blank"
                        rel="noopener"
                        underline="hover"
                        sx={{ color: '#c9c7c7' }}
                    >
                        @devScrooge
                    </Link>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
                    <Mail
                        sx={{ mr: 1 }}
                        fontSize="large"
                    />
                    <Typography variant="body1" sx={{ mr: 2 }}>
                        You can send me an email:
                    </Typography>
                    <Link
                        href="mailto:0xdevscrooge@gmail.com"
                        underline="hover"
                        sx={{ color: '#c9c7c7' }}
                    >
                        0xdevscrooge@gmail.com
                    </Link>
                </Box>
                <Button
                    variant="contained"
                    sx={{
                        color: 'white',
                        backgroundColor: '#37001C',
                        border: '1px solid #6F005B',
                        boxShadow: '0px 0px 20px 1px #6F005B',
                        borderRadius: '20px',
                        margin: '30px'
                    }}
                    href="mailto:0xdevscrooge@gmail.com"
                >
                    Send message
                </Button>
            </Box>
        </Box>
    );
};

export default ContactPage
