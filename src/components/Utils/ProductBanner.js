import { CardMedia } from "@mui/material";

export const BannerProduct = ({ src }) => {
    let image
    if (src === 'code4arena') {
        image = require("../../img/products/code4arena101.png")
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CardMedia
                component="img"
                alt="Image"
                image={image}
                style={{ height: '200px', width: '300px', objectFit: 'contain', margin: '0 0 20px 0' }}
            />
        </div>
    );
};