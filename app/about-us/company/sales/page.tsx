// /about-us/company/sales 주소로 접근
// company 디렉토리 안에 page 파일이 없다면, company는 실제 주소 없이 경로의 일부분이 될 뿐임
// page라는 파일을 만들지 않는 이상 실제 경로에 포함되지도, 렌더링 되지도 않는다.

export default function Sales() {
    return (
        <h1>Sales team</h1>
    )
}