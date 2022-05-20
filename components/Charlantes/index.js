import CharlanteItem from 'components/CharlanteItem'

export default function Charlantes() {
  return (
    <>
      <div className="list-charlantes">
        <CharlanteItem
          name={'Alberto Tejero'}
          photo={'/img/charlantes/albertotejero.jpeg'}
        />
        <CharlanteItem
          name={'Daniel Redondo'}
          photo={'/img/charlantes/daniredondo.jpeg'}
        />
        <CharlanteItem name={'Charlante 3'} />
      </div>

      <style jsx>{`
        .list-charlantes {
          display: flex;
          gap: 40px;
        }
      `}</style>
    </>
  )
}
