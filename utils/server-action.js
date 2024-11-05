"use server";

export async function handleSubmit(formData) {
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
  console.log(meal);
}
