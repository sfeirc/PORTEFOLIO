export default function customImageLoader({ src }) {
  return src.startsWith('/') ? `/PORTEFOLIO${src}` : src;
} 