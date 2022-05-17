import React from 'react'
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
} from '@fortawesome/free-brands-svg-icons'

const Socials = () => (
  <>
    <a href="https://twitter.com/taishik_" target="_blank" className="px-2 twitter">
      <FontAwesomeIcon icon={faTwitter} size="2x" className="w-12 h-12" />
    </a>
    <a href="https://www.youtube.com/channel/UCBWgQYHZYgmjjrMNHjjZoog" target="_blank" className="px-2 youtube">
      <FontAwesomeIcon icon={faYoutube} size="2x" className="w-12 h-12" />
    </a>
    <a href="https://www.twitch.tv/taishikk" target="_blank" className="px-2 twitch">
      <FontAwesomeIcon icon={faTwitch} size="2x" className="w-12 h-12" />
    </a>
    <a href="https://www.linkedin.com/in/takato0903/" target="_blank" className="px-2 linkedin">
      <FontAwesomeIcon icon={faLinkedin} size="2x" className="w-12 h-12" />
    </a>
    <a href="https://medium.com/@TaishiKato" target="_blank" className="px-2 medium">
      <FontAwesomeIcon icon={faMedium} size="2x" className="w-12 h-12" />
    </a>
    <a href="https://dev.to/taishi" target="_blank" className="px-2 medium">
      <FontAwesomeIcon icon={faDev} size="2x" className="w-12 h-12" />
    </a>
    <a href="https://github.com/taishikato" target="_blank" className="px-2 github">
      <FontAwesomeIcon icon={faGithub} size="2x" className="w-12 h-12" />
    </a>
    <a href="https://www.instagram.com/floatingtheworld/" target="_blank" className="px-2 instagram">
      <FontAwesomeIcon icon={faInstagram} size="2x" className="w-12 h-12" />
    </a>
    <a href="https://nomadlist.com/@taishikato" target="_blank" className="px-2">
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
    `}</style>
  </>
)

export default Socials
