const config ={
  sanity: {
    PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "9q9s9j9m", // 1at06ab8
    DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    TOKEN: process.env.SANITY_API_TOKEN || process.env.NEXT_PUBLIC_SANITY_TOKEN,
    VERSION: process.env.NEXT_PUBLIC_SANITY_VERSION || "2023-05-03",
    CDN: process.env.NODE_ENV === "production",
  },
};

export default config
