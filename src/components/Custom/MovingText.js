import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStylesPc = makeStyles((themeMoving) => ({
    movingText: {
        color: 'yellow',
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 'bold',
        fontSize: '20px',
        marginBottom: themeMoving.spacing(2),
        padding: '20px 0 0 0',
        textAlign: 'left',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        animation: '$slideLeftToRight 20s linear infinite',

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

const useStylesMobile = makeStyles((themeMoving) => ({
    movingText: {
        color: 'yellow',
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 'bold',
        fontSize: '15px',
        marginBottom: themeMoving.spacing(2),
        padding: '20px 0 0 0',
        textAlign: 'left',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        animation: '$slideLeftToRight 10s linear infinite',
    },
    '@keyframes slideLeftToRight': {
        '0%': {
            transform: 'translateX(90%)',
        },
        '100%': {
            transform: 'translateX(0%)',
        },
    },
}));

export const MovingTextPc = ({ text, size }) => {
    const classes = useStylesPc();
    return (
        <Typography className={classes.movingText}>
            {text}
        </Typography>
    );
};

export const MovingTextMobile = ({ text, size }) => {
    const classes = useStylesMobile();
    return (
        <Typography className={classes.movingText}>
            {text}
        </Typography>
    );
};

