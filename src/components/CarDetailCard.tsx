import BookIcon from "@mui/icons-material/Book";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import CarType from "../types/carType.type";

const CarDetailCard = (props: { car: CarType }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        mt: 5,
        gap: 2,
      }}
    >
      <Card sx={{ width: "50%" }}>
        <Link href={`/vehicle?title=${props.car?.vehicle}`}>
          <CardMedia
            component="img"
            image={props.car?.imageURL}
            alt="Paella dish"
          />
        </Link>
      </Card>
      <Card sx={{ width: "50%" }}>
        <CardContent>
          <Typography
            variant="h4"
            component="h1"
            color=""
            fontWeight={800}
            sx={{ mb: 2 }}
          >
            {props.car?.vehicle}
          </Typography>

          <Typography
            variant="caption"
            component="p"
            color="text.secondary"
            fontWeight={800}
          >
            Price:
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 2 }}>
            {props.car?.price}
          </Typography>

          <Typography
            variant="caption"
            component="p"
            color="text.secondary"
            fontWeight={800}
          >
            Specifications:
          </Typography>
          <Typography variant="body1">
            {props.car?.description.map((desc: string) => (
              <>
                {desc} <br />
              </>
            ))}
          </Typography>

          <Box sx={{ mt: 2 }}>
            <IconButton sx={{ color: "rgba(255, 255, 255, 0.54)" }}>
              <ShareIcon />
            </IconButton>

            <IconButton sx={{ color: "rgba(255, 255, 255, 0.54)" }}>
              <FavoriteIcon />
            </IconButton>

            <IconButton sx={{ color: "rgba(255, 255, 255, 0.54)" }}>
              <BookIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CarDetailCard;
