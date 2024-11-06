"use server";

import { redirect } from "next/navigation";
import { addMeal } from "./meals";
import { revalidatePath } from "next/cache";

const validateForm = (data) => {
  const email = data.get("email");
  if (
    !data.get("title") ||
    !data.get("image") ||
    !data.get("summary") ||
    !data.get("instructions") ||
    !data.get("name") ||
    !email
  ) {
    return { message: "All fields are required." };
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return { message: "Invalid email format." };
  }
};
export async function handleSubmit(prevState, formData) {
  "use server";
  const meal = {
    title: formData.get("title"),
    slug: formData
      .get("title")
      .toLowerCase()
      .replace(/[^\w]+/g, "-"),
    image: formData.get("image"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  const result = validateForm(formData);
  if (result && result.message) {
    return result;
  }
  try {
    await addMeal(meal);
  } catch (e) {
    return { message: `An error occurred while adding the meal. ${e}` };
  }
  revalidatePath("/meals", "layout");
  redirect("/meals");
}
