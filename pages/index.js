import Charlantes from 'components/Charlantes'
import Header from 'components/Header'
import PostsListHome from 'components/PostsListHome'
import SectionHome from 'components/SectionHome'
import Sponsors from 'components/Sponsors'
import WhoWeAre from 'components/Whoweare'
import fs from 'fs'
import matter from 'gray-matter'
import Head from 'next/head'

export default function Home({ posts, charlantes, sponsors }) {
  return (
    <>
      <Head>
        <title>XauenDevs 🫒 Desarrollo en Jaén</title>
        <meta
          name="description"
          content="Comunidad de desarrollo y tecnología de la provincia de Jaén. ¡Únete!"
        />

        <meta property="og:url" content="https://xauendevs.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="XauenDevs 🫒 Desarrollo en Jaén" />
        <meta
          property="og:description"
          content="Comunidad de desarrollo y tecnología de la provincia de Jaén. ¡Únete!"
        />
        <meta
          property="og:image"
          content="https://xauendevs.vercel.app/img/social/twitter.png"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
          key={'twitter:card'}
        />
        <meta property="twitter:domain" content="xauendevs.vercel.app" />
        <meta property="twitter:url" content="https://xauendevs.vercel.app/" />
        <meta name="twitter:title" content="XauenDevs 🫒 Desarrollo en Jaén" />
        <meta
          name="twitter:description"
          content="Comunidad de desarrollo y tecnología de la provincia de Jaén. ¡Únete!"
        />
        <meta
          name="twitter:image"
          content="https://xauendevs.vercel.app/img/social/twitter.png"
        />
      </Head>
      <Header />

      <SectionHome title={'Who We Are?'}>
        <WhoWeAre />
      </SectionHome>
      <SectionHome className={'charlantes'} title={'Charlantes'}>
        <Charlantes charlantes={charlantes} isHome={'true'} />
      </SectionHome>
      <SectionHome className={'blog'} title={'Últimos Posts'}>
        <PostsListHome isHome={'true'} posts={posts} />
      </SectionHome>
      <SectionHome className={'sponsors'} title={'Colaboradores'}>
        <Sponsors sponsors={sponsors}></Sponsors>
      </SectionHome>
    </>
  )
}

export async function getStaticProps() {
  const charlantes = getData('charlantes')
    .sort(function () {
      return 0.234 - Math.random()
    })
    .slice(0, 5)

  const sponsors = getData('sponsors')

  const posts = getData('posts')
    .sort((a, b) => {
      return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    })
    .slice(0, 3)

  return {
    props: {
      posts,
      charlantes,
      sponsors
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
