import {memo} from 'react'

const Item = ({imgName, title, link}) => {
  return (
    <div className="w-auto text-left border-2 rounded-2xl border-theme shadow-box">
      <a href={link} target="_blank" className="flex items-center p-5 text-slate-200 gap-x-3">
        <img src={`/img/${imgName}`} width="25px" />
        <span>{title}</span>
      </a>
    </div>
  )
}

export default memo(Item)
