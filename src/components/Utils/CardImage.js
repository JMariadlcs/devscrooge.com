import { CardMedia } from "@mui/material";

export const CardImage = ({ src }) => {
    let image
    if (src === 'medium0') {
        image = require("../../img/articles/funding-rate.png")
    } else if (src === 'medium1') {
        image = require("../../img/articles/vrf.png")
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CardMedia
                component="img"
                alt="Image"
                image={image}
                style={{ height: '100%', width: '100%', objectFit: 'contain', margin: '0 0 20px 0' }}
            />
        </div>
    );
};