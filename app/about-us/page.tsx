// 디렉토리 안에 꼭 page 파일을 생성해야 한다.
import Avatar from "./components/avatar"

/*
 server component 안에 client component를 가질 수 있다
 반면 client compoent 안에는 server component를 가질 수 없음
*/

/*
 server component의 코드는 server에서만 실행되기 때문에
 API key를 사용해서 API를 fetch한다고 하면
 해당 코드는 client로 가지 않기 때문에 보완에 신경쓰지 않아도 됨
*/
export const metadata = {
    title: 'about-us',
}

export default function AboutUs() {
    return (
        <div>
            <h1>AboutUs!</h1>
            <Avatar />
        </div>
    )
}