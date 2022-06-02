import Github from 'components/Icons/Github'
import Instagram from 'components/Icons/Instagram'
import Twitter from 'components/Icons/Twitter'
import Image from 'next/image'
import Link from 'next/link'
import logo from 'public/img/logo.webp'
import { useState } from 'react'
export default function Footer() {
  const [ratio, setRatio] = useState(16 / 9)
  return (
    <>
      <section>
        <div className="rrss-container">
          <a href="https://twitter.com/jaendevelopers" target={'_blank'}>
            <Twitter width={'25'} fill={'#dcdcdc'} height={'25'}></Twitter>
          </a>
          <a href="https://github.com/xaendevs" target={'_blank'}>
            <Github width={'25'} fill={'#dcdcdc'} height={'25'}></Github>
          </a>
          <a href="https://instagram.com/jaendevelopers" target={'_blank'}>
            <Instagram width={'25'} fill={'#dcdcdc'} height={'25'}></Instagram>
          </a>
        </div>
        <div className="logo">
          <Image
            src={logo}
            width={180}
            height={80 / ratio}
            alt="logo"
            style={{ filter: 'brightness(1.3) grayscale(.6)', opacity: '.6' }}
          />
        </div>
        <small>
          {' '}
          hecho en Jaén con 💚 copyright © {new Date().getFullYear()}
        </small>
      </section>
      <style jsx>{`
        section {
          height: 300px;
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
      `}</style>
    </>
  )
}
