import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
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
        <div className={styles.navbar__logo}>
          <Link href="/">
            <span>xauen</span>
            <span>devs</span>
          </Link>
        </div>
        <div className={styles.navbar__menu}>
          <ul>
            <li>
              <Link href="/">inicio</Link>
            </li>
            <li>
              <Link href="/pivoandcode">pivoandcode</Link>
            </li>
            <li>
              <Link href="/#charlantes">charlantes</Link>
            </li>
            <li>
              <Link href="/blog">blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar__menu_hamburguer">
          <button
            className={`menu-toggle ${isOpen ? 'is-active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu
          </button>
        </div>
        <div className={`navbar__menu_mobile ${isOpen ? 'is-active' : ''}`}>
          <ul>
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                inicio
              </Link>
            </li>
            <li>
              <Link href="/pivoandcode" onClick={() => setIsOpen(false)}>
                pivoandcode
              </Link>
            </li>
            <li>
              <Link href="/#charlantes" onClick={() => setIsOpen(false)}>
                charlantes
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={() => setIsOpen(false)}>
                blog
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
      
       
        .navbar__menu_mobile {
          display:flex;
          position:absolute;
          top:0;
          left:0;
          bottom:0;
          right:0;  
          transform:translateX(-100%);
          height: calc(100vh);
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: fixed;
          background: black;
          z-index: 1;
          width: 100vw;
          color: white;
          transition: all 0.3s ease-in-out;
        }

        .navbar__menu_mobile li{
          margin-bottom: 1rem;
          list-style-type:none;
          font-size: 2rem;

        }

        .navbar__menu_mobile.is-active {
          display: flex;
          transform: translateX(0);

        }
        .navbar__menu_hamburguer{
          display:none;
          z-index: 2;
        }
        .menu-toggle {
          position: relative;
          display: block;
          width: 25px;
          height: 18px;
          background: transparent;
          border-top: 2px solid;
          border-bottom: 2px solid;
          color: #fcfcfc;
          font-size: 0;
          transition: all 0.25s ease-in-out;
        }
        .menu-toggle:before, .menu-toggle:after {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          position: absolute;
          top: 50%;
          left: 50%;
          background: currentColor;
          transform: translate(-50%, -50%);
          transition: transform 0.25s ease-in-out;
        }

        button:hover {
          color: #fcfcfc;
        }

        button.is-active {
          border-color: transparent;
        }
        button.is-active:before {
          transform: translate(-50%, -50%) rotate(45deg);
        }
        button.is-active:after {
          transform: translate(-50%, -50%) rotate(-45deg);
        }


        button {
          border: none;
          cursor: pointer;
          outline: none;
        }
        @media (max-width: 768px) {
          .navbar__logo a {
            font-size: 1.5rem;
          }
        }
        @media (max-width: 576px) {
            .navbar__menu {
              display:none
            }
            .navbar__menu_hamburguer{
          display:block
        }
      `}</style>
    </>
  )
}
