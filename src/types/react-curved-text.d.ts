// /src/types/react-curved-text.d.ts

declare module 'react-curved-text' {
  interface ReactCurvedTextProps {
    width: number;
    height: number;
    cx: number;
    cy: number;
    rx: number;
    ry: number;
    startOffset?: number;
    text: string;
    reversed?: boolean;
    svgProps?: React.SVGProps<SVGSVGElement>;
    tspanProps?: React.SVGProps<SVGTSpanElement>;
  }

  export default function ReactCurvedText(
    props: ReactCurvedTextProps
  ): JSX.Element;
}
