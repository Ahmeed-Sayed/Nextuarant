import classes from "./meals-grid.module.css";
import MealItem from "./meal-item";
async function MealsGrid({meals}) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal, index) => (
        <li key={index}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}

export default MealsGrid;
