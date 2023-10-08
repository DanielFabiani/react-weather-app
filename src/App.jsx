import { useState } from "react";

import { Box, Container, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const API_WEATHER = `https://api.weatherapi.com/v1/current.json?key=${
  import.meta.env.VITE_API_KEY
}&q=`;

const App = () => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temp: "",
    condition: "",
    icon: "",
    conditionText: "",
    localTime: "",
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    /* deja el boton en cargando mientras hace la petición */
    setLoading(true);
    setError({
      error: false,
      message: error.message,
    });

    try {
      /* .trim() limpia los espacios en blanco */
      /* si no se escribe nada arroja el error */
      if (!city.trim()) throw { message: "El campo ciudad es obligatorio" };

      const response = await fetch(`${API_WEATHER}${city}`);
      /* fetch devuelve la data */
      const data = await response.json();

      if (data.error) throw { message: data.error.message };

      const localTime = data.location.localtime;

      // Dividir la fecha y hora en partes separadas
      const [fecha, hora] = localTime.split(" ");

      // Dividir la fecha en partes separadas (año, mes y día)
      const [año, mes, dia] = fecha.split("-");

      // Convertir el mes de formato numérico a cadena
      const meses = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const mesString = meses[parseInt(mes, 10) - 1];

      setWeather({
        city: data.location.name,
        country: data.location.country,
        temp: data.current.temp_c,
        condition: data.current.condition.code,
        icon: data.current.condition.icon,
        conditionText: data.current.condition.text,
        localDate: `${mesString} ${dia}, ${parseInt(año, 10)}`,
        localTime: `${hora}`,
      });
    } catch (error) {
      setError({
        error: true,
        message: error.message,
      });
    } finally {
      setLoading(false);
    }
    setCity("");
  };

  return (
    <Container
      maxWidth="xs"
      sx={{ mt: 2 }}
    >
      <Typography
        variant="h3"
        component="h1"
        textAlign="center"
        gutterBottom
      >
        The Weather App
      </Typography>

      <Box
        sx={{ display: "grid", gap: 2, mt: 4 }}
        component="form"
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <TextField
          id="city"
          label="Ciudad"
          variant="outlined"
          size="small"
          required
          fullWidth
          value={city}
          onChange={(e) => setCity(e.target.value)}
          error={error.error}
          helperText={error.message}
        />

        <LoadingButton
          type="submit"
          variant="contained"
          loading={loading}
          loadingIndicator="Buscando ciudad..."
        >
          Buscar
        </LoadingButton>
      </Box>

      {weather.city && (
        <Box sx={{ mt: 2, display: "grid", gap: 2, textAlign: "center" }}>
          <Typography
            variant="h4"
            component="h2"
          >
            {weather.city}, {weather.country}
          </Typography>
          <Box
            component="img"
            src={weather.icon}
            alt={weather.conditionText}
            sx={{ margin: "0 auto" }}
          />
          <Typography
            variant="h5"
            component="h3"
          >
            {weather.temp} °C
          </Typography>
          <Typography
            variant="h6"
            component="h4"
          >
            {weather.conditionText}
          </Typography>
          <Typography
            variant="h6"
            component="h4"
          >
            {weather.localTime}hs
          </Typography>
          <Typography
            variant="body1"
            component="p"
          >
            {weather.localDate}
          </Typography>
        </Box>
      )}

      <Typography
        textAlign="center"
        sx={{ mt: 6, fontSize: "10px" }}
      >
        Powered by:{" "}
        <a
          href="https://www.weatherapi.com/"
          title="Weather API"
        >
          WeatherAPI.com
        </a>
      </Typography>
    </Container>
  );
};
export default App;
