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
              <img src="/img/logo.webp" alt="logo" />
            </a>
          </Link>
        </div>
        <div className="navbar__menu">
          <ul>
            <li>
              <Link href="/">
                <a>home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>about</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>contact</a>
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
          background: rgba(255, 255, 255, 0.9);

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
        .navbar__logo img {
          height: 40px;
          margin-right: 1rem;
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
          color: #000;
          text-decoration: none;
          font-size: 1.2rem;
        }
        .navbar__menu ul li a:hover {
          color: #000;
        }
      `}</style>
    </>
  )
}
