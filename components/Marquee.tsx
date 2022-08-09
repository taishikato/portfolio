import {memo} from 'react'

const Marquee = () => {
  return (
    <div className="marquee bg-theme h-[70px] mt-20 border-b-2 border-black text-slate-900 text-3xl flex items-center font-semibold">
      <div className="absolute flex items-center justify-between w-full left-full marqueeone">
        <a href="#" className="text-slate-900">
          twitter
        </a>
        &nbsp;&nbsp;&nbsp;
        <a href="#" className="text-slate-900">
          instagram
        </a>
        &nbsp;&nbsp;&nbsp;
        <a href="#" className="text-slate-900">
          pinterest
        </a>
        &nbsp;&nbsp;&nbsp;
        <a href="#" className="text-slate-900">
          spotify
        </a>
        &nbsp;&nbsp;&nbsp;
        <a href="#" className="text-slate-900">
          magazine
        </a>
        &nbsp;&nbsp;&nbsp;
      </div>
      <div className="absolute flex justify-between w-full left-full marqueetwo">
        <a href="#" className="text-slate-900">
          twitter
        </a>
        &nbsp;&nbsp;&nbsp;
        <a href="#" className="text-slate-900">
          instagram
        </a>
        &nbsp;&nbsp;&nbsp;
        <a href="#" className="text-slate-900">
          pinterest
        </a>
        &nbsp;&nbsp;&nbsp;
        <a href="#" className="text-slate-900">
          spotify
        </a>
        &nbsp;&nbsp;&nbsp;
        <a href="#" className="text-slate-900">
          magazine
        </a>
        &nbsp;&nbsp;&nbsp;
      </div>
      <div className="absolute flex justify-between w-full left-full marqueethree">
        <a href="#" className="text-slate-900">
          twitter
        </a>
        &nbsp;&nbsp;&nbsp;
        <a href="#" className="text-slate-900">
          instagram
        </a>
        &nbsp;&nbsp;&nbsp;
        <a href="#" className="text-slate-900">
          pinterest
        </a>
        &nbsp;&nbsp;&nbsp;
        <a href="#" className="text-slate-900">
          spotify
        </a>
        &nbsp;&nbsp;&nbsp;
        <a href="#" className="text-slate-900">
          magazine
        </a>
        &nbsp;&nbsp;&nbsp;
      </div>
      <div className="absolute flex justify-between w-full left-full marqueefour">
        <a href="#" className="text-slate-900">
          twitter
        </a>
        &nbsp;&nbsp;&nbsp;
        <a href="#" className="text-slate-900">
          instagram
        </a>
        &nbsp;&nbsp;&nbsp;
        <a href="#" className="text-slate-900">
          pinterest
        </a>
        &nbsp;&nbsp;&nbsp;
        <a href="#" className="text-slate-900">
          spotify
        </a>
        &nbsp;&nbsp;&nbsp;
        <a href="#" className="text-slate-900">
          magazine
        </a>
        &nbsp;&nbsp;&nbsp;
      </div>
    </div>
  )
}

export default memo(Marquee)
