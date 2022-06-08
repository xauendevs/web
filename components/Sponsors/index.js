import SponsorItem from 'components/SponsorItem'
export default function Sponsors({sponsors}) {
  return (
    <>
      <div className="sponsors">
        {sponsors.map(({ slug, frontmatter }) => (
        <SponsorItem
          key={slug}
          name={frontmatter.name}
          url={frontmatter.url}
          logo={frontmatter.logo}
        />
      ))}
      </div>
      <style jsx>{`
        .sponsors{
          display:flex;
        }
      `}</style>
    </>
  )
}
