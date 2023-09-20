import { Box } from "@mui/material"
import { ArticlesTittle } from "./Custom/CustomComponents";
import { articles } from './ArticlesHelpers.js/Articles'
import ArticleCard from "./ArticlesHelpers.js/ArticleCard";
import ArticleDeepLink from "./ArticlesHelpers.js/ArticleDeepLink";

const ArticlesPage = () => {

    return (
        <Box className="home-box" sx={{ background: 'radial-gradient(circle, #000000, #0e0006, #130012, #11001c, #010127)'}} margin="-25px 0 0 0" padding='0 0 10px 0' >
            <ArticlesTittle />
            <Box  sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <ArticleDeepLink />
            {articles?.map(article => (
            <ArticleCard article={article} />
            ))}
            </Box>
        </Box>
    )
}

export default ArticlesPage