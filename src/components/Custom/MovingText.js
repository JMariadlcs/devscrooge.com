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
        textAlign: 'center',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        border: 'none'
    },
    slideLeftToRight: {
        animation: '$slideLeftToRightPc 20s linear infinite',
    },
    '@keyframes slideLeftToRightPc': {
        '0%': {
            transform: 'translateX(-75%)',
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
        border: 'none'
    },
    slideLeftToRight: {
        animation: '$slideLeftToRightMobile 10s linear infinite',
    },
    '@keyframes slideLeftToRightMobile': {
        '0%': {
            transform: 'translateX(90%)',
        },
        '100%': {
            transform: 'translateX(0%)',
        },
    },
}));

export const MovingTextPc = ({ text }) => {
    const classes = useStylesPc();
    return (
        <Typography className={`${classes.movingText} ${classes.slideLeftToRight} custom-moving-text`}>
            {text}
        </Typography>
    );
};

export const MovingTextMobile = ({ text }) => {
    const classes = useStylesMobile();
    return (
        <Typography className={`${classes.movingText} ${classes.slideLeftToRight} custom-moving-text`}>
            {text}
        </Typography>
    );
};