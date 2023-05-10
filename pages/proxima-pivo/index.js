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
        'https://saraos.tech/@xauendevs/events/xxii-pivoandcode-descubriendo-sveltekit-zrvr87pj4hhg72rx88eis',
      permanent: true
    }
  }
}
