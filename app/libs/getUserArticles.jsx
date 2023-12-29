export default async function getUserArticles(id) {
    const res = await fetch(`ur....${id}`)
    if(!res.ok){
        throw new Error("Could not fetch user Articles")
    }
    return await res.json();
}
