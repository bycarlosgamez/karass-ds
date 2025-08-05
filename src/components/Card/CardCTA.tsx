import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

export type CardCTAProps = {
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
};
const cardCTAStyles = cva('inline-flex items-center');

export const CardCTA = ({ href }: CardCTAProps) => {
  const mergedClassNames = twMerge(cardCTAStyles());

  return (
    <div className={mergedClassNames}>
      <a
        href={href}
        className='inline-flex  gap-1.5 font-semibold rounded-sm border transition-colors px-3 py-1.5 shadow-xs focus-visible:outline-solid focus-visible:outline-offset-2 items-center bg-blue-600 text-white border-transparent hover:bg-blue-700 active:bg-blue-800 focus:ring-4 focus:outline-hidden focus:ring-blue-300'
      >
        Read more
        <svg
          className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 14 10'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M1 5h12m0 0L9 1m4 4L9 9'
          />
        </svg>
      </a>
    </div>
  );
};
