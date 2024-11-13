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
        'https://saraos.tech/@xauendevs/events/33-pivoandcode-bugs-brechas-y-bounties-estamos-preparados-3uk0naefcw388z1tji1l6',
      permanent: true
    }
  }
}
