"use client"
/*
 next.js
 1. backend에서 application을 pre-render
    모든 component를 non interactive html로 바꾼다
 2. 프레임워크와 React.js를 innitialize
 3. "use client" 명령어를 가진 component가 hydrate(= interactive 됨)
*/

// hydration : 단순 html을 react application으로 초기화하는 작업

/*
server에서 render 되는 거임
 모든 컴포넌트와 페이지들은 먼저 backend에서 render 된다
 "use client"를 사용하는 경우 그 후 frontend에서 hydrate 및 interactive 됨
 프레임워크에게 해당 component가 interactive하다는 것을 알려주기 때문
 "use client"를 사용하지 않는 component는 server component로 간주
 server component는 server에서 먼저 render 되고, hydrate 되진 않는다
 그럼 사용자가 다운로드 받을 js 양이 적어짐
*/

/*
 client에서 hydrate되는 components는
 = client에서 interative하게 만들어질 components는
 "use client" 지시어를 맨 위에 갖고 있는 components들
*/

import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "../styles/navigation.module.css"

export default function Navigation() {
    const path = usePathname();
    console.log(path);
    return (
        <nav className={styles.nav}>
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