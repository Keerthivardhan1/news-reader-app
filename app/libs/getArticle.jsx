import apiError from "../handleErrors/apiErrors";
export default async function getArticle(id) {
    const res = await fetch(`..url${id}`);
    console.log("res of artiacle = " , res);
    // let data = await res.json();
  if (!res.ok) {
    apiError("could not fetch the data");
  }
  return data.articles;
}
