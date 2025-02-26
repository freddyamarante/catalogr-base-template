import Link from 'next/link';
import { stegaClean } from '@sanity/client/stega';
import { cn } from '@/lib/utils';

export interface InternalLinkProps {
  children?: React.ReactNode;
  className?: string;
  data?: {
    _type: "internalLink";
    name?: string;
    link?: {
      _type: string;
      slug?: string;
    };
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
  if (!data?.link) return null;

  const { link, name, anchor } = data;
  const documentType = link._type;

  const slug = link.slug;
  const anchorHash = anchor ? `#${anchor}` : '';

  const path = () => {
    if (!slug) {
      switch (documentType) {
        case 'home':
          return '/';
        case 'catalogPage':
          return '/catalogo';
        default:
          console.warn(`Unknown document type: ${documentType} or missing slug`);
          return '/';
      }
    }

    switch (documentType) {
      case 'home':
        return '/';
      case 'catalogPage':
        return '/catalogo';
      case 'page':
        return `/${slug}`;
      case 'catalog':
        return `/catalogo/${slug}`;
      case 'taxonomy':
        return `/categorias/${slug}`;
      case 'taxon':
        return `/categorias/${slug}`;
      default:
        console.warn(`Unknown document type: ${documentType}`);
        return '/';
    }
  };

  const url = stegaClean(`${path()}${anchorHash}`);

  return (
    <Link
      className={cn(
        'focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className
      )}
      onClick={onClick}
      href={url}
    >
      {children || name}
    </Link>
  );
};

export default InternalLink;