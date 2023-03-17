import { Box, Typography, Link, Button, styled } from '@mui/material';
import { LinkedIn, Twitter, Mail } from '@mui/icons-material';

const ContactPage = () => {

    const TitleBox = styled(Box)(({ theme }) => ({
        backgroundColor: '#252525',
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

    const ContactTitle = () => {
        return (
            <div className="ContactTitle" sx={{ margin: '50px 0 0 0' }}>
                <TitleDivider />
                <TitleBox>
                    <TitleTypography variant="h4" component="h1">
                        Contact
                    </TitleTypography>
                </TitleBox>
                <TitleDivider />
            </div>
        );
    };



    return (
        <Box className="home-box" sx={{ backgroundColor: 'primary.main' }} margin="-25px 0 0 0">
            <ContactTitle></ContactTitle>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    height: '50vh',
                    backgroundColor: '#222222',
                    color: '#c9c7c7',
                    textAlign: 'center',
                    py: 5,
                    px: { xs: 2, sm: 5 },
                }}
            >
                <Typography variant="h4" sx={{ mb: 3, color: '#1B7BEC' }}>
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
                    sx={{ mt: 3, backgroundColor: '#c9c7c7', color: '#1B7BEC' }}
                    href="mailto:0xdevscrooge@gmail.com"
                >
                    Send message
                </Button>
            </Box>
        </Box>
    );
};

export default ContactPage;
