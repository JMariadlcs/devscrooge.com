import { Box, useMediaQuery, useTheme } from "@mui/material"
import { ArticlesTittle } from "./Custom/CustomComponents";
import { articles } from './ArticlesHelpers.js/Articles'
import ArticleCard from "./ArticlesHelpers.js/ArticleCard";
import ArticleDeepLink from "./ArticlesHelpers.js/ArticleDeepLink";

const ArticlesPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box className="home-box" sx={{ background: 'radial-gradient(circle, #000000, #0e0006, #130012, #11001c, #010127)', padding: !isMobile ? '0 50px 10px 50px' : '0 0px 10px 0px'  }} margin="-25px 0 0 0" padding='0 0px 10px 0px' >
            <ArticlesTittle />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row', // Use column on mobile, row on larger screens
                    width: !isMobile ? '70%' : 'auto',
                    justifyContent: 'space-between',
                }}
            >
                <ArticleDeepLink />
                {articles?.map(article => (
                    <ArticleCard article={article} key={article.id} />
                ))}
            </Box>

        </Box>

    )
}

export default ArticlesPage;