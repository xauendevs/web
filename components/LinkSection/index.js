import RightChevron from 'components/Icons/RightChevron'
import Link from 'next/link'

export default function LinkSection({ link, text }) {
  return (
    <>
      <Link href={link}>
        <div className="ver-mas">
          <span> {text} </span>
          <span>
            <RightChevron width={'25'} fill={'#dcdcdc'} height={'25'} />{' '}
          </span>
        </div>
      </Link>
      <style jsx>{`
        .ver-mas {
          display: flex;
          align-items: center;
          cursor: pointer;
          padding: 2px 2rem;
          margin-top: 30px;
          transition: all 200ms ease-in-out;
        }

        .ver-mas:hover {
          background-color: rgba(0, 0, 0, 0.1);
          border-radius: 20px;
          color: #f1f1f1;
        }

        .ver-mas h3 {
          font-weight: 300 !important;
        }

        .ver-mas span + span {
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
        }

        .ver-mas:hover span + span {
          transform: translateX(5px);
        }
      `}</style>
    </>
  )
}
