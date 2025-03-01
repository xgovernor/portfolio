import React from 'react'
import Container from '../Container'

function ProjectHeader({title, cover}) {
  return (
    <>
      <section className="w-full h-[calc(100vh-75px)] max-md:max-h-[650px] relative overflow-hidden flex items-end object-contain [box-shadow:inset_0_0_100px_#00000040]">
        <div className="__image absolute top-0 right-0 left-0 bottom-0 z-0 after:[content=''] after:h-full after:w-full after:absolute after:z-[2]" />
        <Container className="py-6 md:py-14 xl:py-20 z-10">
          <h1 className=' text-white text-[34px] leading-10 md:text-[42px] md:leading-[48px] lg:max-xl:w-[724px] lg:text-[52px] lg:leading-[62px] xl:text-6xl xl:leading-[82px]'>{title}</h1>
          </Container>
      </section>

      <style jsx>{`
        .__image {
          background: url("${cover}");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }
          .__image:after {
          background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%);
            }
            `}</style>
    </>
  )
}

export default ProjectHeader
