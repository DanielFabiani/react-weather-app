import { Container, Grid } from "@mui/material";

const GridComponent = () => {
  return (
    <>
      <Container>
        <Grid
          container
          spacing={4} /* espaciado entre columnas */
        >
          {/* grid viene por defecto en 12 columnas */}
          <Grid
            item
            xs={
              12
            } /* tamaños de breakpoint para decir la cantidad de columnas que va a ocupar */
            sm={6}
            md={4}
            align="justify"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              porro dolorum distinctio quod eaque voluptatum voluptate iure
              consequatur dolorem officiis exercitationem odit, sed eligendi
              tenetur eveniet magni eos suscipit repellendus!
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            align="justify"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              porro dolorum distinctio quod eaque voluptatum voluptate iure
              consequatur dolorem officiis exercitationem odit, sed eligendi
              tenetur eveniet magni eos suscipit repellendus!
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            align="justify"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              porro dolorum distinctio quod eaque voluptatum voluptate iure
              consequatur dolorem officiis exercitationem odit, sed eligendi
              tenetur eveniet magni eos suscipit repellendus!
            </p>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default GridComponent;
