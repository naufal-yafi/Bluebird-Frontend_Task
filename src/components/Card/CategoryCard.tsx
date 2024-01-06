import { Paper } from "@mui/material";
import utils from "../../lib/utils";

const CategoryCard = (props: Readonly<{ name: string; image: string }>) => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <img
        src={utils.fixImageLink(props.image)}
        alt={`thumbnail ${props.name}`}
      />
      <h2>{props.name}</h2>
    </Paper>
  );
};

export default CategoryCard;
