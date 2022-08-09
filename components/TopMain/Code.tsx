import {memo} from 'react'

const Code = () => (
  <div className="w-full text-left md:w-auto mockup-code">
    <pre data-prefix="$">
      <code>profile</code>
    </pre>
    <pre data-prefix=">" className="text-warning">
      <code>loading...</code>
    </pre>
    <pre data-prefix=">" className="text-success">
      <code>Hey, I am Taishi...</code>
    </pre>
    <pre data-prefix=">" className="text-success">
      <code>From Japan</code>
    </pre>
    <pre data-prefix=">" className="text-success">
      <code>Live in Canada</code>
    </pre>
    <pre data-prefix=">" className="text-success">
      <code>Software Developer</code>
    </pre>
    <pre data-prefix=">" className="text-success">
      <code>Part-time Indie Hacker</code>
    </pre>
  </div>
)

export default memo(Code)
