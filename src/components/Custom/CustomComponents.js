import { Box, Menu, styled, Toolbar, Typography } from "@mui/material";

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
    padding: "100px 30px 100px 50px",
    [theme.breakpoints.up("xl")]: {
        padding: "100px 300px 100px 500px",
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
    padding: '0px 200px 50px 200px',
    flexWrap: 'wrap',
    margin: '0'
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
    margin: '50px 0 0 0'
}));

export const TitleTypography = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    textAlign: 'left',
}));

export const TitleDivider = styled(Box)(({ theme }) => ({
    backgroundColor: '#252525',
    borderBottom: `1px solid ${theme.palette.divider}`,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
}));

export const ServiceTitle = () => {
    return (
        <div className="servicesTittle" sx={{ margin: '50px 0 0 0' }}>
            <TitleDivider />
            <TitleBox>
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

