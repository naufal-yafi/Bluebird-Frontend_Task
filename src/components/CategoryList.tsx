import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import utils from "../lib/utils";
import Category from "../types/category.type";

const CategoryList = (props: { categories: Category[] }) => {
  return (
    <Carousel>
      {props.categories.map((category: Category) => (
        <Item
          key={category.id}
          name={category.name}
          image={category.imageURL}
        />
      ))}
    </Carousel>
  );
};

const Item = (props: Readonly<{ name: string; image: string }>) => {
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

export default CategoryList;
