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
        'https://saraos.tech/@xauendevs/events/xxix-pivoandcode-diseno-ui-ux-para-dummies-desarrolladores-dbp4clj8gddf96hzmh0mf',
      permanent: true
    }
  }
}
