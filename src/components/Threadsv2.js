import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Typography,
    Box,
} from '@material-ui/core';
import { categories } from './Utils/Tweetsjson';
import { TitleDivider, TitleBox, TitleTypography } from './Custom/CustomComponents'
import '../css/Threadsv2.css'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#222222',
        color: '#c9c7c7',
    },
    main: {
        flexGrow: 1,
        margin: "0 100px 50px 100px",
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            margin: "0 0 50px 0",
            flexDirection: 'column',
            alignItems: 'center'
        },
    },
    title: {
        flexGrow: 1,
    },
    drawer: {
        width: 240,
    },
    categoryTitle: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
        color: '#1B7BEC',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

    categoryButton: {
        width: '200px',
        backgroundColor: '#222222',
        borderColor: '#1B7BEC',
        '&:hover': {
            backgroundColor: '#4d4d4d',
        },
        [theme.breakpoints.down('sm')]: {
            margin: ' 0 0 0 20px',
        },
        color: 'primary' // add this line to set the button color to blue
    },
    tweet: {
        display: 'flex',
        alignItems: 'center',
        margin: theme.spacing(1, 0),
        color: '#c9c7c7',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    tweetCategory: {
        backgroundColor: '#c9c7c7',
        color: '#1B7BEC',
        padding: theme.spacing(0.5, 1),
        marginRight: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            marginBottom: theme.spacing(1),
            marginRight: 0,
        },
    },
    tweetLink: {
        alignItems: 'center',
        fontWeight: 'bold',
        underline: 'none',
        color: '#ffffff',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

    drawerPaper: {
        backgroundColor: '#e0e0e0',
        border: 'white',
        color: 'black',
        fontWeight: 'bold',
        fontSize: '10px'
    },

}));



function Threadsv2() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleDrawerOpen = () => {
        setOpen(e => !e);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        handleDrawerClose();
    };

    const handleAllClick = () => {
        window.location.href = '/threads';
    };

    const spainIcon = require("../assets/spain-icon.png")
    const usaIcon = require("../assets/usa-icon.png")

    return (
        <div className={classes.root}>
            <div className="ContactTitle" sx={{ margin: '50px 0 0 0' }}>
                <TitleDivider />
                <TitleBox>
                    <TitleTypography variant="h4" component="h1">
                        Twitter threads
                    </TitleTypography>
                    <Button className={classes.categoryButton} color="inherit" onClick={handleDrawerOpen}>
                        Categories
                    </Button>
                    <Typography fontSize="20px" className="subphrase">A recopilation of all my twitter threads related with blockchain dev and security research.</Typography>
                </TitleBox>
                <TitleDivider />
            </div>

            <Drawer
                className={classes.drawer}
                classes={{ paper: classes.drawerPaper }}
                variant="persistent"
                anchor="left"
                open={open}
                onClose={handleDrawerClose}
            >
                <List>
                    <ListItem
                        button
                        onClick={handleAllClick}
                    >
                        <ListItemText primary="SHOW ALL" />
                    </ListItem>
                    {categories.map((category) => (
                        <ListItem
                            button
                            key={category.name}
                            selected={selectedCategory === category}
                            onClick={() => handleCategoryClick(category)}
                        >
                            <ListItemText primary={category.name} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={classes.main} sx={{ alignItems: "center" }}>
                {selectedCategory ? (
                    <Box>
                        <Typography variant="h4" gutterBottom className={classes.categoryTitle}>
                            {selectedCategory.name}
                        </Typography>
                        {selectedCategory.tweets.map((tweet) => (
                            <Box className="tweetBox" key={tweet.link} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <Typography gutterBottom sx={{ position: 'absolute', margin: '0 0 0 -5px' }}>
                                    <a href={tweet.link} target="_blank" rel="noopener noreferrer" className={classes.tweetLink}>
                                        {tweet.title}
                                    </a>
                                </Typography>
                                <Box sx={{ display: "flex", alignItems: "center", position: 'absolute', margin: '-10px 0 0 0' }}>
                                    {tweet.language === "Spanish" && (
                                        <Box className="languageBox" sx={{ display: 'inline-block', width: 'fit-content' }}>
                                            <TitleTypography sx={{ display: 'inline-block', fontSize: '10px', margin: '-5px -40px 0 0', width: 'fit-content', color: '#A9A8A8' }}>
                                                Language:
                                            </TitleTypography>

                                            <img
                                                src={spainIcon}
                                                alt="Spain Flag"
                                                style={{ position: 'absolute', width: "20px", height: "auto", margin: "5px 0 0 45px", padding: '0 0 0 0' }}
                                            />
                                        </Box>
                                    )}
                                    {tweet.language === "English" && (
                                        <Box className="languageBox" sx={{ display: 'inline-block', width: 'fit-content' }}>
                                            <TitleTypography sx={{ display: 'inline-block', fontSize: '10px', margin: '-5px -40px 0 0', width: 'fit-content', color: '#A9A8A8' }}>
                                                Language:
                                            </TitleTypography>

                                            <img
                                                src={usaIcon}
                                                alt="Usa Flag"
                                                style={{ position: 'absolute', width: "20px", height: "auto", margin: "5px 0 0 45px", padding: '0 0 0 0' }}
                                            />
                                        </Box>
                                    )}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                ) : (
                    categories.map((category) => (
                        <Box className="categoryBox" key={category.name} sx={{ alignItems: "center" }}>
                            <Typography variant="h4" gutterBottom className={classes.categoryTitle}>
                                {category.name}
                            </Typography>
                            {category.tweets.map((tweet) => (
                                <Box className="tweetBox" key={tweet.link} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <Typography gutterBottom sx={{ position: 'absolute', margin: '0 0 0 -5px' }}>
                                        <a href={tweet.link} target="_blank" rel="noopener noreferrer" className={classes.tweetLink}>
                                            {tweet.title}
                                        </a>
                                    </Typography>
                                    <Box sx={{ display: "flex", alignItems: "center", position: 'absolute', margin: '-10px 0 0 0' }}>
                                        {tweet.language === "Spanish" && (
                                            <Box className="languageBox" sx={{ display: 'inline-block', width: 'fit-content' }}>
                                                <TitleTypography sx={{ display: 'inline-block', fontSize: '10px', margin: '-5px -40px 0 0', width: 'fit-content', color: '#A9A8A8' }}>
                                                    Language:
                                                </TitleTypography>

                                                <img
                                                    src={spainIcon}
                                                    alt="Spain Flag"
                                                    style={{ position: 'absolute', width: "20px", height: "auto", margin: "5px 0 0 45px", padding: '0 0 0 0' }}
                                                />
                                            </Box>
                                        )}
                                        {tweet.language === "English" && (
                                            <Box className="languageBox" sx={{ display: 'inline-block', width: 'fit-content' }}>
                                                <TitleTypography sx={{ display: 'inline-block', fontSize: '10px', margin: '-5px -40px 0 0', width: 'fit-content', color: '#A9A8A8' }}>
                                                    Language:
                                                </TitleTypography>

                                                <img
                                                    src={usaIcon}
                                                    alt="Usa Flag"
                                                    style={{ position: 'absolute', width: "20px", height: "auto", margin: "5px 0 0 45px", padding: '0 0 0 0' }}
                                                />
                                            </Box>
                                        )}
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    ))
                )}
            </main>
        </div >
    );
}

export default Threadsv2;
