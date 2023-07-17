import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    movingText: {
        fontWeight: 'bold',
        fontSize: '20px',
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
        textAlign: 'left',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        animation: '$slideLeftToRight 5s linear infinite',
    },
    '@keyframes slideLeftToRight': {
        '0%': {
            transform: 'translateX(0%)',
        },
        '100%': {
            transform: 'translateX(100%)',
        },
    },
}));

const MovingText = ({ text }) => {
    const classes = useStyles();
    return (
        <Typography className={classes.movingText}>
            {text}
        </Typography>
    );
};

export default MovingText;