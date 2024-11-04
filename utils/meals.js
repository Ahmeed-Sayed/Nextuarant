import sql from "better-sqlite3";
const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve, reject) => setTimeout(resolve, 5000));
  // throw new Error("Not implemented");
  // .get returns sngle row
  //.run inserts into the database
  return db.prepare("SELECT * FROM meals").all();
}
