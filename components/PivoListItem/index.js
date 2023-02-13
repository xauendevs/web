import CharlanteItem from 'components/CharlanteItem'
import Link from 'next/link'
import styles from './PivoListItem.module.css'
export default function PivoListItem({ pivo, slug }) {
  return (
    <>
      <div className={`${styles.card} ${styles['card-1']}`}>
        <div className={`${styles['card-img']}`}></div>
        <a href={`/pivoandcode/${slug}`} className={styles['card-link']}>
          <div
            className={styles['card-img-hovered']}
            style={{
              backgroundImage: 'url(/img/pivoandcode/' + pivo.image + ')'
            }}
          ></div>
        </a>
        <div className={styles['card-info']}>
          <div className={styles['card-about']}>
            <div className={styles['card-time']}>{pivo.date}</div>
          </div>
          <Link href={`/pivoandcode/${slug}`}>
            <h1 className={styles['card-title']}>{pivo.title}</h1>
          </Link>
          <div className={`${styles['card-tags']} ${styles['avatars']}`}>
            {pivo.charlantes.map((tag) => (
              <Link
                key={tag.slug}
                className={`${styles['card-tag']} ${styles['avatar']} ${styles['tag-news']}`}
                href={`/charlante/${tag.slug}`}
              >
                <div>
                  {tag.photo}
                  <img src={tag.data.photo} alt={tag.title} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{``}</style>
    </>
  )
}
