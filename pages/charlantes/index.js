import Charlantes from 'components/Charlantes'
import fs from 'fs'
import matter from 'gray-matter'
export default function CharlantesPage({ charlantes }) {
  return (
    <>
      <main>
        <h1>Estos son todos nuestros charlantes</h1>
        <Charlantes charlantes={charlantes} />
      </main>

      <style jsx>{`
        main {
          padding: 4rem 5rem;
          margin-bottom: 200px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        h1 {
          margin-bottom: 50px;
        }
        @media (max-width: 768px) {
            h1{
                text-align: center;
            }
            main {
                padding: 3rem 3rem;
            }
      `}</style>
    </>
  )
}
export async function getStaticProps() {
  const charlantes = getData('charlantes')

  return {
    props: {
      charlantes
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
