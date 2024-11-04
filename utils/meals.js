import sql from "better-sqlite3";
const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve, reject) => setTimeout(resolve, 2000));
  // .get returns sngle row
  //.run inserts into the database
  throw new Error("Not implemented");
  return db.prepare("SELECT * FROM meals").all();
}
