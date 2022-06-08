import Typewriter from 'typewriter-effect'

export default function SponsorItem({key, name, url, logo}) {
  return (
    <>
      <div className="sponsor-item">
        <a href={url} target="_blank">
          <picture>
            <img src={logo} alt={name+ " logo"}/>
          </picture>
          <h2 class="sponsor-item-title">{name}</h2>
        </a>
      </div>
      <style jsx>{`
            .sponsor-item a{
              width: 200px;
              display:flex;
              flex-direction: column;
              align-items: center;
            }
            .sponsor-item:hover {
              cursor: pointer;
              transform: scale(1.025);
            }
            .sponsor-item img {
                width: 200px;
            }
      `}</style>
    </>
  )
}
