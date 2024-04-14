import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css"

async function getMovie(id : string) {
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    // throw new Error('something broken...');
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export default async function MovieInfo({id} : {id : string}) {
    const movie = await getMovie(id);
    return (
        <div>
            <img src={movie.poster_path}/>
            <div>
                <h1>{movie.title}</h1>
                <h3>⭐{movie.vote_average.toFixed(1)}</h3>
                <p>{movie.overview}</p>
                <a href={movie.homepage} target={"_blank"}>homepage &rarr;</a>
            </div>
        </div>
    )
}