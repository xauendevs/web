import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false)
      } else {
        // if scroll up show the navbar
        setShow(true)
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])

  return (
    <>
      <nav className={`navbar ${show ? 'show' : 'hidden'}`}>
        <div className="navbar__logo">
          <Link href="/">
            <a>
              <span>xauen</span>
              <span>devs</span>
            </a>
          </Link>
        </div>
        <div className="navbar__menu">
          <ul>
            <li>
              <Link href="/">
                <a>inicio</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>pivoandcode</a>
              </Link>
            </li>
            <li>
              <Link href="#charlantes">
                <a>charlantes</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>blog</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <style jsx>{`
        .navbar {
          display: flex;
          position: fixed;
          width: 100%;
          top: 0;
          justify-content: space-between;
          height: 64px;
          align-items: center;
          padding: 0 1rem;
          /* From https://css.glass */
          background: rgba(0, 0, 0, 0.8);

          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
          z-index: 1;
          transform: translateY(0);
          transition: all 0.3s ease-in-out;
        }

        .navbar.hidden {
          transform: translateY(-100%);
        }
        .navbar.show {
          transform: translateY(0);
        }
        .navbar__logo {
          display: flex;
          align-items: center;
        }
        .navbar__logo a {
          font-size: 2rem;
          font-weight: 100;
          background: #7db392; /* fallback for old browsers */
          background: -webkit-linear-gradient(
            to right,
            #7db392 20%,
            #345a7c
          ); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(
            to right,
            #7db392 10%,
            #345a7c
          ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .navbar__logo a span:first-child {
          font-weight: bold;
        }
        .navbar__menu {
          display: flex;
          align-items: center;
        }
        .navbar__menu ul {
          display: flex;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .navbar__menu ul li {
          margin-right: 1rem;
        }
        .navbar__menu ul li a {
          color: #dcdcdc;
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.3s ease-in-out;
        }
        .navbar__menu ul li a:hover {
          color: #7db392;
        }
      `}</style>
    </>
  )
}
