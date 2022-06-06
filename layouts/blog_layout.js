import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
export default function BlogLayout({ children }) {
  return (
    <>
      <div className="container">
        <main>{children}</main>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          margin-bottom: 300px;
        }
        main {
          width: 100%;
        }
      `}</style>
    </>
  )
}
