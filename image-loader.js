export default function imageLoader({ src }) {
  return src.startsWith('/') ? `/PORTFOLIO${src}` : src;
} 