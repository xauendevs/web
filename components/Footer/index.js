import Github from 'components/Icons/Github'
import Instagram from 'components/Icons/Instagram'
import Twitter from 'components/Icons/Twitter'
import Discord from 'components/Icons/Discord'
import Image from 'next/image'
import logo from 'public/img/logo.webp'
import { useState } from 'react'
import Link from 'next/link'

export default function Footer() {
  const [ratio, setRatio] = useState(16 / 9)
  return (
    <>
      <section>
        <div className="rrss-container">
          <a href="https://twitter.com/jaendevelopers" target={'_blank'}>
            <Twitter width={'25'} fill={'#dcdcdc'} height={'25'}></Twitter>
          </a>
          <a href="https://github.com/xauendevs" target={'_blank'}>
            <Github width={'25'} fill={'#dcdcdc'} height={'25'}></Github>
          </a>
          <a href="https://instagram.com/jaendevelopers" target={'_blank'}>
            <Instagram width={'25'} fill={'#dcdcdc'} height={'25'}></Instagram>
          </a>
          <a href="https://discord.gg/69cNGbQa" target={'_blank'}>
            <Discord width={'25'} fill={'#dcdcdc'} height={'25'} />
          </a>
        </div>
        <div className="logo">
          <Link href="/">
            <a>
              <span>xauen</span>
              <span>devs</span>
            </a>
          </Link>
        </div>
        <small>
          {' '}
          hecho en Jaén con 💚 copyright © {new Date().getFullYear()}
        </small>
      </section>
      <style jsx>{`
        section {
          height: 200px;
          position: fixed;
          background-color: black;
          bottom: 0px;
          left: 0px;
          right: 0px;
          z-index: -1;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          margin-top: 300px;
        }
        small {
          font-size: 0.8rem;
          opacity: 0.3;
        }
        .rrss-container {
          display: flex;
          gap: 1rem;
        }
        .rrss-container a {
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 4px;
          border-radius: 10px;
          transition: all 200ms ease-in-out;
        }
        .rrss-container a:hover {
          background-color: #ffffff21;
        }
        .logo a {
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
      `}</style>
    </>
  )
}
