import React from "react";

const Meal = ({ params }) => {
  return (
    <main>
      <h1>Meal</h1>
      <h3>{params.meal_slug}</h3>
    </main>
  );
};

export default Meal;
