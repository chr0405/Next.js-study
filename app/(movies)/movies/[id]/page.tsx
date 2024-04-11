import { API_URL } from "../../../(home)/page";

async function getMovie(id : string) {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

async function getVideos(id : string) {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export default async function MovieDetail( {
    params : {id}, 
}: {
    params : {id : string};
}) {
    console.log(id);

    // 직렬 수행
    // const movie = await getMovie(id);
    // const videos = await getVideos(id);

    // 병렬 수행
    const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
    return (
    <div>{movie.title}</div>
  )
}
