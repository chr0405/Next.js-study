// 유효한 주소 (ex. /about-us/company/sales) 뒤에 유효하지 않는 주소...로 접근해도 이 페이지가 뜸.

import Navigation from "../components/navigation";

export default function NotFound() {
    return (
        <div>
            <h1>NotFound</h1>
            <Navigation />
        </div>
    )
}
