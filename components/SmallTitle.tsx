import {memo} from 'react'

const SmallTitle = ({children}: {children: JSX.Element | string | number}) => {
  return <div className="mb-6 text-2xl font-bold">{children}</div>
}

export default memo(SmallTitle)
