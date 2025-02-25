import Link from 'next/link';
import {stegaClean} from '@sanity/client/stega';
import {cn} from '@/lib/utils';

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

  const {link, name, anchor} = data;
  const documentType = link._type;
  
  const slug = link.slug;
  const anchorHash = anchor ? `#${anchor}` : '';

  const path = () => {
    switch(documentType) {
      case 'home':
        return '/';
      case 'page':
        return `/${slug}`;
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
}

export default InternalLink;