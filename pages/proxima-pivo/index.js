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
        'https://saraos.tech/@xauendevs/events/xxiii-pivoandcode-graph-databases-con-neo4j-7k804py8edjhkoyx0gai8',
      permanent: true
    }
  }
}
