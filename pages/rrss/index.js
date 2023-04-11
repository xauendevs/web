import Twitter from 'components/Icons/Twitter'
import styles from './RRSS.module.css'
import Instagram from 'components/Icons/Instagram'
import Link from 'next/link'
import Discord from 'components/Icons/Discord'

export default function RRSS() {
  return (
    <section className={styles.section}>
      <h2>Nuestras redes sociales</h2>
      <section>
        <Link
          href="https://saraos.tech/@xauendevs/events/xxi-pivoandcode-intercambio-de-informacion-en-el-iot-avj39wm7t6fn2h4d9llkz/rsvp"
          target={'_blank'}
        >
          <span>💃🏻</span>
          <span>Próxima Pivo&Code</span>
        </Link>{' '}
        <Link href="https://twitter.com/xauendevs" target={'_blank'}>
          <Twitter width={'25'} fill={'#000'} height={'25'}></Twitter>
          <span>Twitter</span>
        </Link>
        <Link href="https://instagram.com/xauendevs" target={'_blank'}>
          <Instagram width={'25'} fill={'#000'} height={'25'}></Instagram>
          <span>Instagram</span>
        </Link>
        <Link href="https://discord.gg/CC9e6dtqxQ" target={'_blank'}>
          <Discord width={'25'} fill={'#000'} height={'25'}></Discord>
          <span>Discord</span>
        </Link>
      </section>
    </section>
  )
}
