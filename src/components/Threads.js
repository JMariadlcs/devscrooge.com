import { Box, Typography } from '@mui/material';

const ThreadsPage = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#2b2b2b',
                height: '85vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Typography
                variant="h1"
                sx={{ color: '#c9c7c7', textAlign: 'center' }}
            >
                Coming Soon
            </Typography>
        </Box>
    );
};

export default ThreadsPage;