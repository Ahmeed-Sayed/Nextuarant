import sql from "better-sqlite3";
const db = sql("meals.db");



export async function getMealBySlug(slug) {
  const stmt = db.prepare(`SELECT * FROM meals WHERE slug = ?`);
  const meal = stmt.get(slug); // Fetch the meal based on the slug
  return meal || null; // Return the meal or null if not found
}


export async function getMeals() {
  await new Promise((resolve, reject) => setTimeout(resolve, 5000));
  // throw new Error("Not implemented");
  // .get returns sngle row
  //.run inserts into the database
  return db.prepare("SELECT * FROM meals").all();
}
