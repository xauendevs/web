import fs from 'fs'
import matter from 'gray-matter'
import hljs from 'highlight.js'
import BlogLayout from 'layouts/blog_layout'
import md from 'markdown-it'
import Head from 'next/head'

const Post = ({ frontmatter, content }) => {
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta
          property="og:image"
          content={`https://xauendevs.vercel.app${frontmatter.image}`}
        />
        <meta
          property="og:description"
          content={`${frontmatter.description}`}
        />
      </Head>
      <div className="content">
        <div className="header-post">
          <div className="header-post-image">
            <img src={frontmatter.image} alt={frontmatter.title} />
          </div>
          <div className="header-post-description">
            <small> {frontmatter.author}</small>
            <small>{frontmatter.date}</small>
            <small>
              {frontmatter.tags.map((tag, index) => {
                return `#${tag} `
              })}
            </small>
            <h1>{frontmatter.title}</h1>
          </div>
        </div>
        <div
          className="content-post"
          dangerouslySetInnerHTML={{
            __html:
              md({
                langPrefix: 'hljs ',

                highlight: function (str, lang) {
                  if (lang && hljs.getLanguage(lang)) {
                    try {
                      return hljs.highlight(str, { language: lang }).value
                    } catch (__) {}
                  }

                  return '' // use external default escaping
                }
              }).render(content) +
              '<style>.content-post img{max-width:100%;}</style>'
          }}
        />
      </div>
      <style jsx>{`
        .content-post {
          padding: 1rem 10rem;
        }
        .header-post-image {
          width: 100%;
          position: relative;
          padding-top: 42%;
        }

        .header-post-image img {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
        .header-post-description {
          display: flex;
          flex-direction: column;
          width: 100%;
          align-items: center;
          margin-top: 20px;
        }
      `}</style>
    </>
  )
}
Post.Layout = BlogLayout

export default Post

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8')
  const { data: frontmatter, content } = matter(fileName)
  return {
    props: {
      frontmatter,
      content
    }
  }
}

export async function getStaticPaths() {
  const files = fs.readdirSync('posts')
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', '')
    }
  }))
  return {
    paths,
    fallback: false
  }
}
