import Pagination from 'components/Pagination'
import PostsListHome from 'components/PostsListHome'
import glcms from 'github-like-cms'
import { useState, useEffect } from 'react'
export default function Blog({ posts, totalPosts, actualPage }) {
  const [totalPages, setTotalPages] = useState(0)
  useEffect(() => {
    setTotalPages(Math.ceil(totalPosts / 10))
  }, [totalPosts])

  return (
    <>
      <section>
        <h1>Blog</h1>
        <PostsListHome posts={posts} />
        <Pagination actualPage={actualPage} totalPages={totalPages} />
      </section>
      <style jsx>{`
        section {
          background-color: #ebecf0;
          margin-top: 80px;
          padding: 0 2rem;
          min-height: 100vh;
          display: flex;

          flex-direction: column;
          margin-bottom: 200px;
        }
        h1 {
          text-align: center;
        }
      `}</style>
    </>
  )
}

export async function getServerSideProps({ query: { page } }) {
  const pageQuery = page ?? 1
  const { actualPage, posts, totalPosts } = await glcms.getPostsPagination(
    'xauendevs',
    'web',
    pageQuery,
    10
  )
  return {
    props: {
      posts,
      actualPage: parseInt(actualPage),
      totalPosts
    } // will be passed to the page component as props
  }
}
