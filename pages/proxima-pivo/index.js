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
        'https://saraos.tech/@xauendevs/events/xxvi-pivoandcode-homelabbing-tu-nube-en-casa-para-sobrevivir-a-la-edad-de-la-informacion-v7jydo4wo8dwhk29u8q13',
      permanent: true
    }
  }
}
