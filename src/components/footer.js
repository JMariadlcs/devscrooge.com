import { Box, Typography } from '@mui/material';
import { LinkedIn, Twitter, GitHub, Mail } from '@mui/icons-material';

const FooterComponent = () => {
    return (
        <Box sx={{
            bgcolor: '#222222',
            boxShadow: '0px -5px 5px rgba(0, 0, 0, 0.2)',
            py: 3,
            px: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
        }}>
            <Typography variant="body2" sx={{ color: 'white' }}>
                Connect with me on:
            </Typography>
            <Box sx={{ mt: 1 }}>
                <LinkedIn
                    sx={{ mr: 1, cursor: 'pointer', color: 'white' }}
                    onClick={() => window.open('https://www.linkedin.com/in/jmariadlcs')}
                />
                <Twitter
                    sx={{ mr: 1, cursor: 'pointer', color: 'white' }}
                    onClick={() => window.open('https://twitter.com/devscrooge')}
                />
                <GitHub
                    sx={{ mr: 1, cursor: 'pointer', color: 'white' }}
                    onClick={() => window.open('https://github.com/jmariadlcs')}
                />
                <Mail
                    sx={{ cursor: 'pointer', color: 'white' }}
                    onClick={() => window.open('mailto:0xdevscrooge@gmail.com')}
                />
            </Box>
        </Box>
    );
};

export default FooterComponent