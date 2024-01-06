import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../redux/slices/wishlistSlice";

const CarCard = (props: {
  image: string;
  title: string;
  desc: string[];
  price: string;
}) => {
  const dispatch = useDispatch();

  return (
    <ImageListItem key={props.image}>
      <Link href={`/vehicle?title=${props.title}`}>
        <button
          style={{ cursor: "pointer", background: "none", border: "none" }}
        >
          <img src={props.image} alt={props.image} />
        </button>
      </Link>
      <ImageListItemBar
        title={props.title}
        actionIcon={
          <IconButton
            sx={{ color: "rgba(255, 255, 255, 0.54)" }}
            aria-label={`info about ${props.title}`}
            onClick={() =>
              dispatch(
                addToWishlist({
                  vehicle: props.title,
                  imageURL: props.image,
                  description: props.desc,
                  price: props.price,
                }),
              )
            }
          >
            <FavoriteIcon />
          </IconButton>
        }
      />
    </ImageListItem>
  );
};

export default CarCard;
