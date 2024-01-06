import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";

const CarSearchCard = (props: {
  title: string;
  image: string;
  description: string[];
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
        <Link href={`/?title=${props.title}`}>
          <CardMedia component="img" image={props.image} alt="Paella dish" />
        </Link>
      </Card>
      <Card sx={{ width: "50%" }}>
        <CardContent>
          <Typography
            variant="caption"
            component="p"
            color="text.secondary"
            fontWeight={800}
            sx={{ mb: 1 }}
          >
            Specifications:
          </Typography>
          <Typography variant="body1">
            {props.description.map((desc: string) => (
              <>
                {desc} <br />
              </>
            ))}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CarSearchCard;
