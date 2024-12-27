import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../cartSlice";

const products = [];

const AddToCart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  // Recalculate total price whenever cart changes or quantity changes
  useEffect(() => {
    const calculatedTotalPrice = cart.reduce(
      (sum, itemProduct) => sum + itemProduct.price * itemProduct.quantity,
      0
    );
    setTotalPrice(calculatedTotalPrice); // Update total price when cart changesF
  }, [cart]); // Dependency on cart to re-run when cart updates

  const cartContent = () => (
    <Box
      sx={{
        width: 450,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ color: "#019376", fontWeight: "bold" }}>
          <ShoppingBagIcon sx={{ marginRight: "5px" }} />
          {cart.length} Item(s)
        </Typography>
        <IconButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <hr />
      <Box sx={{ flexGrow: 1 }}>
        {cart.length > 0 ? (
          cart.map((product) => (
            <Box
              key={product.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #ddd",
                py: 1,
              }}
            >
              <Typography sx={{ fontWeight: "bold" }}>
                {product.price}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button
                  sx={{ minWidth: 30, height: 30 }}
                  variant="outlined"
                  onClick={() => dispatch(decreaseQuantity(product.id))}
                >
                  -
                </Button>
                <Typography sx={{ mx: 1, fontWeight: "bold" }}>
                  {product.quantity}
                </Typography>
                <Button
                  sx={{ minWidth: 30, height: 30 }}
                  variant="outlined"
                  onClick={() => dispatch(increaseQuantity(product.id))}
                >
                  +
                </Button>
              </Box>
              <Typography
                sx={{ color: "#019376", fontWeight: "bold", fontSize: "14px" }}
              >
                ${product.price} x {product.quantity} = $
                {product.price * product.quantity}
              </Typography>
              <IconButton
                onClick={() => dispatch(removeFromCart(product.id))}
                sx={{ color: "red" }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          ))
        ) : (
          <Typography
            variant="body1"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            No products in the cart
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          borderTop: "1px solid #ddd",
        }}
      >
        <Button
          variant="contained"
          sx={{
            flexGrow: 1,
            backgroundColor: "#009688",
            justifyContent: "space-between",
            borderRadius: "30px",
            py: "10px",
          }}
        >
          Checkout
          <Typography
            sx={{
              color: "#009688",
              fontWeight: "bold",
              fontSize: "12px",
              background: "white",
              py: "10px",
              borderRadius: "20px",
              px: "18px",
            }}
          >
            ${totalPrice}
          </Typography>
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, p: 3 }}>
      {products.map((product) => {
  // Log the product image URL and check if it's correct
  console.log("Product", product);

  return (
    <Card key={product.id} sx={{ width: 300 }}>
      <CardContent>
        <img
          src={product.img}
          alt={product.title} // Providing meaningful alt text
          style={{
            width: "100%", // Ensuring the image fits the card width
            height: "auto", // Keeping aspect ratio intact
            objectFit: "cover", // Cover the image space without distortion
          }}
        />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {product.title}
        </Typography>
        <Typography variant="body1" sx={{ color: "#019376" }}>
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
})}
      </Box>

      <Button
        sx={{ position: "fixed", top: "50%", right: "10px", zIndex: 1000 }}
        onClick={() => setDrawerOpen(true)}
        variant="contained"
      >
        <ShoppingBagIcon />
        {cart.length} Item(s)
      </Button>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {cartContent()}
      </Drawer>
    </Box>
  );
};

export default AddToCart;
