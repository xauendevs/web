import PivoListItem from 'components/PivoListItem'
import fs from 'fs'
import matter from 'gray-matter'
import Head from 'next/head'
export default function PivoAndCodePage({ pivos }) {
  return (
    <>
      <Head>
        <title>XauenDevs 🫒 Desarrollo en Jaén - Pivo&Code</title>
        <meta
          name="description"
          content="Listado de todas las ediciones de Pivo&Code que hemos realizado en Jaén. ¿Quieres ser tu nuestro siguiente charlante?"
        />

        <meta property="og:url" content="https://xauendevs.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="XauenDevs 🫒 Desarrollo en Jaén - Pivo&Code"
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
        <meta
          name="twitter:title"
          content="XauenDevs 🫒 Desarrollo en Jaén - Pivo&Code"
        />
        <meta
          name="twitter:description"
          content="Listado de todas las ediciones de Pivo&Code que hemos realizado en Jaén. ¿Quieres ser tu nuestro siguiente charlante?"
        />
        <meta
          name="twitter:image"
          content="https://xauendevs.vercel.app/img/social/twitter.png"
        />
      </Head>
      <section>
        {pivos.map(({ slug, data }) => (
          <PivoListItem key={slug} pivo={data} slug={slug} />
        ))}
      </section>

      <style jsx>{`
        section {
          padding: 6rem 4rem;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, 0.5fr);
          gap: 0px 0px;
          grid-template-areas: ;
        }

        @media (max-width: 992px) {
          section {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 0.5fr);
          }
        }

        @media (max-width: 576px) {
          section {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </>
  )
}

export async function getStaticProps() {
  let pivos = getData('pivoandcode')

  const charlantes = getData('charlantes')

  pivos = pivos
    .map(({ slug, data }) => ({
      slug,
      data: {
        ...data,
        charlantes: charlantes.filter(({ slug }) => {
          return data.charlantes.includes(slug)
        })
      }
    }))
    .sort((a, b) => {
      return new Date(b.data.date) - new Date(a.data.date)
    })

  return {
    props: {
      pivos
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
      data: frontmatter
    }
  })

  return items
}
