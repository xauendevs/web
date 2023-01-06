import CharlanteItem from 'components/CharlanteItem'
import Link from 'next/link'

export default function PivoListItem({ pivo, slug }) {
  return (
    <>
      <div className="card card-1">
        <div className="card-img"></div>
        <a href={`/pivoandcode/${slug}`} className="card-link">
          <div
            className="card-img-hovered"
            style={{
              backgroundImage: 'url(/img/pivoandcode/' + pivo.image + ')'
            }}
          ></div>
        </a>
        <div className="card-info">
          <div className="card-about">
            <div className="card-time">{pivo.date}</div>
          </div>
          <Link href={`/pivoandcode/${slug}`}>
            <a>
              <h1 className="card-title">{pivo.title}</h1>
            </a>
          </Link>
          <div className="card-tags avatars">
            {pivo.charlantes.map((tag) => (
              <Link key={tag.slug} href={`/charlante/${tag.slug}`}>
                <a className="card-tag avatar tag-news">
                  <div>
                    {tag.photo}
                    <img src={tag.data.photo} alt={tag.title} />
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .card {
          align-self: flex-start;
          position: relative;

          margin: 1.25rem 0.75rem;
          background: white;
          transition: all 300ms ease-in-out;
        }
        @media (prefers-color-scheme: dark) {
          .card {
            background: #333;
          }
        }
        .card .card-img {
          visibility: hidden;
          width: 100%;
          height: 200px;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
        }
        .card .card-img-hovered {
          --card-img-hovered-overlay: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0)
          );
          transition: all 350ms ease-in-out;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          width: 100%;
          position: absolute;
          height: 200px;
          top: 0;
        }
        .card .card-info {
          position: relative;
          padding: 0.75rem 1.25rem;
          transition: all 200ms ease-in-out;
        }
        .card .card-info .card-about {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 0;
          transition: all 200ms ease-in-out;
        }

        .card-tags {
          padding-top: 20px;
          display: flex;
          gap: 10px;
        }
        .card-tag img {
          height: 40px;
          width: 40px;
          border-radius: 50%;
          object-fit: cover;
        }

        .card .card-info .card-about .card-tag.tag-deals {
          background: #ffab00;
        }
        .card .card-info .card-about .card-tag.tag-politics {
          width: 71px;
          background: #ff5630;
        }
        .card .card-info .card-title {
          z-index: 10;
          font-size: 1.5rem;
          padding-bottom: 0.45rem;
          transition: all 350ms ease-in-out;
          padding: 0.75rem;
          margin-top: 0px;
        }
        .card .card-info .card-creator {
          padding-bottom: 0.75rem;
          transition: all 250ms ease-in-out;
        }
        .card:hover {
          cursor: pointer;
          box-shadow: 0px 15px 35px rgba(227, 252, 239, 0.1),
            0px 5px 15px rgba(0, 0, 0, 0.07);
          transform: scale(1.025);
        }
        .card:hover .card-img-hovered {
          --card-img-hovered-overlay: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.65)
          );
          height: 100%;
        }
        .card:hover .card-about,
        .card:hover .card-creator {
          opacity: 0;
        }
        .card:hover .card-info {
          background-color: transparent;
        }
        .card:hover .card-title {
          color: #ebecf0;
          transform: translate(0, 30px);
          background-color: black;
        }

        .card-1 .card-img,
        .card-1 .card-img-hovered {
          background-image: url(https://source.unsplash.com/Qm_n6aoYzDs);
        }

        .card-2 .card-img,
        .card-2 .card-img-hovered {
          background-image: url(https://source.unsplash.com/C-v1p2DTakA);
        }

        .card-3 .card-img,
        .card-3 .card-img-hovered {
          background-image: url(https://source.unsplash.com/V0L1LH7qWOQ);
        }

        .card-4 .card-img,
        .card-4 .card-img-hovered {
          background-image: url(https://source.unsplash.com/zAi2Is48-MA);
        }
      `}</style>
    </>
  )
}
