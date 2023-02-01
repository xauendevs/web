import LinkSection from 'components/LinkSection'
import PostCard from 'components/PostCard'
import { useState, useEffect } from 'react'

export default function PostsListHome({ posts, isHome }) {
  const [showLinkToBlog, setShowLinkToBlog] = useState(false)

  useEffect(() => {
    setShowLinkToBlog(isHome)
  }, [isHome])

  return (
    <>
      <div className="card-container">
        {posts.map(({ slug, ...post }) => (
          <PostCard
            key={slug}
            title={post.title}
            slug={slug}
            date={post.date}
            author={post.author}
            tags={post.tags}
            image={post.image}
          />
        ))}
      </div>
      {showLinkToBlog && (
        <LinkSection link={'/blog'} text={'Ver todos los posts'} />
      )}
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
