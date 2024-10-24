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
        'https://saraos.tech/@xauendevs/events/32-pivoandcode-la-informatizacion-de-la-agricultura-iwik9pm7t8nsj05e5l6n8',
      permanent: true
    }
  }
}
