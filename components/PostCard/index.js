import { format } from 'date-fns'
import Link from 'next/link'
import styles from './PostCard.module.css'
export default function PostCard({
  title,
  image,
  description,
  slug,
  date,
  author,
  tags
}) {
  return (
    <>
      <Link href={`/post/${slug}`}>
        <div className="card card-1">
          <div className="card-img"></div>
          <div className="card-link">
            <div
              className="card-img-hovered"
              style={{ backgroundImage: 'url(' + image + ')' }}
            ></div>
          </div>

          <div className="card-info">
            <div className="card-about">
              <div className="card-time">
                {format(new Date(date), 'dd/MM/yyyy')}
              </div>
            </div>
            <h1 className="card-title" title={title}>
              {title}
            </h1>
            <div className="card-creator">
              by <span>{author}</span>
            </div>
            <div className="card-tags">
              {tags.slice(0, 6).map((tag) => (
                <span key={tag} href="/" className={styles.card_tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
      <style jsx>{`
        .card {
          align-self: flex-start;
          position: relative;
          width: 325px;
          min-width: 275px;
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
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .card-tag {
          padding: 0.2rem 0.5rem;
          font-size: 12px;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 1px;
          background: #505f79;
          color: #fff;
        }
        .card-tag.tag-news {
          background: #36b37e;
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
          padding-bottom: 0.75rem;
          transition: all 350ms ease-in-out;
          padding: 0.75rem;
          -webkit-line-clamp: 2;
          overflow: hidden;
          text-overflow: clip;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          max-height: 5.3rem;
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
          transform: translate(0, 40px);
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

        @media (max-width: 300px) {
          .card {
            width: 325px;
            min-width: 200px;
          }
          .card .card-info .card-title {
            font-size: 1.1rem;
            margin-top: 0;
          }
        }
      `}</style>
    </>
  )
}
