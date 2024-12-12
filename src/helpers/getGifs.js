export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=BDUV5jBoYBnGPwg3tGR5mr10FDPSYD62&q=${category}&limit=10`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(
        img => ({
            title: img.title,
            id: img.id,
            url: img.images.downsized_medium.url
        })
    )
    return gifs;
}