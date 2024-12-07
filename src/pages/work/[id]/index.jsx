import React from 'react'
import Layout from '../../../components/Layout'
import ProjectHeader from '../../../components/ProjectHeader'
import ProjectInfo from '../../../components/ProjectInfo'
import COVER from './../../../assets/images/case.webp'
import ProjectContent from '../../../components/ProjectContent'

const data = {
  title: "O.C.O Technology: Building with C02",
  // cover: COVER,
  role: "UI/UX, Frontend, Backend",
  technology: "NextJS, NodeJS, Sanity.io, etc",
  intro: "Simulating the multiple lighting possibilities of a new two-tone gradient effect light fixture using WebGL technology. Prior to launching Flame, an outdoor light fixture used in architectural lighting projects, Hydrel’s division of Acuity Brands aimed to elevate its sales experience to the next level. The product’s dual light beam, which creates a unique flame-like appearance, inspired its name"
}

const Project = () => {
  return (
    <Layout>
      <ProjectHeader title={data.title} cover={COVER.src} />
      <ProjectInfo role={data.role} tech={data.technology} intro={data.intro} />
      <ProjectContent />
    </Layout>
  )
}

export default Project
