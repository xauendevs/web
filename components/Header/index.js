import Typewriter from 'typewriter-effect'

export default function Header() {
  return (
    <>
      <section>
        <div className="header-wrapper">
          <div className="title">
            <span>XAUEN</span>
            <span>DEVS</span>
          </div>
          <Typewriter
            wrapperClassName="typewriter"
            onInit={(typewriter) => {
              typewriter
                .typeString('Bella ciudad de luz')
                .pauseFor(1000)
                .deleteChars(3)
                .typeString('tecnología')
                .pauseFor(1000)
                .deleteChars(10)
                .typeString('desarrollo...')
                .start()
            }}
          />
        </div>
      </section>
      <style jsx>{`
        section {
          background-image: url('/img/header.png');
          background-size: cover;
          color: #fff;
          height: 100vh;
          max-width: 100%;
          overflow: hidden;
          position: relative;
          width: 100vw;
          padding-top: 64px;
        }
        span {
          font-size: 6.5rem;
        }
        .header-wrapper {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 1rem;
          font-weight: bold;
        }

        .title {
          display: flex;
        }

        .title span + span {
          font-weight: 100;
        }

        .typewriter span {
          font-weight: 200;
        }
      `}</style>
    </>
  )
}
