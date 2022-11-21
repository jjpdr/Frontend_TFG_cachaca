import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const CardInfo = styled(CardContent)(({ theme }) => ({
  "&:last-child": {
    paddingBottom: theme.spacing(2),
  },
}));

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="350"
          image={`${BACKEND_URL}/products/image/${product.image}`}
          alt={product.name}
        />
      </Box>

      <CardInfo>
        <Typography variant="h6" gutterBottom component="div">
          {product.name}
        </Typography>

        <Typography mb={0} variant="subtitle1" gutterBottom component="div">
          R$ {product.price.toFixed(2)}
        </Typography>
      </CardInfo>
    </Card>
  );
};

export default ProductCard;
