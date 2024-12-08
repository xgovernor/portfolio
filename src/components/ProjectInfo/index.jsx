import React from 'react'
import Container from '../Container'

function ProjectInfo ({role, tech, intro}) {
  return (
<>
      <section className="relative w-full">
        <Container className="py-16 grid grid-cols-1 md:grid-cols-12 gap-y-7 gap-x-5 text-black leading-6">
          <div className="col-span-1 md:col-span-3">
            <h4 className='font-primary font-black text-sm mb-2'>Role:</h4>
            <p className='font-sans text-sm'>{role}</p>
          </div>
          <div className="col-span-1 md:col-span-3">
            <h4 className='font-primary font-black text-sm mb-2'>Technology:</h4>
            <p className='font-sans text-sm'>{tech}</p>
          </div>
          <div className="col-span-1 md:col-start-8 md:col-span-5">
            <h4 className='font-primary font-black text-sm mb-2'>Introduction:</h4>
            <p className='mb-2 font-sans text-sm'>{intro}</p>
          </div>
        </Container>
      </section>
    </>
  )
}

export default ProjectInfo
