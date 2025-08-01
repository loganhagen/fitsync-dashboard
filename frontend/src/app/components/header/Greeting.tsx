import { Typography, Stack } from "@mui/material";
import WavingHandIcon from "@mui/icons-material/WavingHand";

const Greeting = () => {
  return (
    <Stack direction={"column"}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ fontFamily: "Roboto, sans-serif", color: "#333" }}
      >
        Good morning,
      </Typography>
      <Stack direction={"row"} spacing={1} alignItems="center">
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ fontFamily: "Roboto, sans-serif", color: "#333" }}
        >
          Logan!
        </Typography>
        <WavingHandIcon color="primary" />
      </Stack>
    </Stack>
  );
};

export default Greeting;
