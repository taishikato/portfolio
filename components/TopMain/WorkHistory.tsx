import {memo} from 'react'
import SmallTitle from '../SmallTitle'

const WorkHistory = () => {
  return (
    <div className="mt-20">
      <SmallTitle>Very simplified work history</SmallTitle>
      <ul className="flex flex-col items-center gap-y-2">
        <li className="flex items-center gap-x-2">
          <span className="font-semibold">2015 - 2019</span>Worked at Yahoo! Japan{' '}
        </li>
        <li className="flex items-center gap-x-2">
          <span className="font-semibold">2020 - present</span>Working at Semios
        </li>
      </ul>
    </div>
  )
}

export default memo(WorkHistory)
