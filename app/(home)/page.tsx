// import React from 'react'
// import 할 필요가 없음.
"use client"
import { useState, useEffect } from "react";
// client component에서는 metadata를 export 할 수 없음

// 컴포넌트 이름은 상관 없음.
// export default여야 함

// root segmenet

// 폴더명이 () 안에 있으면 URL에 영향을 미치지 x
// export const metadata = {
//     title: 'home',
// };

export default function Page() {
    
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    
    const getMovies = async () => {
        const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
        // 이 방법은 fetch이 client에서 일어나니 API 키 등의 정보를 넣을 수 없음.
        const json = await response.json();
        setMovies(json);
        setIsLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            {isLoading? "Loading..." : JSON.stringify(movies)}
        </div>
    )
}
