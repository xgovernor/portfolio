import React from 'react'
import Layout from '../../../components/Layout'
import ProjectHeader from '../../../components/ProjectHeader'
import ProjectInfo from '../../../components/ProjectInfo'
import ProjectContent from '../../../components/ProjectContent'
import { groq } from 'next-sanity'
import { getClient, imageBuilder } from '../../../utils/sanity'

// *[_type == "project" && slug.current == $slug] | order(_updatedAt desc)[0] {
const PROJECT_QUERY = groq`*[_type == "project" && slug.current == $slug] | order(_updatedAt desc)[0]
{
  _id,
  thumbnail,
  projectName,
  title,
  liveUrl,
  excerpt,
  body,
  role,
  technology,
}`;

function Project ({ project }) {

  return (
    <Layout>
      <ProjectHeader
        title={project.title}
        cover={imageBuilder(project.thumbnail).width(1920).height(1080).url()}
      />
      <ProjectInfo role={Array(project.role || []).join(', ')} tech={Array(project.technology || []).join(', ')} intro={project.excerpt} website={project.liveUrl}/>
      <ProjectContent content={project.body || {}} />
    </Layout>
  )
}

export async function getServerSideProps({ params,res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=31536000, stale-while-revalidate=59'
  )
  const { id: slug } = params;

  try {
    const project = await getClient(false).fetch(PROJECT_QUERY, { slug });

    if (!project) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        project,
        slug,
      },
    };
  } catch (error) {
    console.error("Error fetching article data:", error);
    return {
      notFound: true,
    };
  }
}


export default Project
