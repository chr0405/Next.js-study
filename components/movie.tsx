"use client"

import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface MovieProps {
    id : string,
    poster_path : string,
    title : string
}

export default function Movie({id, poster_path, title} : MovieProps) {
    const router = useRouter();
    const onClick = () => {
        router.push(`/movies/${id}`);
    }
    return (
        <div>
            <img src={poster_path} alt={title}/>
            <Link href={`/movies/${id}`}>{title}</Link>
        </div>
    )
}
