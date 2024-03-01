import React from 'react'
import Video from "../videos/Only Basketball - Nike.mp4"
import VideoSectioncss from "../SignUpPage/VideoSection.css"

function VideoSection() {
  return (
    <>
    <div className=' relative overflow-hidden flex w-full  '>
      <div className='video-overly'></div>
      <video
   src={Video}
      autoPlay loop muted playsInline
    className=''/>
 <video/>
   <div className='video-dec  space-y-5 flex flex-col sm:justify-center w-full  sm:w-0  justify-center items-start sm:items-center p-2'>
    <h1 className='w-max font-extrabold text-2xl xs:text-4xl font-Oswald p-3'>
      ITS BETTER AS A Member
    </h1>
    <p className='font-semibold p-3 flex flex-wrap w-full  text-wrap text-lg sm:w-max sm:text-xl'>Move,Shop,Costomized and Celebrate With the best of <br/>Nike</p>
   <button className='p-2  bg-slate-100 rounded-full text-black w-max'>Sign Up</button>
   </div>
    </div> 
    </>
  )
}

export default VideoSection
