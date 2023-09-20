import { Box } from "@mui/material"
import { ServiceTitle } from "./Custom/CustomComponents";
import HireComponent from "./subcomponents/HireComponent";

const ServicesPage = () => {

    return (
        <Box className="home-box" sx={{ background: 'radial-gradient(circle, #000000, #0e0006, #130012, #11001c, #010127)' }} margin="-25px 0 0 0" padding='0 0 10px 0'>
            <ServiceTitle />
            <HireComponent/>
        </Box>
    )
}

export default ServicesPage