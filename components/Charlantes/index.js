import CharlanteItem from 'components/CharlanteItem'
import RightChevron from 'components/Icons/RightChevron'
import Link from 'next/link'

export default function Charlantes({ charlantes }) {
  return (
    <>
      <div className="list-charlantes">
        {charlantes.map(({ slug, frontmatter }) => (
          <CharlanteItem
            key={slug}
            name={frontmatter.name}
            photo={frontmatter.photo}
          />
        ))}
      </div>
      <Link href={'/charlantes'}>
        <div className="ver-mas-charlantes">
          <span> Ver todos los charlantes </span>
          <span>
            <RightChevron width={'25'} fill={'#dcdcdc'} height={'25'} />{' '}
          </span>
        </div>
      </Link>

      <style jsx>{`
        .list-charlantes {
          display: flex;
          justify-content: flex-start;
          gap: 40px;
          flex-wrap: wrap;
        }

        .ver-mas-charlantes {
          display: flex;
          align-items: center;
          cursor: pointer;
          padding: 2px 2rem;
          margin-top: 30px;
          transition: all 200ms ease-in-out;
        }

        .ver-mas-charlantes:hover {
          background-color: rgba(0, 0, 0, 0.1);
          border-radius: 20px;
          color: #f1f1f1;
        }

        .ver-mas-charlantes h3 {
          font-weight: 300 !important;
        }

        .ver-mas-charlantes span + span {
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
        }

        .ver-mas-charlantes:hover span + span {
          transform: translateX(5px);
        }
      `}</style>
    </>
  )
}
