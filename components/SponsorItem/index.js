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
            layout={'fill'}
            objectFit={'contain'}
          />
        </a>
      </div>
      <style jsx>{`
        .sponsor-item {
          width: 200px;
          height: 200px;
          -webkit-filter: grayscale(1);
          -moz-filter: grayscale(1);
          filter: grayscale(1);
          transition: all 0.5s ease;
        }
        .sponsor-item:hover {
          cursor: pointer;
          transform: scale(1.025);
          -webkit-filter: grayscale(0);
          -moz-filter: grayscale(0);
          filter: grayscale(0);
        }
      `}</style>
    </>
  )
}
