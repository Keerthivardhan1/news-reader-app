export default async function getNews() {
    const response = await fetch(
        "https://newsapi.org/v2/everything?q=apple&from=2023-12-23&to=2023-12-23&sortBy=popularity&apiKey=2acca4f01aee451dbda4396cbcc25f88"
      );
      let data = await response.json();
      if (!response.ok) {
        apiError("could not fetch the data");
      }
      return data.articles;
}
