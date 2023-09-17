export default function ProximaPivo() {
  return (
    <>
      <h1>Redirigiendo</h1>
    </>
  )
}

export async function getServerSideProps({ res }) {
  return {
    redirect: {
      destination:
        'https://saraos.tech/@xauendevs/events/xxiv-pivoandcode-osint-osant-cada-dia-te-busco-mas-ku8fjnb0e0uhephy98p65',
      permanent: true
    }
  }
}
