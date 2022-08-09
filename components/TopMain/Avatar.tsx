import {memo} from 'react'

const Avatar = () => (
  <div>
    <a href="https://twitter.com/taishik_" target="_blank">
      <picture>
        <source srcSet="/img/profile.webp" type="image/webp" />
        <source srcSet="/img/profile.jpg" type="image/jpeg" />
        <img
          src="/img/profile.jpg"
          loading="lazy"
          width="200"
          height="200"
          alt="Profile Image"
          // className="m-auto rounded-full bg-gradient-to-r p-[6px] from-[#fe0000] via-[#3B82F6] to-[#9333EA]"
          className="weird-object2 shadow-left"
        />
      </picture>
    </a>
  </div>
)

export default memo(Avatar)
