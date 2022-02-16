import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

export const FoodCard = () => {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#1E1E1E", color: "white" }}>
      <CardHeader title="Recipe" />
      <CardMedia
        component="img"
        height="194"
        image="https://cdn-icons-png.flaticon.com/512/198/198416.png"
        alt="Paella dish"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ color: "white" }}
        >
          Recipe Body
        </Typography>
      </CardContent>
    </Card>
  );
};
