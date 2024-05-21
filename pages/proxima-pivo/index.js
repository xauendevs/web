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
        'https://saraos.tech/@xauendevs/events/xxx-pivoandcode-extreme-programming-el-superpoder-que-necesitas-en-el-desarrollo-de-software-k5fwvt86k9774uzkcnfmc',
      permanent: true
    }
  }
}
