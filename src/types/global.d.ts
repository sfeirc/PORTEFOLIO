import { SVGProps } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

declare module '@heroicons/react/24/outline' {
  const IconComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  export default IconComponent;
}

export {}; 