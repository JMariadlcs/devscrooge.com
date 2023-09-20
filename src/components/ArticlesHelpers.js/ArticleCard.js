import { Box, Typography, styled, Button } from "@mui/material"
import { StyledBox } from "../Custom/CustomComponents";
import { BannerMedium } from "../Utils/MediumBanner";

const ArticleCard = (article) => {
    console.log("Articles", article.Tittle)
    const ArticleBox = styled(Box)(({ theme }) => ({
        alignItems: 'center',
        backgroundColor: 'secondary.main',
        border: '1px solid #6F005B',
        boxShadow: '0px 0px 20px 1px #6F005B',
        flexGrow: '0',
        flexDirection: 'column',
        margin: '10px',
        height: '100%',
        maxWidth: '25%',
        padding: '0 10px 0 10px',
        width: '100%',
        borderRadius: 10,
        [theme.breakpoints.down('lg')]: {
            flexDirection: 'column',
            height: 'fit-content',
            margin: '50px 0px 10px 0px',
            padding: '0 20px 20px 20px',
            maxWidth: '80%',
            width: '500px',
        },
        '&:hover': {
            boxShadow: '0px 0px 30px 3px #6F005B',
            transform: 'translateY(-5px)',
        },
    }));

    return (
        <StyledBox className="home-hire-box" margin="20px 0 100px 0" padding="0px 200px sx={{ background: 'radial-gradient(circle, #000000, #0e0006, #130012, #11001c, #010127)', height: '100%' }}">

            <ArticleBox className="home-buy-code4arena101-box">

                <Typography variant="h5" component="h2" gutterBottom margin='30px 0 20px 0' align="center" alignSelf="center" fontWeight='bold' color='yellow' sx={{ textShadow: "#FC0 1px 0 10px" }}>
                    {article.article.Tittle}
                </Typography>
                <BannerMedium src={article.article.Image} />
                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <Button variant="contained" href={article.article.Link} target="_blank" s sx={{
                        borderRadius: 2,
                        border: '1px solid #6F005B',
                        boxShadow: '0px 0px 20px 1px #6F005B',
                        margin: '0 5px 0 0'
                    }}>
                        Read
                    </Button>


                    <Box sx={{ ml: 2, margin: '0 0 10px 0' }} >
                        <Typography color="textPrimary" variant="body1" component="p" gutterBottom margin="20px 0 10px 0">
                            <span style={{ color: 'white' }}></span>  {article.article.Text}
                        </Typography>
                    </Box>
                </Box>

            </ArticleBox>


        </StyledBox>

    )
}

export default ArticleCard