import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgKey = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <path
        d="M4.2 38.3 20.4 22l4.6 4.5L8.5 44c-1.6 1.5-.9.2-4 .2l-.3-.2a4 4 0 0 1 0-5.7z"
        fill="#FFC445"
      />
      <path
        d="m12 40 1 4.4c0 .4-.2.6-.6.5l-6.1-1.3h-.2V43l17-16.8c.1-.2.3-.2.4-.1l.1.2 1.3 6.1c.1.4-.1.6-.5.5L20 32l1 4.5c0 .4-.2.6-.6.5L16 36l1 4.5c0 .4-.2.6-.6.5L12 40z"
        fill="#FFD476"
      />
      <path
        d="M31.5 31a13.5 13.5 0 1 1 0-27 13.5 13.5 0 0 1 0 27zm2-12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"
        fill="#FFC445"
      />
    </g>
  </svg>
);

export default SvgKey;