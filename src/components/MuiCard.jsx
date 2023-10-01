import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const MuiCard = () => {
  return (
    <>
      <Typography variant="h5">Componente con MUI Card</Typography>
      <Card
        sx={{
          maxWidth: 545,
          my: 5,
          mx: "auto",
          transition: "0.2s",
          "&:hover": { transform: "scale(1.05)" },
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://picsum.photos/600"
            sx={{ height: 200 }}
            alt="La imagen"
          />
          <CardContent>
            <Typography variant="h5">Card Title</Typography>
            <Typography
              variant="body2"
              component="p"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Deleniti, iusto obcaecati minima repudiandae facere rem enim
              deserunt qui dignissimos molestiae ex dolores dolore. Dolor nobis
              culpa repudiandae odio nesciunt? Earum.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained">Add</Button>
          <Button color="error">Remove</Button>
        </CardActions>
      </Card>
    </>
  );
};
export default MuiCard;
