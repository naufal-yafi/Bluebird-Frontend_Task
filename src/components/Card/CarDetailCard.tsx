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
  useMediaQuery,
} from "@mui/material";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import useColorActive from "../../hooks/useColorActive";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import { addToBook } from "../../redux/slices/bookSlice";
import { addToWishlist } from "../../redux/slices/wishlistSlice";
import CarType from "../../types/carType.type";

const CarDetailCard = (props: {
  car: CarType;
  path: string | null;
  isMatchBook: boolean;
  isMathWishList: boolean;
}) => {
  const { showPopup, handleCopyToClipboard, error, handleShowPopup } =
    useCopyToClipboard();
  const dispatch = useDispatch();
  const { colorActive: activeBook, handleColor: handleActiveBook } =
    useColorActive(props.isMatchBook);
  const { colorActive: activeWishlist, handleColor: handleActiveWishlist } =
    useColorActive(props.isMathWishList);
  const { colorActive: activeShare, handleColor: handleActiveShare } =
    useColorActive(false);
  const desktopView = useMediaQuery("(min-width:1024px)");

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
          flexDirection: `${desktopView ? "row" : "column"}`,
          justifyContent: "center",
          alignItems: "center",
          mt: 5,
          gap: 2,
        }}
      >
        <Card sx={{ width: `${desktopView ? "50%" : "100%"}` }}>
          <Link href={`/?title=${props.car?.vehicle}`}>
            <CardMedia
              component="img"
              image={props.car?.imageURL}
              alt="Paella dish"
            />
          </Link>
        </Card>
        <Card sx={{ width: `${desktopView ? "50%" : "100%"}` }}>
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
                sx={{
                  color: `${
                    activeShare ? "green" : "rgba(255, 255, 255, 0.54)"
                  }`,
                }}
                onClick={(e) => {
                  handleCopyToClipboard(props.path);
                  handleShowPopup(true);
                  handleActiveShare(e);
                }}
              >
                <ShareIcon />
              </IconButton>

              <IconButton
                sx={{
                  color: `${
                    activeWishlist ? "red" : "rgba(255, 255, 255, 0.54)"
                  }`,
                }}
                onClick={(e) => {
                  dispatch(
                    addToWishlist({
                      vehicle: props.car?.vehicle,
                      imageURL: props.car?.imageURL,
                      description: props.car?.description,
                      price: props.car?.price,
                    }),
                  );
                  handleActiveWishlist(e);
                }}
              >
                <FavoriteIcon />
              </IconButton>

              <IconButton
                sx={{
                  color: `${
                    activeBook ? "white" : "rgba(255, 255, 255, 0.54)"
                  }`,
                }}
                onClick={(e) => {
                  dispatch(
                    addToBook({
                      vehicle: props.car?.vehicle,
                      imageURL: props.car?.imageURL,
                      description: props.car?.description,
                      price: props.car?.price,
                    }),
                  );
                  handleActiveBook(e);
                }}
              >
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
