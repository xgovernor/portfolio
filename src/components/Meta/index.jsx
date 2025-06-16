import Head from "next/head";
import { memo } from "react";
import { info } from "./meta.constant.js";

function Meta({ pageTitle, pageDescription, children }) {
  const finalTitle = pageTitle
    ? `${pageTitle} | ${info.author} - ${info.jobTitle}`
    : `${info.title} | ${info.jobTitle}`;
  const finalDescription = pageDescription || info.description;
  const finalImage = `${info.website}/banner.jpg`;

  const structuredPersonData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: finalTitle,
    dateCreated: "2021-01-01T00:00:00+06:00",
    dateModified: "2025-06-16T00:00:00+06:00",
    mainEntity: {
      "@type": "Person",
      name: info.author,
      alternateName: info.alternateName,
      description: info.description,
      jobTitle: info.jobTitle,
      gender: "Male",
      identifier: info.identifier || "xgovernor",
      url: info.website,
      sameAs: [
        "https://www.linkedin.com/in/abutahermuhammad/",
        "https://github.com/xgovernor",
        "https://www.facebook.com/abutahermuhammadh",
        "https://abutaher-muhammad.medium.com/",
        "https://x.com/abu_taher_m",
        "https://dev.to/abutahermuhammad",
      ],
      image: [
        finalImage,
        `${info.website}/avatar.jpg`,
        `${info.website}/favicon.svg`,
        `${info.website}/favicon.jpg`,
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Shahjalal Uposhahar",
        addressLocality: "Sylhet",
        addressRegion: "Sylhet",
        postalCode: "3100",
        addressCountry: "Bangladesh",
      },
      birthDate: "2003-02-10",
      birthPlace: "Sylhet",
      nationality: "Bangladeshi",
    },
  };

  // This would be a separate JSON-LD script block on your single blog post page
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home", // Or your site's root name
        item: info.website, // Your website's root URL
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects", // The name of your blog index page
        item: `${info.website}/Projects`, // The URL of your blog index page
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Blog", // The title of the current blog post
        item: `${info.website}/blog`, // The URL of the current blog post
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact", // The title of the current blog post
        item: `${info.website}/#contact`, // The URL of the current blog post
      },
    ],
  };

  return (
    <>
      <Head>
        <title key="title">{finalTitle}</title>
        <meta name="description" content={finalDescription} key="description" />
        <meta name="author" content={info.author} key="author" />
        <meta name="robots" content="index, follow" key="robots" />
        <meta charSet="utf-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
        {/* Open Graph Tags */}
        <meta property="og:title" content={finalTitle} key="og:title" />
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
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:url" content={info.website} key="og:url" />
        <meta property="og:image" content={finalImage} key="og:image" />
        <meta
          property="og:image:alt"
          content={`${finalTitle} - Image`}
          key="og:image:alt"
        />
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
        <meta name="twitter:title" content={finalTitle} key="twitter:title" />
        <meta
          name="twitter:description"
          content={finalDescription}
          key="twitter:description"
        />
        <meta name="twitter:image" content={finalImage} key="twitter:image" />
        <meta
          name="twitter:image:alt"
          content={`${finalTitle} - Image`}
          key="twitter:image:alt"
        />
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
        <link rel="canonical" href={info.website} key="canonical" />

        <script
          id="structured-data-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredPersonData),
          }}
        />

        <script
          id="structured-data-breadcrumbs"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        {children}
      </Head>
    </>
  );
}

export default memo(Meta);
