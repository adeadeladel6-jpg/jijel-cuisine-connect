import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'o02irund',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});
