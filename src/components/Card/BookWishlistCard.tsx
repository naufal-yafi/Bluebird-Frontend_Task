import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";

const BookWishlistCard = (props: {
  title: string;
  image: string;
  price: string;
}) => {
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
        <Link href={`/vehicle?title=${props.title}`}>
          <CardMedia component="img" image={props.image} alt="Paella dish" />
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
            {props.title}
          </Typography>
          <Typography
            variant="caption"
            component="p"
            color="text.secondary"
            fontWeight={800}
            sx={{ mb: 1 }}
          >
            Price:
          </Typography>
          <Typography variant="body1">{props.price}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BookWishlistCard;
