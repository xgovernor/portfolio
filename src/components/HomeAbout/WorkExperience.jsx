import React from 'react'

const companies = [
  {
    company: 'Dot9',
    position: 'Full Stack Developer',
    year: '2022 - Present'
  },
  {
    company: 'Ferne Health',
    position: 'Junior Frontend Engineer',
    year: '2022'
  },
  {
    company: 'Freelancer Lab',
    position: 'Web Developer',
    year: '2019 - 2022'
  }
]

const WorkCard = ({company, position, year}) => {
  return (
    <div className="py-1.5 grid grid-cols-3 md:items-center first-of-type:border-t border-b border-dashed border-[#B2B5B7]">
        <div className="col-span-2 flex flex-col md:flex-row justify-between gap-0.5">
            <h3 className="text-[13px] text-[#1A1A1A]">{company}</h3>
            <p className="font-serif text-xs font-medium text-[#1A1A1A]">{position}</p>
        </div>

        <div className="col-span-1 flex justify-end">
            <p className="text-sm font-serif font-medium text-[#1A1A1A]">{year}</p>
        </div>
    </div>
  )
}


const WorkExperience = () => {
  return (
      <div className='space-y-3'>
        <h4 className="font-bold text-xs leading-[14px] text-[#000c19]">WORK EXPERIENCE</h4>

      <div>
        {companies.map((company, index) => (
            <WorkCard key={index} {...company} />
        ))}
      </div>
    </div>
  )
}

export default WorkExperience
