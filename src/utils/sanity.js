import createImageUrlBuilder from "@sanity/image-url";
import { createClient, createCurrentUserHook } from "next-sanity";
import config from "./../config/index";

export const sanityConfig = {
  /**
   * Find your project ID and dataset in `sanity.json` in your studio project.
   * These are considered “public”, but you can use environment variables
   * if you want differ between local dev and production.
   *
   * https://nextjs.org/docs/basic-features/environment-variables
   **/
  dataset: config.sanity.DATASET,
  projectId: config.sanity.PROJECT_ID,
  apiVersion: config.sanity.VERSION, // Learn more: https://www.sanity.io/docs/api-versioning
  /**
   * Set useCdn to `false` if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   **/
  useCdn: config.sanity.CDN,

  /**
   * OPTIONAL config to enable authentication with custom token
   * You might need this if you host the preview on a different url than Sanity Studio
   */
  token: config.sanity.TOKEN,

  // EventSource: /* provide your own event source implementation. Required in browsers to support the above token parameter. */
};

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const imageBuilder = (source) =>
  createImageUrlBuilder(sanityConfig).image(source);

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient({
  ...sanityConfig,
  perspective: "published",
});

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...sanityConfig,
  useCdn: false,
  token: config.sanity.TOKEN,
  perspective: "previewDrafts",
});

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview=false) =>
  usePreview ? previewClient : sanityClient;
