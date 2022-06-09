import Image from 'next/image'

export default function Contributors({ contributors }) {
  return (
    <>
      <div>
        {contributors.map(({ avatar, login, url }) => (
          <a key={login} href={url} title={`Github de ${login}`}>
            <div>
              <Image src={avatar} width={64} height={64} />
            </div>
          </a>
        ))}
      </div>
      <style jsx>
        {`
          div {
            grid-template-columns: repeat(auto-fit, minmax(64px, 1fr));
            display: grid;
            gap: 8px;
            margin: 0;
            padding: 0;
            place-content: center;
            place-items: center;
            max-width: 800px;
            width: 100%;
          }

          a {
            border-radius: 50%;
            overflow: hidden;
            color: #555;
            display: flex;
            font-weight: 500;
            flex-direction: column;
            place-items: center;
            transition: all 0.5s ease;
          }

          a:hover {
            box-shadow: 0 0 4px 0px #fff, 0 0 20px 4px #447256,
              0 0 9px 4px #447256;
            transform: scale(1.5);
          }
        `}
      </style>
    </>
  )
}
