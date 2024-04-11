import { Suspense } from "react";
// import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

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
    // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

    return (
        <div>
            <Suspense fallback={<h1>Loading info...</h1>}>
                <MovieInfo id={id}/>
            </Suspense>
            <Suspense fallback={<h1>Loading video...</h1>}>
                <MovieVideos id={id}/>
            </Suspense>
        </div>
    )
}
