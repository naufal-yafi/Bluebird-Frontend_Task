import BookIcon from "@mui/icons-material/Book";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import {
  Alert,
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Link,
  Snackbar,
  Typography,
} from "@mui/material";
import { Fragment } from "react";
import useCopyToClipboard from "../hooks/useCopyToClipboard";
import CarType from "../types/carType.type";

const CarDetailCard = (props: { car: CarType; path: string | null }) => {
  const { showPopup, handleCopyToClipboard, error, handleShowPopup } =
    useCopyToClipboard();

  return (
    <Fragment>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={showPopup}
        autoHideDuration={3000}
        onClose={() => handleShowPopup(false)}
      >
        {error ? (
          <Alert severity="error" onClose={() => handleShowPopup(false)}>
            Error Copy to Clipboard
          </Alert>
        ) : (
          <Alert severity="success" onClose={() => handleShowPopup(false)}>
            Copy to Clipboard
          </Alert>
        )}
      </Snackbar>
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
            {props.car?.description.map((desc: string) => (
              <Typography variant="body1" key={desc}>
                {desc} <br />
              </Typography>
            ))}

            <Box sx={{ mt: 2 }}>
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                onClick={() => {
                  handleCopyToClipboard(props.path);
                  handleShowPopup(true);
                }}
              >
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
    </Fragment>
  );
};

export default CarDetailCard;
