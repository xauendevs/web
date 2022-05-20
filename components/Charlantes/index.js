export default function Charlantes() {
  return (
    <>
      <section>
        <div>
          <h1>Charlantes</h1>
        </div>
        <div className="list-charlantes">
          <div className="charlante-item">
            <span>Dani Redondo</span>
          </div>
          <div className="charlante-item"></div>
          <div className="charlante-item"></div>
          <div className="charlante-item"></div>
          <div className="charlante-item"></div>
        </div>
      </section>
      <style jsx>{`
        section {
          min-height: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 300px;
          background-color: white;
          padding: 1rem 8rem 5rem 8rem;
        }
        h1 {
          font-size: 2.5rem;
          position: relative;
        }
        h1::before {
          content: '';
          background-color: green;
          bottom: 0;
          width: 100px;
          height: 4px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
        .list-charlantes {
          display: flex;
          gap: 40px;
        }
        .charlante-item {
          height: 150px;
          width: 150px;
          border-radius: 50%;
          background-image: url('/img/charlantes/daniredondo.jpeg');
          background-size: cover;
          transition: all 0.3s ease;
          cursor: pointer;
          filter: grayscale(100%);
        }
        .charlante-item:hover {
          filter: grayscale(0);
          transform: translateY(-5px) scale(1.1) rotate(5deg);
        }
      `}</style>
    </>
  )
}
