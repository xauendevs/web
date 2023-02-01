import Link from 'next/link'
import styles from './Pagination.module.css'
export default function Pagination({ actualPage, totalPages }) {
  return (
    <>
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => (
          <Link
            key={i}
            href={`/blog?page=${i + 1}`}
            className={actualPage === i + 1 ? styles.active : ''}
          >
            <span>{i + 1}</span>
          </Link>
        ))}
      </div>
    </>
  )
}
