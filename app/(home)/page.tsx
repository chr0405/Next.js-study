// import React from 'react'
// import 할 필요가 없음.

import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../styles/home.module.css";
import { API_URL } from "../constants";

// 폴더명이 () 안에 있으면 URL에 영향을 미치지 x

// client component에서는 metadata를 export 할 수 없음
export const metadata = {
    title: 'home',
};

// 로딩 상태가 사라지는 것은 아님. (빠르게 데이터가 보일 뿐)
async function getMovies() {
    // 로딩 상태를 보여주기 위해 함수를 잠시 멈춤
    /*
     로딩 상태가 옮겨갔다.
     = 페이지가 열리기까지 시간이 걸린다.
     = 사용자가 일정 시간동안 사이트 접속을 기다려야 함
     */
    // await - Promise를 기다리는 데에 사용
    // Promise - 완료하는 데 시간이 걸릴 수 있는 작업을 처리할 때 사용
    // resolve - Promise 생성자가 제공하는 함수.
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('I`m fetching');
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

// root segmenet
// 컴포넌트 이름은 상관 없음.
// export default여야 함
export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div>
            {movies.map((movie) => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                />
            ))}
        </div>
    )
}
