import {memo} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faMedium,
  faDev,
  faGithub,
  faTwitter,
  faInstagram,
  faYoutube,
  faTwitch,
  faSoundcloud,
} from '@fortawesome/free-brands-svg-icons'

const Socials = () => (
  <div className="flex flex-wrap justify-center gap-y-3">
    <a href="https://twitter.com/taishik_" target="_blank" className="px-2 twitter" title="Twitter">
      <FontAwesomeIcon icon={faTwitter} size="2x" className="w-12 h-12" />
    </a>
    <a href="https://www.linkedin.com/in/takato0903/" target="_blank" className="px-2 linkedin" title="LinkedIn">
      <FontAwesomeIcon icon={faLinkedin} size="2x" className="w-12 h-12" />
    </a>
    <a
      href="https://www.youtube.com/channel/UCBWgQYHZYgmjjrMNHjjZoog"
      target="_blank"
      className="px-2 youtube"
      title="YouTube">
      <FontAwesomeIcon icon={faYoutube} size="2x" className="w-12 h-12" />
    </a>
    <a href="https://www.twitch.tv/taishikk" target="_blank" className="px-2 twitch" title="Twitch">
      <FontAwesomeIcon icon={faTwitch} size="2x" className="w-12 h-12" />
    </a>
    <a href="https://medium.com/@TaishiKato" target="_blank" className="px-2 medium" title="Medium">
      <FontAwesomeIcon icon={faMedium} size="2x" className="w-12 h-12" />
    </a>
    <a href="https://dev.to/taishi" target="_blank" className="px-2 medium" title="Dev.to">
      <FontAwesomeIcon icon={faDev} size="2x" className="w-12 h-12" />
    </a>
    <a href="https://github.com/taishikato" target="_blank" className="px-2 github" title="GitHub">
      <FontAwesomeIcon icon={faGithub} size="2x" className="w-12 h-12" />
    </a>
    <a href="https://www.instagram.com/floatingtheworld/" target="_blank" className="px-2 instagram" title="Instagram">
      <FontAwesomeIcon icon={faInstagram} size="2x" className="w-12 h-12" />
    </a>
    <a href="https://soundcloud.com/floatingtheworld" target="_blank" className="px-2 soundcloud" title="SoundCloud">
      <FontAwesomeIcon icon={faSoundcloud} size="2x" className="w-12 h-12" />
    </a>
    <a href="https://nomadlist.com/@taishikato" target="_blank" className="px-2" title="NomadList">
      <img src="/img/nomadlist-icon.svg" className="w-12 h-12" />
    </a>
    <style jsx>{`
      .linkedin {
        color: #0077b5;
      }
      .medium {
        color: #12100f;
      }
      .github {
        color: #333;
      }
      .twitter {
        color: #1ea1f2;
      }
      .instagram {
        color: #000000;
      }
      .youtube {
        color: #ff0000;
      }
      .twitch {
        color: #9146ff;
      }
      .soundcloud {
        color: #ff7700;
      }
    `}</style>
  </div>
)

export default memo(Socials)
