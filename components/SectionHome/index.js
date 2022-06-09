export default function SectionHome({ title, children, className, id }) {
  return (
    <>
      <section className={className} id={className}>
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
        section.charlantes {
          margin-top: 50px;
        }
        section.charlantes {
          background-color: #77aa77;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%2377aa77'/%3E%3Cstop offset='1' stop-color='%234fd'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23cf8' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23cf8' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2'%3E%3Cstop offset='0' stop-color='%23cf8' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23cf8' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E");
          background-attachment: fixed;
          background-size: cover;
        }

        section:last-of-type {
          margin-bottom: 200px;
        }
        h1 {
          font-size: 2.5rem;
          position: relative;
        }
        h1::before {
          content: '';
          background-color: #7db392;
          bottom: 0;
          width: 100px;
          height: 4px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        @media (max-width: 768px) {
          section {
            padding: 1rem !important;
          }
      `}</style>
    </>
  )
}
