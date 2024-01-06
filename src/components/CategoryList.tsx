import Carousel from "react-material-ui-carousel";
import Category from "../types/category.type";
import CategoryCard from "./CategoryCard";

const CategoryList = (props: { categories: Category[] }) => {
  return (
    <Carousel>
      {props.categories.map((category: Category) => (
        <CategoryCard
          key={category.id}
          name={category.name}
          image={category.imageURL}
        />
      ))}
    </Carousel>
  );
};

export default CategoryList;
