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
        'https://saraos.tech/@xauendevs/events/xxvi-pivoandcode-nbomber-haz-pruebas-de-carga-a-un-sistema-a3u7w1kfjv0lpdrdmax34',
      permanent: true
    }
  }
}
