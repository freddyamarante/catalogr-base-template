import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface InternalLinkProps {
  children?: React.ReactNode;
  className?: string;
  data?: {
    _type: "internalLink";
    name?: string | null;
    link?: {
      _type: string;
      slug?: string | null; 
    } | null;
    anchor?: string;
    _key: string;
  };
  onClick?: () => void;
}

const InternalLink: React.FC<InternalLinkProps> = ({
  children,
  className,
  data,
  onClick,
}) => {
  const linkedDoc = data?.link;
  
  const slug = linkedDoc?.slug || '';
  const docType = linkedDoc?._type;

  const path = () => {
    if (!docType) return '/';
    
    switch (docType) {
      case 'home': 
        return '/';
      case 'catalogPage':
        return '/catalogo';
      case 'page':
        return `/${slug}`;
      case 'catalog':
        return `/catalogo/${slug}`;
      default:
        return '/';
    }
  };

  return (
    <Link
      className={cn(
        'focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-nowrap',
        className
      )}
      onClick={onClick}
      href={path()}
    >
      {children || data?.name}
    </Link>
  );
};

export default InternalLink;