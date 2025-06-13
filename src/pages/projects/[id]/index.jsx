import React from "react";
import Layout from "../../../components/Layout";
import ProjectHeader from "../../../components/ProjectHeader";
import ProjectInfo from "../../../components/ProjectInfo";
import ProjectContent from "../../../components/ProjectContent";
import { groq } from "next-sanity";
import { getClient, imageBuilder } from "../../../utils/sanity";

// Import 'info' from your meta.constant.js for base URLs
import { info } from "./../../../components/Meta/meta.constant.js";

// **IMPORTANT:** Add 'slug.current' to the query so you can pass it to Meta component
const PROJECT_QUERY = groq`*[_type == "project" && slug.current == $slug] | order(_updatedAt desc)[0]
{
  _id,
  thumbnail,
  projectName, // Using projectName for title if 'title' is not present in Sanity
  title,       // Assuming 'title' field might be used for project page title
  liveUrl,
  excerpt,     // Use this for meta description
  body,
  role,
  technology,
  "slug": slug.current, // Add slug to the fetched data for URL construction,
  githubUrl, // <--- ADD THIS if you have a GitHub URL field
  _updatedAt, // <--- ADD THIS if you want to use dateModified
  _createdAt, // <--- ADD THIS if you want to use dateCreated
}`;

function Project({ project }) {
  // Guard against missing project data before rendering
  if (!project) {
    // This case should ideally be handled by getServerSideProps's notFound
    // but good for defensive rendering in case of client-side issues.
    return (
      <Layout>
        <p>Project not found.</p>
      </Layout>
    );
  }

  // Construct dynamic meta information for this specific project
  const projectPageMeta = {
    // Use the project's 'title' (if available) or 'projectName' for the page title
    pageTitle: `${project.title || project.projectName} | Project by Abu Taher Muhammad`,
    // Use the project's 'excerpt' for the meta description
    pageDescription: project.excerpt,
    // Use the project's thumbnail as the social sharing image (ensure it's absolute)
    pageImage: imageBuilder(project.thumbnail).width(1200).height(630).url(), // Optimized size for social shares
    // Construct the full canonical URL for this project page
    pageUrl: `${info.website}/projects/${project.slug}`,
    // You can also add more specific OG tags if needed, like og:type="article" for a project
    ogType: "article", // Or 'website' if you prefer, 'article' is often good for case studies/projects
    projectData: project,
  };

  // Convert arrays to comma-separated strings for display if they are arrays
  const roles = Array.isArray(project.role)
    ? project.role.join(", ")
    : project.role;
  const technologies = Array.isArray(project.technology)
    ? project.technology.join(", ")
    : project.technology;

  return (
    <Layout meta={projectPageMeta}>
      {/* Pass the dynamic meta object here */}
      <ProjectHeader
        title={project.title || project.projectName} // Use title or project name
        cover={imageBuilder(project.thumbnail).width(1920).height(1080).url()}
      />
      <ProjectInfo
        role={roles}
        tech={technologies}
        intro={project.excerpt}
        website={project.liveUrl}
      />
      <ProjectContent content={project.body || {}} />
    </Layout>
  );
}

export async function getServerSideProps({ params, res }) {
  // Set Cache-Control headers for better performance and CDN caching
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=31536000, stale-while-revalidate=59",
  );

  const { id: slug } = params; // Destructure slug directly from params

  try {
    const project = await getClient(false).fetch(PROJECT_QUERY, { slug });

    if (!project) {
      return {
        notFound: true, // Return 404 if project not found
      };
    }

    return {
      props: {
        project, // Pass the entire project object
        slug,
      },
    };
  } catch (error) {
    console.error("Error fetching project data:", error);
    return {
      notFound: true, // Return 404 on fetch error
    };
  }
}

export default Project;
