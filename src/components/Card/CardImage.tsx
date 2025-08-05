import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

export type CardImageProps = {
  src: string;
  href: string;
  alt: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
};

const cardImageStyles = cva('rounded-t-lg');

export const CardImage = ({
  src,
  href,
  target,
  alt = '_blank',
}: CardImageProps) => {
  const mergedClassNames = twMerge(cardImageStyles());

  return (
    <a href={href} target={target}>
      <img className={mergedClassNames} src={src} alt={alt} />
    </a>
  );
};
