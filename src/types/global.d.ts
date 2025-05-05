declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

declare module '@heroicons/react/24/outline' {
  const IconComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  export default IconComponent;
}

export {}; 