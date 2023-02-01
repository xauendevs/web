import Image from 'next/image'

export default function SponsorItem({ name, url, logo }) {
  return (
    <>
      <div className="sponsor-item">
        <a className="sponsor-item-link" href={url} target="_blank">
          <Image
            className="sponsor-item-logo"
            src={'/img/sponsors/' + logo}
            alt={name + ' logo'}
            fill
          />
        </a>
      </div>
      <style jsx>{`
        .sponsor-item {
          width: 200px;
          height: 200px;
          filter: grayscale(1);
          transition: all 0.5s ease;
        }
        .sponsor-item:hover {
          cursor: pointer;
          transform: scale(1.025);
          filter: grayscale(0);
        }
      `}</style>
    </>
  )
}
