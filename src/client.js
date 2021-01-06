import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: '579je08z',
  dataset: 'production',
  useCdn: true,
});
