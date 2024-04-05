"use client"
// server에서 render 되는 거임
// 모든 컴포넌트와 페이지들은 먼저 backend에서 render 된다
// hydration : 단순 html을 react application으로 초기화하는 작업

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
    const path = usePathname();
    console.log(path);
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">home</Link> {path === "/" ? "🔥": ""}
                </li>
                <li>
                    <Link href="/about-us">about us</Link> {path === "/about-us" ? "🔥": ""}
                </li>
            </ul>
        </nav>
    )
}
