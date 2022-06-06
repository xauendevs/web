import CharlanteItem from 'components/CharlanteItem'
import LinkSection from 'components/LinkSection'

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
      <LinkSection link={'/charlantes'} text={'Ver todos los charlantes'} />

      <style jsx>{`
        .list-charlantes {
          display: flex;
          justify-content: flex-start;
          gap: 40px;
          flex-wrap: wrap;
        }
      `}</style>
    </>
  )
}
