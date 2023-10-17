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
        'https://saraos.tech/@xauendevs/events/xxv-pivoandcode-de-0-a-heroe-con-mlops-o4l5ivb9fdga2gy5yfv80',
      permanent: true
    }
  }
}
