import Head from "next/head";
import Script from "next/script";
import { memo } from "react";
import { info } from "./meta.constant.js";
import { imageBuilder } from "../../utils/sanity.js";

function Meta({
  pageTitle, // Renamed from 'title' to avoid conflict with og:title variable name
  pageDescription, // Renamed from 'description' for clarity
  pageImage = info.avatar, // Renamed from 'image' for clarity
  pageUrl, // New prop for canonical and OG/Twitter URL
  projectData = null,
  blogArticlesData = null,
  blogArticleData = null,
  projectsData = null,
  children,
}) {
  // Fallbacks if props are not provided
  const finalTitle = pageTitle
    ? `${pageTitle} | ${info.jobTitle}`
    : `${info.title} | ${info.jobTitle}`;
  const finalDescription = pageDescription || info.description;
  const finalImage = pageImage.startsWith("/")
    ? `${info.website}${pageImage}`
    : pageImage; // Ensure absolute URL for image
  const finalUrl = pageUrl || info.website; // Use the specific page URL or fallback to main website URL

  // Define structured data (Person Schema) - moving this here for clarity
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: info.author, // Use info.author directly for name
    jobTitle: info.jobTitle,
    gender: "Male",
    url: info.website, // Base URL for the person
    sameAs: [
      "https://www.linkedin.com/in/abutahermuhammad/",
      "https://github.com/abutahermuhammad",
      // Add other relevant social media profiles like Twitter if you have a public one for professional use.
      // E.g., `https://twitter.com/abutahermuhammad`
    ],
    image: finalImage, // Use the absolute image URL
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shahjalal Uposhahar", // Consider if this level of detail is necessary or if a broader area is sufficient for public display
      addressLocality: "Sylhet",
      addressRegion: "Sylhet",
      postalCode: "3100",
      addressCountry: "Bangladesh",
    },
    email: info.email,
    birthDate: "2003-02-10", // Consider if this is necessary for public display
    birthPlace: "Sylhet", // Consider if this is necessary for public display
    nationality: "Bangladeshi", // Consider if this is necessary for public display
  };

  // --- Start: NEW JSON-LD for Projects Index Page (WebPage + ItemList of SoftwareSourceCode) ---
  let projectsIndexStructuredData = null;
  if (projectsData && Array.isArray(projectsData) && projectsData.length > 0) {
    const listItems = projectsData.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareSourceCode", // Each item in the list is a SoftwareSourceCode
        url: `${info.website}/projects/${project.slug}`, // Absolute URL to the individual project
        name: project.title || project.projectName,
        description: project.excerpt,
        image: imageBuilder(project.thumbnail).width(800).height(450).url(), // Thumbnail for the project
        author: {
          "@type": "Person",
          name: info.author, // Assuming you are the author/developer of all projects
        },
        // You can add more project-specific properties if they are available in the `project` snippet
        // "codeRepository": project.githubUrl,
        // "programmingLanguage": project.technology ? (Array.isArray(project.technology) ? project.technology.join(', ') : project.technology) : null,
      },
    }));

    projectsIndexStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage", // The page itself is a WebPage
      name: finalTitle,
      description: finalDescription,
      url: finalUrl,
      image: finalImage,
      mainEntity: {
        // This page's main content is a list
        "@type": "ItemList",
        name: finalTitle,
        itemListElement: listItems,
        numberOfItems: projectsData.length,
      },
      author: {
        // Author of the projects page itself
        "@type": "Person",
        name: info.author,
        url: info.website,
      },
    };
  }
  // --- End: NEW JSON-LD for Projects Index Page ---

  // --- Start: New JSON-LD for Project ---
  let projectStructuredData = null;
  if (projectData) {
    projectStructuredData = {
      "@context": "https://schema.org",
      "@type": "SoftwareSourceCode", // Or "CreativeWork" or "Product"
      name: projectData.title || projectData.projectName,
      description: projectData.excerpt,
      url: `${info.website}/projects/${projectData.slug}`, // Full URL to the project page
      image: imageBuilder(projectData.thumbnail).width(1200).height(630).url(), // Optimized image URL
      author: {
        "@type": "Person",
        name: info.author,
        url: info.website, // Link back to your main profile
      },
      codeRepository: projectData.githubUrl || null, // If you store GitHub URL in Sanity
      programmingLanguage: projectData.technology
        ? Array.isArray(projectData.technology)
          ? projectData.technology.join(", ")
          : projectData.technology
        : null,
      license: "https://opensource.org/licenses/MIT", // Example: if your code is MIT licensed, or null
      // Add more specific properties if available from your Sanity data:
      // "applicationCategory": "Web Application",
      // "operatingSystem": "All",
      // "dateCreated": projectData.dateCreated, // if you have a date field
      // "dateModified": projectData._updatedAt, // if you have this in Sanity
      isPartOf: {
        // Link back to your main projects page
        "@type": "WebPage",
        name: "Projects by Abu Taher Muhammad",
        url: `${info.website}/projects`,
      },
      // Consider adding 'screenshot' if you have multiple images for the project
      // "screenshot": [
      //    imageBuilder(projectData.screenshot1).url(),
      //    imageBuilder(projectData.screenshot2).url()
      // ]
    };
  }
  // --- End: New JSON-LD for Project ---

  let blogPageStructuredData = null;
  if (
    blogArticlesData &&
    Array.isArray(blogArticlesData) &&
    blogArticlesData.length > 0
  ) {
    const listItems = blogArticlesData.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Article", // Each item in the list is an Article
        url: `${info.website}/blog/${article.slug}`, // Absolute URL to the individual article
        name: article.title,
        headline: article.title, // Headline for the article
        description: article.excerpt,
        image: article?.thumbnail
          ? imageBuilder(article.thumbnail).width(800).height(450).url()
          : "/banner.jpg", // Thumbnail for the article
        // You might want to add author, datePublished, etc., here if available in blogArticlesData
        author: {
          "@type": "Person",
          name: info.author, // Assuming you are the author of all blog posts
          url: info.website, // Link to your author page/profile
        },
        datePublished: article.date?.publishedAt || article.date?._createdAt, // Use publishedAt if available, otherwise createdAt
        dateModified: article.date?._updatedAt || article.date?._createdAt,
      },
    }));

    blogPageStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage", // The page itself is a WebPage
      name: finalTitle,
      description: finalDescription,
      url: finalUrl,
      image: finalImage,
      mainEntity: {
        // This page's main content is a list
        "@type": "ItemList",
        name: finalTitle,
        itemListElement: listItems,
        numberOfItems: blogArticlesData.length,
      },
      author: {
        // Author of the blog page itself
        "@type": "Person",
        name: info.author,
        url: info.website,
      },
    };
  }
  // --- End: NEW JSON-LD for Blog Page ---

  // --- Start: NEW JSON-LD for Single Blog Article (BlogPosting) ---
  let singleArticleStructuredData = null;
  if (blogArticleData) {
    // Ensure all URLs are absolute
    const articleImageUrl = blogArticleData.image
      ? imageBuilder(blogArticleData.image).width(1200).height(630).url()
      : null;
    const articleUrl = `${info.website}/blog/${blogArticleData.slug}`;

    singleArticleStructuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: blogArticleData.title,
      description: blogArticleData.excerpt,
      image: {
        "@type": "ImageObject",
        url: articleImageUrl,
        width: 1200, // Recommended width for large image
        height: 630, // Recommended height for large image
      },
      url: articleUrl,
      datePublished:
        blogArticleData.date.publishedAt || blogArticleData.date._createdAt,
      dateModified:
        blogArticleData.date._updatedAt || blogArticleData.date._createdAt,
      author: {
        "@type": "Person",
        name: info.author,
        url: info.website, // Link to your author page/profile
      },
      publisher: {
        // Required for BlogPosting for rich results
        "@type": "Organization", // Or "Person" if you want to be the publisher
        name: info.author + " Portfolio", // Your website/brand name
        logo: {
          "@type": "ImageObject",
          url: `${info.website}${info.avatar}`, // Your logo/avatar
          width: 60, // Example size
          height: 60, // Example size
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": articleUrl, // Canonical URL of the article page
      },
      // Optional: if your Sanity 'body' field is plain text for this prop, otherwise omit
      // "articleBody": blogArticleData.body,
      articleSection: blogArticleData.category?.map((cat) => cat.title) || [], // Map categories to strings
      keywords:
        blogArticleData.topic?.map((topic) => topic.title).join(",") || "", // Map topics to comma-separated string
      // Consider adding 'wordCount' if you can calculate it
      // "wordcount": blogArticleData.body ? blogArticleData.body.split(/\s+/g).length : undefined,
    };
  }
  // --- End: NEW JSON-LD for Single Blog Article ---

  return (
    <>
      <Head>
        {/* General Tags */}
        {/*
          Using 'key' prop for meta tags: Next.js can deduplicate or replace meta tags
          if they have the same 'key'. This is useful when overriding tags on different pages.
        */}
        <title key="title">{finalTitle}</title>
        <meta name="description" content={finalDescription} key="description" />
        <meta name="author" content={info.author} key="author" />
        {/*
          Removed <meta name="keywords" content={info.description} />
          Keywords meta tag is largely ignored by Google. If you want to include keywords,
          they should be naturally integrated into your title, description, and page content.
          Using a full description as keywords is not effective.
        */}
        <meta name="robots" content="index, follow" key="robots" />
        {/*
          httpEquiv="Content-Type" is generally not needed if your server sends the correct
          Content-Type header and you have <meta charset="UTF-8">.
          <meta charset="UTF-8" /> should be the first meta tag in <head>.
        */}
        <meta charSet="utf-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
        {/* Open Graph Tags */}
        <meta property="og:title" content={finalTitle} key="og:title" />
        {/*
          og:site_name should be the name of your website/brand, not the page title.
          Example: "Abu Taher Muhammad Portfolio"
        */}
        <meta
          property="og:site_name"
          content={info.author + " Portfolio"}
          key="og:site_name"
        />
        <meta
          property="og:description"
          content={finalDescription}
          key="og:description"
        />
        <meta property="og:type" content="website" key="og:type" />{" "}
        {/* 'website' for homepage, 'article' for blog posts */}
        <meta property="og:url" content={finalUrl} key="og:url" />{" "}
        {/* Use the specific page URL */}
        <meta property="og:image" content={finalImage} key="og:image" />{" "}
        {/* Ensure absolute URL */}
        <meta
          property="og:image:alt"
          content={`${finalTitle} - Image`}
          key="og:image:alt"
        />{" "}
        {/* Dynamic alt text for image */}
        <meta property="og:locale" content="en_US" key="og:locale" />
        {/* Twitter Tags */}
        <meta
          name="twitter:card"
          content="summary_large_image"
          key="twitter:card"
        />
        <meta
          name="twitter:site"
          content="@abutahermuhammad"
          key="twitter:site"
        />
        <meta
          name="twitter:creator"
          content="@abutahermuhammad"
          key="twitter:creator"
        />
        <meta name="twitter:title" content={finalTitle} key="twitter:title" />{" "}
        {/* Use finalTitle for consistency */}
        <meta
          name="twitter:description"
          content={finalDescription}
          key="twitter:description"
        />{" "}
        {/* Use finalDescription for consistency */}
        <meta
          name="twitter:image"
          content={finalImage}
          key="twitter:image"
        />{" "}
        {/* Ensure absolute URL */}
        <meta
          name="twitter:image:alt"
          content={`${finalTitle} - Image`}
          key="twitter:image:alt"
        />{" "}
        {/* Dynamic alt text for image */}
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" key="favicon-ico" />
        <link
          rel="icon"
          href="/favicon.svg"
          type="image/svg+xml"
          key="favicon-svg"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          key="apple-touch-icon"
        />
        <link rel="manifest" href="/manifest.json" key="manifest" />
        <link
          rel="mask-icon"
          href="/favicon.svg"
          color="#1A1A1A"
          key="mask-icon"
        />
        <meta
          name="msapplication-TileColor"
          content="#1A1A1A"
          key="msapplication-tile-color"
        />
        <meta name="theme-color" content="#1A1A1A" key="theme-color" />
        {/* Canonical Tag (Crucial) */}
        <link rel="canonical" href={finalUrl} key="canonical" />
        {/* <link rel="alternate" type="application/rss+xml" href="/rss.xml" /> */}
        {/* JSON-LD:Person */}
        <script
          id="structured-data-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        {/* NEW: JSON-LD for Projects Index Page (conditionally rendered) */}
        {projectsIndexStructuredData && (
          <script
            id="structured-data-projects-index-page"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(projectsIndexStructuredData),
            }}
          />
        )}
        {/* JSON-LD:Project (conditionally rendered if projectData is passed) */}
        {projectStructuredData && (
          <script
            id="structured-data-project"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(projectStructuredData),
            }}
          />
        )}
        {/* NEW: JSON-LD for Blog Page (conditionally rendered) */}
        {blogPageStructuredData && (
          <script
            id="structured-data-blog-page"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(blogPageStructuredData),
            }}
          />
        )}
        {/* NEW: JSON-LD for Single Blog Article (conditionally rendered) */}
        {singleArticleStructuredData && (
          <script
            id="structured-data-single-article"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(singleArticleStructuredData),
            }}
          />
        )}
        {children}
      </Head>
    </>
  );
}

export default memo(Meta);
