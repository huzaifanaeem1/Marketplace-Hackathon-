import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, projectToken } from "../env";

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: projectToken,
  stega: {
    enabled: true,
    studioUrl: "/studio",
  },
});