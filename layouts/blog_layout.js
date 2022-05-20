import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
export default function BlogLayout({ children }) {
  return (
    <>
      <div className="container">
        <h1>BLOG LAYOUT</h1>
        <main>{children}</main>
      </div>
      <style jsx>{`
        .container {
          margin-top: 100px;
        }
      `}</style>
    </>
  )
}
