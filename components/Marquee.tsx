import {memo} from 'react'

const Marquee = () => {
  return (
    <>
      <div className="marquee bg-theme h-[90px] mt-20 border-b-2 border-black text-slate-900 text-4xl flex items-center font-semibold">
        <div className="absolute flex items-center justify-between w-full left-full marqueeone">Let's Connect 👇</div>
        <div className="absolute flex items-center justify-between w-full left-full marqueetwo">Let's Connect 👇</div>
        <div className="absolute flex items-center justify-between w-full left-full marqueethree">Let's Connect 👇</div>
        <div className="absolute flex items-center justify-between w-full left-full marqueefour">Let's Connect 👇</div>
      </div>
      <style jsx>{`
        .marquee .marqueeone {
          animation: marquee 60s linear infinite;
        }
        .marquee .marqueetwo {
          animation: marquee 60s linear 4s infinite;
        }

        .marquee .marqueethree {
          animation: marquee 60s linear 8s infinite;
        }

        .marquee .marqueefour {
          animation: marquee 60s linear 12s infinite;
        }
        // .marquee:hover div {
        //   animation-play-state: paused;
        // }
      `}</style>
    </>
  )
}

export default memo(Marquee)
