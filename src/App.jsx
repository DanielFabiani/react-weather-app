import { Box, Button, Container, Typography } from "@mui/material";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";

import GridComponent from "./components/GridComponent";
import { Product } from "./components/Product";
import MuiCard from "./components/MuiCard";

function App() {
  return (
    <>
      <Container maxWidth="xl">
        <h1>App</h1>
        <Typography
          variant="h1"
          component="h2"
        >
          Titulo 1
        </Typography>
        <Typography
          variant="h2"
          component="h2"
        >
          Titulo 2
        </Typography>

        <Box sx={{ border: 2, mt: 2 }}>
          <Typography
            variant="body1"
            textAlign="center"
            p={2}
            color="primary"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            corrupti explicabo magni quia a nisi, nobis expedita assumenda enim
            animi tempore possimus similique, soluta tenetur rem deleniti non
            deserunt molestiae.
          </Typography>
        </Box>

        <Button
          variant="outlined"
          color="warning"
        >
          El primer boton
        </Button>
        <Button
          variant="contained"
          color="success"
        >
          El primer boton
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          endIcon={<AccountCircleTwoToneIcon />}
        >
          El tercer boton
        </Button>
      </Container>

      <GridComponent />

      <hr />

      <Product />

      <hr />

      <MuiCard />
    </>
  );
}

export default App;
