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
        'https://saraos.tech/@xauendevs/events/xxi-pivoandcode-intercambio-de-informacion-en-el-iot-avj39wm7t6fn2h4d9llkz',
      permanent: true
    }
  }
}
