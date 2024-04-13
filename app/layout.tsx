import "../styles/global.css"
import { Metadata } from "next"
import Navigation from "../components/navigation"

export const metadata : Metadata= {
  // 타이틀은 객체일 수도 있음 (ts로 사용 가능)
  title: {
    template : "%s | Next.js",
    default : "Next.js",
  },
  description: 'Generated by Next.js',
}

// layout 컴포넌트를 렌더링 한 다음에 URL 확인 -> URL에 해당하는 컴포넌트를 불러옴

/*
 /about-us 페이지라면
 <Layout>
  <AboutUs>
 </Layout>
*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}