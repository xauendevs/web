export default function WhoWeAre() {
  return (
    <>
      <section>
        <div>
          <h1>Who We Are</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          non eros non lorem viverra gravida. In hac habitasse platea dictumst.
          Praesent vel malesuada lacus, gravida tristique purus. Integer laoreet
          nibh ut tellus congue, id placerat odio facilisis. Vestibulum viverra
          quam lobortis, lacinia nibh vitae, mattis massa.
        </p>
        <p>
          Aenean accumsan posuere tellus, nec facilisis lectus. Cras tincidunt
          luctus lacus et elementum. Donec quam sem, tristique ut ultricies
          quis, mattis et purus. Sed tristique sollicitudin ipsum, cursus
          vulputate ligula sollicitudin in.
        </p>
      </section>
      <style jsx>{`
        section {
          min-height: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
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
      `}</style>
    </>
  )
}
