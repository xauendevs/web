import fs from 'fs'
import matter from 'gray-matter'
import PostsListHome from 'components/PostsListHome'

export default function Blog({ posts }) {
  return (
    <>
      <section>
        <h1>Blog</h1>
        <PostsListHome posts={posts} />
      </section>
      <style jsx>{`
        section {
          background-color: #ebecf0;
          margin-top: 80px;
          padding: 0 2rem;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          flex-direction: column;
          margin-bottom: 200px;
        }
        @media (prefers-color-scheme: dark) {
          section {
            background-color: #222;
          }
        }
        h1 {
          text-align: center;
        }
      `}</style>
    </>
  )
}

export async function getStaticProps() {
  let posts = getData('posts')

  posts = posts.sort((a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  })

  return {
    props: {
      posts
    }
  }
}

function getData(type) {
  const files = fs.readdirSync(type)
  let items = files.map((fileName) => {
    const slug = fileName.replace('.md', '')
    const readFile = fs.readFileSync(`${type}/${fileName}`, 'utf-8')
    const { data: frontmatter } = matter(readFile)

    return {
      slug,
      frontmatter
    }
  })

  return items
}
