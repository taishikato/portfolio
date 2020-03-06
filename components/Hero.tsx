import React from 'react'

const Hero = () => {
  return (
    <section className="hero bg-cover bg-center">
      <div className="hero-body px-3 py-5">
        <div>
          <h1 className="title is-1 title-color">
            <svg viewBox="0 0 100 20">
              <defs>
                <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor="#ffffff" />
                  <stop offset="95%" stopColor="#f1eaea" />
                </linearGradient>
                <pattern id="wave" x="0" y="0" width="120" height="20" patternUnits="userSpaceOnUse">
                  <path
                    id="wavePath"
                    d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z"
                    mask="url(#mask)"
                    fill="url(#gradient)">
                    <animateTransform
                      attributeName="transform"
                      begin="0s"
                      dur="1.5s"
                      type="translate"
                      from="0,0"
                      to="40,0"
                      repeatCount="indefinite"
                    />
                  </path>
                </pattern>
              </defs>
              <text textAnchor="middle" x="50" y="12" fontSize="17" fill="url(#wave)" fillOpacity="1">
                Hyper
              </text>
              <text textAnchor="middle" x="50" y="12" fontSize="17" fill="url(#gradient)" fillOpacity="0.5">
                Hyper
              </text>
            </svg>

            <svg viewBox="0 0 100 20">
              <defs>
                <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor="#ffffff" />
                  <stop offset="95%" stopColor="#f1eaea" />
                </linearGradient>
                <pattern id="wave" x="0" y="0" width="120" height="20" patternUnits="userSpaceOnUse">
                  <path
                    id="wavePath"
                    d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z"
                    mask="url(#mask)"
                    fill="url(#gradient)">
                    <animateTransform
                      attributeName="transform"
                      begin="0s"
                      dur="1.5s"
                      type="translate"
                      from="0,0"
                      to="40,0"
                      repeatCount="indefinite"
                    />
                  </path>
                </pattern>
              </defs>
              <text textAnchor="middle" x="50" y="12" fontSize="17" fill="url(#wave)" fillOpacity="1">
                Hardcore
              </text>
              <text textAnchor="middle" x="50" y="12" fontSize="17" fill="url(#gradient)" fillOpacity="0.5">
                Hardcore
              </text>
            </svg>

            <svg viewBox="0 0 100 20">
              <defs>
                <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor="#ffffff" />
                  <stop offset="95%" stopColor="#f1eaea" />
                </linearGradient>
                <pattern id="wave" x="0" y="0" width="120" height="20" patternUnits="userSpaceOnUse">
                  <path
                    id="wavePath"
                    d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z"
                    mask="url(#mask)"
                    fill="url(#gradient)">
                    <animateTransform
                      attributeName="transform"
                      begin="0s"
                      dur="1.5s"
                      type="translate"
                      from="0,0"
                      to="40,0"
                      repeatCount="indefinite"
                    />
                  </path>
                </pattern>
              </defs>
              <text textAnchor="middle" x="50" y="12" fontSize="17" fill="url(#wave)" fillOpacity="1">
                Year
              </text>
              <text textAnchor="middle" x="50" y="12" fontSize="17" fill="url(#gradient)" fillOpacity="0.5">
                Year
              </text>
            </svg>
          </h1>
        </div>
      </div>
      <style jsx>{`
        section.hero {
          background-image: url('/img/melbourne.jpg');
          -webkit-box-align: stretch;
          align-items: stretch;
          display: -webkit-box;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          flex-direction: column;
          -webkit-box-pack: justify;
          justify-content: space-between;
        }
        .hero h1 svg text {
          font-size: 9px;
          font-weight: 900;
          font-family: Titillium Web, sans-serif;
        }
      `}</style>
    </section>
  )
}

export default Hero
