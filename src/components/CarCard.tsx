import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const CarCard = (props: { image: string; title: string }) => {
  return (
    <ImageListItem key={props.image}>
      <Link href={`/vehicle?title=${props.title}`}>
        <img src={props.image} alt={props.image} />
      </Link>
      <ImageListItemBar
        title={props.title}
        actionIcon={
          <IconButton
            sx={{ color: "rgba(255, 255, 255, 0.54)" }}
            aria-label={`info about ${props.title}`}
          >
            <FavoriteIcon />
          </IconButton>
        }
      />
    </ImageListItem>
  );
};

export default CarCard;
