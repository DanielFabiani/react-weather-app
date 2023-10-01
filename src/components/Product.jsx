import styled from "@emotion/styled";
import { Box, Button, Paper, Typography } from "@mui/material";

export const Product = () => {
  const Img = styled("img")({
    // nos deja crear elementos
    // recibe como primer argumento el tag de html que vamos a estilar
    width: 200,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  });

  return (
    <>
      <Typography variant="h5">Componente con Paper</Typography>
      {/* paper genera una pseudo card  */}
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 3,
          overflow: "hidden",
          my: 4, //centra el propio contenedor
          mx: "auto", //centra el propio contenedor
          backgroundColor: "#d5cde3",
          width: "60%",
        }}
      >
        <Img
          src="https://picsum.photos/200"
          alt="imagen"
        />
        <Box sx={{ flexGrow: 1, display: "grid", gap: 3 }}>
          <Typography
            variant="h4"
            //marginY={1}
          >
            Product name:
          </Typography>
          <Typography
            variant="body1"
            //marginY={1}
          >
            Product description:
          </Typography>
          <Button
            variant="contained"
            //sx={{ mt: 4 }}
          >
            Add card
          </Button>
        </Box>
        <Box
          sx={{ m: 3 }}
          component="p"
        >
          $19.99
        </Box>
      </Paper>
    </>
  );
};
