import React from 'react';

import { cn } from '@/lib/utils';

export interface ExternalLinkProps {
  children?: React.ReactNode;
  className?: HTMLDivElement['className'];
  data: {
    _type: "externalLink";
    name?: string;
    link?: string | null;
    openInNewTab?: boolean;
    _key: string;
  }
}
  

const ExternalLink: React.FC<ExternalLinkProps> = ({
  children,
  className,
  data,
}) => {
  if (!data) return null;

  const { link, name, openInNewTab } = data;

  return link ? (
    <a
      className={cn([
        'focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-nowrap text-xl',
        className,
      ])}
      href={link}
      rel="noopener noreferrer"
      target={openInNewTab ? '_blank' : '_self'}
    >
      {children ? children : name}
    </a>
  ) : null;
}

export default ExternalLink;
