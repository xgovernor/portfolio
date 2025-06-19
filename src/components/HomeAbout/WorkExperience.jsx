import React from 'react'

const companies = [
  {
    company: "Dot9",
    location: "Bangladesh",
    position: "Full Stack Developer",
    year: "2022 - Present",
  },
  {
    company: "Ferne Health",
    location: "Singapore",
    position: "Junior Frontend Engineer",
    year: "2022",
  },
  {
    company: "Freelancer Lab",
    location: "Bangladesh",
    position: "Web Developer",
    year: "2019 - 2022",
  },
];

const WorkCard = ({ company, location, position, year }) => {
  return (
    <div className="grid grid-cols-3 border-b border-dashed border-[#B2B5B7] py-1.5 first-of-type:border-t md:items-center">
      <div className="col-span-2 flex flex-col justify-between gap-0.5 md:flex-row">
        <h3 className="text-[13px] text-[#1A1A1A]">
          {company},{" "}
          <span className="font-serif text-xs font-medium text-[#1A1A1A]">
            {location}
          </span>
        </h3>
        <p className="font-serif text-xs font-medium text-[#1A1A1A]">
          {position}
        </p>
      </div>

      <div className="col-span-1 flex justify-end">
        <p className="font-serif text-sm font-medium text-[#1A1A1A]">{year}</p>
      </div>
    </div>
  );
};


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
