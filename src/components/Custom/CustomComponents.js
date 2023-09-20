import { Box, Menu, styled, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

// Navbar components

export const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

export const MenuPC = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
    },
}));


export const MenuMobile = styled(Menu)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "none",
    },
}));

// Home

export const JMariaBoxPC = styled(Box)(({ theme }) => ({
    padding: "100px 30px 50px 50px",
    [theme.breakpoints.up("xl")]: {
        padding: "50px 200px 20px 300px",
        display: "none",
    },
}));

export const JMariaBoxMobile = styled(Box)(({ theme }) => ({
    padding: "50px 0 0 0",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flexDirection: 'column',
    [theme.breakpoints.up("sm")]: {
        display: "none",
    },
}));

export const ServicesBox = styled(Box)(({ theme }) => ({
    display: "block",
    alignItems: 'left',
    direction: "row",
    [theme.breakpoints.down("sm")]: {
        flexDirection: 'column',
        padding: "0px",
    },
    padding: "0  50px 0px 50px",
    margin: "0 0 50px 0"
}));

export const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        padding: '50px'
    },
    [theme.breakpoints.down('lg')]: {
        flexDirection: 'column',
        padding: '50'
    },
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0, 20px, 0, 20px',
    flexWrap: 'wrap',
}));


// Services 

export const TitleBox = styled(Box)(({ theme }) => ({
    backgroundColor: '#2b2b2b',
    color: '#FFFFFF',
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '200px', // set the height to be larger than text height
    margin: '-5px 0 0 0'
}));

const ArticleBox = styled(Box)(({ theme }) => ({
    backgroundColor: "#2b2b2b",
    color: "#FFFFFF",
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center", // Add this line to center the content horizontally
    height: '150px', // set the height to be larger than text height
}));

export const TitleTypography = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    textAlign: 'left',
}));

export const AnnounceText = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    fontSize: '20px',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    textAlign: 'left',
}));

export const TitleDivider = styled(Box)(({ theme }) => ({
    background: 'radial-gradient(circle, #000000, #0e0006, #130012, #11001c, #010127)',
    borderBottom: `1px solid ${theme.palette.divider}`,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
}));

export const ServiceTitle = () => {
    return (
        <div className="servicesTittle"  sx={{ margin: '50px 0 0 0', height: '50px' }}>
            <TitleDivider />
            <TitleBox height= '50px' sx={{background: 'radial-gradient(circle, #000000, #0e0006, #130012, #11001c, #010127)' }}>
                <TitleTypography variant="h4" component="h1">
                    Services
                </TitleTypography>
                <Typography variant="body1">
                    The prices for all services are custom-designed in a specialized way
                    for each project depending on its size and complexity. A quotation
                    will be given after contact.
                </Typography>
            </TitleBox>
            <TitleDivider />
        </div>
    );
};

export const ArticlesTittle = () => {
    return (
        <div className="ArticlesTittle" sx={{ margin: '50px 0 0 0' }}>
            <TitleDivider />
            <ArticleBox sx={{background: 'radial-gradient(circle, #000000, #0e0006, #130012, #11001c, #010127)' }}>
                <AnnounceText >
                    Subscribe to my official Medium Page!
                </AnnounceText>
                <Button variant="contained" href={"https://medium.com/@devscrooge"} target="_blank" s sx={{
                    borderRadius: 2,
                    border: '2px solid yellow',

                    boxShadow: '0px 0px 20px 1px rgba(255, 255, 255, 0.2)',
                    margin: '0 0 10px 0'
                }}>
                    Subscribe
                </Button>
            </ArticleBox>
            <TitleDivider />
        </div>
    );
};

export const ShortCutDeepDives = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/deepdives');
        window.scrollTo(0, 0);
    }
    return (
        <div className="ArticlesTittle" sx={{ margin: '50px 0 0 0' }}>
       
            <ArticleBox>
                <AnnounceText >
                    Learn the most common blockchain vulnerabilities
                </AnnounceText>
                <Typography>
                    Access 'Deep Dives' and learn in deep about Slippage, Oracle Manipulation, Signature Malleability...
                </Typography>
                <Button variant="contained" onClick={handleClick} s sx={{
                    borderRadius: 2,
                    border: '2px solid yellow',

                    boxShadow: '0px 0px 20px 1px rgba(255, 255, 255, 0.2)',
                    margin: '0 0 10px 0'
                }}>
                    ACCESS
                </Button>
            </ArticleBox>
          
        </div>
    );
}


// Products 

export const ProductsTitle = () => {
    return (
        <div className="servicesTittle" sx={{ margin: '50px 0 0 0' }}>
            <TitleDivider />
            <TitleBox>
                <TitleTypography variant="h4" component="h1">
                    Products
                </TitleTypography>
                <Typography variant="body1">
                    Each product can be paid with Credit Card, PayPal or with Crypto!
                </Typography>
            </TitleBox>
            <TitleDivider />
        </div>
    );
};

// Contact 

export const ContactTitle = () => {
    return (
        <div className="ContactTitle" sx={{ margin: '0px 0 0 0' }}>
            <TitleBox sx={{ background: 'radial-gradient(circle, #000000, #0e0006, #130012, #11001c, #010127)'}}>
                <TitleTypography variant="h4" component="h1">
                    Contact
                </TitleTypography>
            </TitleBox>
        </div>
    );
};

