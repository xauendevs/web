import LinkSection from 'components/LinkSection'
import PostCard from 'components/PostCard'

export default function PostsListHome({ posts, isHome }) {
  let linkToBlog = <></>
  if (isHome) {
    linkToBlog = <LinkSection link={'/blog'} text={'Ver todos los posts'} />
  }
  return (
    <>
      <div className="card-container">
        {posts.map(({ slug, frontmatter }) => (
          <PostCard
            key={slug}
            title={frontmatter.title}
            slug={slug}
            date={frontmatter.date}
            author={frontmatter.author}
            tags={frontmatter.tags}
            image={frontmatter.image}
          />
        ))}
      </div>
      {linkToBlog}
      <style jsx>{`
        .card-container {
          width: 100%;

          display: flex;
          flex-flow: row wrap;
          justify-content: center;
          align-items: center;
          transition: all 200ms ease-in-out;
        }
      `}</style>
    </>
  )
}
