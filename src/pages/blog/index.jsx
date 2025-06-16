import { groq } from "next-sanity";
import PageHeader from "../../components/PageHeader";
import Layout from "../../components/Layout";
import { getClient } from "../../utils/sanity";
import IMG from "../../assets/images/blog.png";
import { info } from "./../../components/Meta/meta.constant.js"; // Import info for base URLs
import PageBanner from "../../components/PageBanner";
import BlogGrid from "../../components/BlogGrid";

// GROQ query for featured Projects & Articles.
const QUERY = groq`*[_type == "article"] {
  _id,
  "date": {
    _createdAt,
    publishedAt,
    _updatedAt
  },
  featured,
  "category": category[0] -> {
    _id,
    title
  },
  thumbnail,
  title,
  excerpt,
  "slug": slug.current,
  }`;

function Blog({ data }) {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog", // More specific for a blog index page
    name: `Blog - Insights & Thoughts from Abu Taher Muhammad`,
    description: `Explore occasional thoughts, insights, and technical articles on web development, software engineering, and industry trends by Abu Taher Muhammad.`,
    url: `${info.website}/blog`,
    // Use an ImageObject for better image context, potentially multiple sizes
    // image: {
    //   "@type": "ImageObject",
    //   url: `${info.website}${IMG.src}`, // Use the blog banner image
    //   caption: `Header image for Abu Taher Muhammad's Blog`,
    //   // Consider adding width and height for better image indexing
    //   // width: 1200,
    //   // height: 630
    // },

    // The main content of this Blog page is a list of blog posts
    mainEntity: {
      "@type": "ItemList",
      itemListElement: data?.articles?.map((article, index) => ({
        // Add index for position
        "@type": "ListItem",
        position: index + 1, // Ensure position starts from 1
        item: {
          "@type": "BlogPosting", // More specific than Article for blog posts
          headline: article.title, // Use headline for the article title
          url: `${info.website}/blog/${article.slug}`,
          description: article.excerpt,

          // Image for individual articles should be an ImageObject
          image: {
            "@type": "ImageObject",
            url: `${info.website}/${article.thumbnail}`,
            caption: `Thumbnail for '${article.title}'`,
            // Consider adding width and height for better image indexing
            // width: 800,
            // height: 450
          },

          // Author of the individual blog post (you)
          author: {
            "@type": "Person",
            name: info.author,
            url: info.website,
            // Add sameAs for E-A-T (Expertise, Authoritativeness, Trustworthiness)
            // sameAs: [
            //   "https://linkedin.com/in/yourprofile",
            //   "https://twitter.com/yourhandle",
            //   "https://github.com/yourgithub",
            // ],
          },

          // Publisher of the blog post (your website/organization)
          publisher: {
            "@type": "Organization", // Or Person if it's strictly a personal blog with no org name
            name: info.websiteName || info.author, // Your website name or your name
            url: info.website,
            logo: {
              "@type": "ImageObject",
              url: `${info.website}/images/your-logo.png`, // Path to your website's logo
              width: 600, // Recommended max width
              height: 60, // Recommended max height
            },
          },

          datePublished: article.date?.publishedAt || article.date?._createdAt, // Ensure valid ISO 8601 date format
          dateModified: article.date?._updatedAt || article.date?._createdAt, // Ensure valid ISO 8601 date format

          // Optional but recommended for better search performance:
          // articleSection: "Web Development", // e.g., "Software Engineering", "Productivity"
          // keywords: "web development, JavaScript, React.js, Node.js, programming", // Comma-separated relevant keywords
          // wordCount: article.wordCount, // If you track this
          // mainEntityOfPage: { // This links the article to its canonical URL page
          //   "@type": "WebPage",
          //   "@id": `${info.website}/blog/${article.slug}`
          // }
        },
      })),
      numberOfItems: data?.articles?.length || 0,
    },

    // Author of the overall blog (you)
    author: {
      "@type": "Person",
      name: info.author,
      url: info.website,
      // sameAs: [
      //   "https://linkedin.com/in/yourprofile",
      //   "https://twitter.com/yourhandle",
      //   "https://github.com/yourgithub",
      // ],
    },

    // Add `@id` for entity resolution, useful for building a knowledge graph
    "@id": `${info.website}/blog#blogpage`,

    // Consider adding a BreadcrumbList schema on the page for better navigation visibility
    // This would typically be a separate JSON-LD block.
  };

  return (
    <>
      {/* Pass the full meta object to the Layout component */}
      <Layout
        className="page__blog"
        meta={{
          children: (
            <script
              id="structured-data-projects-index-page"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData),
              }}
            />
          ),
        }}
      >
        <PageHeader
          heading="KNOWLEDGE BOOK"
          subheading={[
            "Occasional",
            "thoughts & insights.",
            "from Muhammad's life.",
          ]}
        />
        <PageBanner img={IMG} />
        <BlogGrid articles={data?.articles} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const articles = await getClient(preview).fetch(QUERY);

  return {
    props: {
      data: { articles },
    },
    revalidate: 60 * 60 * 6, // Revalidate every 6 hours
  };
}

export default Blog;
