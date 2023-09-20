import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Avatar, styled } from "@mui/material";


const useStyles = makeStyles((theme) => ({
    avatar: {
        border: `10px solid yellow`,
        boxShadow: '#FC0 1px 0 10px',
        [theme.breakpoints.down('sm')]: {
            border: `7px solid rgba(2, 124, 236, 1)`,
            display: 'flex',
        },
        [theme.breakpoints.down('xs')]: {
            border: `7px solid rgba(2, 124, 236, 1)`,
            display: 'flex',
        },
    },
}));


const AvatarCustom = styled(Avatar)(({ theme }) => ({
    height: '200px', width: '200px',
    [theme.breakpoints.down('sm')]: {
        display: 'flex',
        height: '100px', width: '100px'
    },
    [theme.breakpoints.down('xs')]: {
        display: 'flex',
        height: '50px', width: '50px'
    },
}));

const CircularImage = ({ src }) => {

    const classes = useStyles();

    const image1 = require("../../assets/scrooge2.png")
    const image2 = require("../../assets/photo.png")
    const [image, setImage] = useState(image1)

    return (
        <AvatarCustom alt="Image" src={image} className={classes.avatar}
            onMouseEnter={() => setImage(image2)}
            onMouseLeave={() => setImage(image1)} />
    );
};

export default CircularImage;


