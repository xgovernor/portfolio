import { getClient as client } from './../utils/sanity'

async function getBlogPosts() {
  const query = `*[_type == "post"] {
    slug,
    _updatedAt
  }`
  return await client().fetch(query)
}

async function getProjects() {
  const query = `*[_type == "project"] {
    slug,
    _updatedAt
  }`
  return await client().fetch(query)
}

export default async function sitemap() {
  const baseUrl = 'https://at-mah.vercel.app'

  // Get dynamic routes
  const posts = await getBlogPosts()
  const projects = await getProjects()

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}#about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}#contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Blog post routes
  const blogRoutes = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  // Project routes
  const projectRoutes = projects.map((project: any) => ({
    url: `${baseUrl}/projects/${project.slug.current}`,
    lastModified: new Date(project._updatedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogRoutes, ...projectRoutes]
}
