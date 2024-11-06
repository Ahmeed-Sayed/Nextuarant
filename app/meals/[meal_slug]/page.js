import React from "react";
import { notFound } from "next/navigation";
import { getMealBySlug } from "@/utils/meals"; // Import the function to get a meal by slug
import classes from "./page.module.css"; // Import the CSS module
import Image from "next/image";

export async function generateMetadata({ params }) {
  const meal = await getMealBySlug(params.meal_slug);
  if (!meal) {
    notFound();
  }
  return {
    title: meal.title,
    description: meal.summary,
  };
}

const MealPage = async ({ params }) => {
  const meal = await getMealBySlug(params.meal_slug); // Fetch the meal by slug
  if (!meal) {
    notFound();
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href="#">{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <div className={classes.instructions}>
          {meal.instructions.split("\n").map((instruction, index) => (
            <p key={index}>{instruction}</p>
          ))}
        </div>
      </main>
    </>
  );
};

export default MealPage;
