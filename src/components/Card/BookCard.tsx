import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";

const BookCard = (props: { title: string; image: string; price: string }) => {
  const desktopView = useMediaQuery("(min-width:1024px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: `${desktopView ? "row" : "column"}`,
        justifyContent: "center",
        mt: 5,
        gap: 2,
      }}
    >
      <Card sx={{ width: `${desktopView ? "50%" : "100%"}` }}>
        <Link href={`/?title=${props.title}`}>
          <CardMedia component="img" image={props.image} alt="Paella dish" />
        </Link>
      </Card>
      <Card sx={{ width: `${desktopView ? "50%" : "100%"}` }}>
        <CardContent>
          <Link href={`/?title=${props.title}`}>
            <Typography
              variant="h4"
              component="h1"
              color=""
              fontWeight={800}
              sx={{ mb: 2 }}
            >
              {props.title}
            </Typography>
          </Link>
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

export default BookCard;
