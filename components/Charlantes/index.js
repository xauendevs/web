import CharlanteItem from 'components/CharlanteItem'
import LinkSection from 'components/LinkSection'

export default function Charlantes({ charlantes, isHome }) {
  let linkToBlog = <></>
  if (isHome) {
    linkToBlog = (
      <LinkSection link={'/charlantes'} text={'Ver todos los charlantes'} />
    )
  }
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
      {linkToBlog}

      <style jsx>{`
        .list-charlantes {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .list-charlantes {
            justify-content: center;
          }
      `}</style>
    </>
  )
}
