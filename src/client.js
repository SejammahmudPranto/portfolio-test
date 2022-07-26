import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: "f0eq4kn1",
  dataset: 'production',
  apiVersion: '2022-07-18',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
  
  
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
