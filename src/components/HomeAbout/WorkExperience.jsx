import React from 'react'


const WorkCard = () => {
  return (
    <div className="py-1.5 grid grid-cols-3 md:items-center border-b border-dashed">
        <div className="col-span-2 flex flex-col md:flex-row justify-between gap-0.5">
            <h3 className="text-[13px] text-[#4e545b]">Ferne Health</h3>
            <p className="font-serif text-xs font-normal text-[#9A9A9A]">Junior Frontend Engineer</p>
        </div>

        <div className="col-span-1 flex justify-end">
            <p className="text-sm font-serif text-[#9A9A9A]">2022</p>
        </div>
    </div>
  )
}


const WorkExperience = () => {
  return (
      <div className='space-y-1'>
        <h4 className="font-bold text-xs leading-[14px] text-[#00A3FF]">WORK EXPERIENCE</h4>

          <div className="">
              <WorkCard />
              <WorkCard />
              <WorkCard />
        </div>
    </div>
  )
}

export default WorkExperience
