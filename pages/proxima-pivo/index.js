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
        'https://saraos.tech/@xauendevs/events/xxviii-pivoandcode-tras-los-pixeles-descifrando-el-codigo-de-la-realidad-virtual-y-aumentada-o8xhreprq7ofr60tmfiwg',
      permanent: true
    }
  }
}
