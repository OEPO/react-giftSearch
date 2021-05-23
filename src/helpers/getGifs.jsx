export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=GbLdVHxrtkroZr1yk0Y84P0omkPkCVYO&q=${encodeURI(category)}&limit=10`
    const resp = await fetch(url);
    const { data } = await resp.json();
    const images = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return images;
}