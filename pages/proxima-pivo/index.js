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
        'https://saraos.tech/@xauendevs/events/31-pivoandcode-arquitecturas-limpias-separacion-del-negocio-y-los-detalles-de-la-infraestructura-umv2eugtimhvdq4f126d6',
      permanent: true
    }
  }
}
