import { Box, useMediaQuery, useTheme } from "@mui/material"
import { PortfolioTittle } from "./Custom/CustomComponents";
import { audits } from './PortfolioHelpers/AuditReports'
import AuditCard from './PortfolioHelpers/AuditCard'

const PortfolioPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box className="home-box" sx={{ background: 'radial-gradient(circle, #000000, #0e0006, #130012, #11001c, #010127)', padding: !isMobile ? '0 50px 10px 50px' : '0 0px 10px 0px'  }} margin="-25px 0 0 0" padding='0 0px 10px 0px' >
            <PortfolioTittle />
            <Box className="articles-container"
                sx={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row', 
                    width: !isMobile ? '100%' : 'auto',
                    overflow: 'hidden',
                    flexWrap: !isMobile ? 'wrap': 'auto', // Allow items to wrap to the next row
                    maxWidth: '100%', // Set a maximum width to force items to wrap
                }}
            >
                {audits?.map(audit => (
                    <AuditCard audit={audit} />
                ))}
            </Box>

        </Box>

    )
}

export default PortfolioPage;