import Image from 'next/image'
import logo from 'public/img/logo.webp'
import { useState } from 'react'
export default function Footer() {
  const [ratio, setRatio] = useState(16 / 9)
  return (
    <>
      <section>
        <div>FOOTER</div>
        <div className="logo">
          <Image
            src={logo}
            width={180}
            height={80 / ratio}
            alt="logo"
            style={{ filter: 'brightness(1.3) grayscale(.6)', opacity: '.6' }}
          />
        </div>
        <small> hecho en Jaén con 💚</small>
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
      `}</style>
    </>
  )
}
