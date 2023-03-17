import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(50),
        height: theme.spacing(50),
        border: `10px solid rgba(2, 124, 236, 1)`,
        boxShadow: theme.shadows[10],
        [theme.breakpoints.down('sm')]: {
            border: `7px solid rgba(2, 124, 236, 1)`,
            display: 'flex',
            width: theme.spacing(40),
            height: theme.spacing(40),
        },
        [theme.breakpoints.down('xs')]: {
            border: `7px solid rgba(2, 124, 236, 1)`,
            display: 'flex',
            width: theme.spacing(25),
            height: theme.spacing(25),
        },
    },
}));

const CircularImage = ({ src }) => {
    const classes = useStyles();

    const image1 = require("../assets/photo.png")
    const image2 = require("../assets/scrooge2.png")
    const [image, setImage] = useState(image1)

    return (
        <Avatar alt="Image" src={image} className={classes.avatar}
            onMouseEnter={() => setImage(image2)}
            onMouseLeave={() => setImage(image1)} />
    );
};

export default CircularImage;


