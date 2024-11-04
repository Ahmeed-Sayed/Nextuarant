import React from "react";
import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/utils/meals";
const Meals = async () => {
  const meals = await getMeals();
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, added{" "}
          <span className={classes.highlight}>by You!</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself</p>
        <div className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe </Link>
        </div>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
};

export default Meals;
