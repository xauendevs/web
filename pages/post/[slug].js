import fs from 'fs'
import matter from 'gray-matter'
import BlogLayout from 'layouts/blog_layout'
import md from 'markdown-it'
import Head from 'next/head'

const Post = ({ frontmatter, content }) => {
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <div className="content">
        <h1>Post</h1>
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
      <style jsx>{`
        .content {
          background: white;
          margin-bottom: 300px;
        }
      `}</style>
    </>
  )
}
Post.Layout = BlogLayout

export default Post

export async function getStaticProps({ params: { slug } }) {
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer 78285cf334af1b97c78cd9d263298e7f7fd001dd4ea5e517435f6ea228440b1cfca2fedbb029ca02319fdf3a8b8823c59665a690f55cda2ff4ea404c97e900a48e26883de2ec489b5b2d2027aba2967e030db4e7a7e5a8a314d940d25e9390d427983f42a165b7108ed3ac6c8bd5132f8d8bd615b4e8e658edeeaf27ba8ae51d`
    }
  }
  const t = await (
    await fetch('http://localhost:1337/api/posts/1', requestOptions)
  ).text()
  const test = JSON.parse(t).data.attributes.content

  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8')
  const { data: frontmatter, content } = matter(fileName)
  return {
    props: {
      frontmatter,
      content: test
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
