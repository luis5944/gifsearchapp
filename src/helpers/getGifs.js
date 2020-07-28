const API_KEY = "Vz6gqwI5cUvZcfp251GgAEhqFmmdbwMy";

const getGifs = async (category) => {
  const resp = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURI(
      category
    )}&limit=10`
  );
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      img: img.images.downsized_medium.url,
    };
  });

  return gifs;
};

export default getGifs;
