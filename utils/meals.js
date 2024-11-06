import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "fs";

const db = sql("meals.db");

export async function getMealBySlug(slug) {
  const stmt = db.prepare(`SELECT * FROM meals WHERE slug = ?`);
  const meal = stmt.get(slug); // Fetch the meal based on the slug
  return meal || null; // Return the meal or null if not found
}

export async function getMeals() {
  // await new Promise((resolve, reject) => setTimeout(resolve, 5000));
  // throw new Error("Not implemented");
  // .get returns sngle row
  //.run inserts into the database
  return db.prepare("SELECT * FROM meals").all();
}

export async function addMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) throw new Error("Error saving image: " + error);
  });

  meal.image = `/images/${fileName}`;
  db.prepare(
    `
    INSERT INTO meals 
        (title,slug,image,summary,instructions,creator,creator_email)
    VALUES (
          @title,
          @slug,
          @image,
          @summary,
          @instructions,
          @creator,
          @creator_email )`
  ).run(meal);
}
