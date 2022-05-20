export default function SectionHome({ title, children }) {
  return (
    <>
      <section>
        <div>
          <h1>{title}</h1>
        </div>
        {children}
      </section>
      <style jsx>{`
        section {
          min-height: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: white;
          padding: 1rem 8rem 3rem 8rem;
          background-color: #ebecf0;
        }
        section:last-of-type {
          margin-bottom: 300px;
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
      `}</style>
    </>
  )
}
