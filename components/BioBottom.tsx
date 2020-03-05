import React from 'react'

const BioBottom = () => (
  <div>
    <div className="column content-box">
      <p className="title mb-1">
        🎶 <strong className="title">HIP HOP, Dubstep, Future Bass and Lo-fi HipHop recently!</strong>
      </p>
      <ul>
        <li>
          I make Music on my Ableton Live 9.
          <p className="mb-2">
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/836321510&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
          </p>
          <iframe
            src="https://open.spotify.com/embed/artist/0nhcYyaHjoLfcoG16MvSCc"
            width="100%"
            height="380"
            frameBorder="0"
            allowTransparency={true}
            allow="encrypted-media"></iframe>
        </li>
      </ul>
      <p className="title mt-5 mb-1">
        ✈️ <strong className="title">Travel</strong>
      </p>
      <ul>
        <li>
          USA, Canada, Cuba, Thailand, Vietnam, Cambodia, Laos, Philippines, Myanmar, Sli Lanka, Singapore, Malaysia,
          Indonesia, Korea, Australia
        </li>
      </ul>
      <p className="title mt-5 mb-1">
        💼 <strong className="title">Worked Before</strong>
      </p>
      <ul>
        <li>Yahoo! JAPAN</li>
      </ul>
    </div>
  </div>
)

export default BioBottom
