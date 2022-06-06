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
          content={`https://xauendevs.vercel.app/${frontmatter.image}`}
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
            __html: md({
              langPrefix: 'hljs ',
              highlight: function (str, lang) {
                if (lang && hljs.getLanguage(lang)) {
                  try {
                    return hljs.highlight(str, { language: lang }).value
                  } catch (__) {}
                }

                return '' // use external default escaping
              }
            }).render(content)
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
        }
        .content-post img {
          width: 100%;
        }
      `}</style>
    </>
  )
}
Post.Layout = BlogLayout

export default Post

export async function getStaticProps({ params: { slug } }) {
  // const requestOptions = {
  //   method: 'GET',
  //   headers: {
  //     Authorization: `Bearer 78285cf334af1b97c78cd9d263298e7f7fd001dd4ea5e517435f6ea228440b1cfca2fedbb029ca02319fdf3a8b8823c59665a690f55cda2ff4ea404c97e900a48e26883de2ec489b5b2d2027aba2967e030db4e7a7e5a8a314d940d25e9390d427983f42a165b7108ed3ac6c8bd5132f8d8bd615b4e8e658edeeaf27ba8ae51d`
  //   }
  // }
  // const t = await (
  //   await fetch('http://localhost:1337/api/posts/1', requestOptions)
  // ).text()
  // const test = JSON.parse(t).data.attributes.content

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
