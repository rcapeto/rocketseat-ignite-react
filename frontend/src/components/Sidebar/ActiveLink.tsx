import { FunctionComponent, cloneElement, ReactElement } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

export interface ActiveLinkProps extends LinkProps {
   children: ReactElement;
   link: string;
};

export const ActiveLink: FunctionComponent<ActiveLinkProps> = ({ 
   children,
   link,
   ...rest
}) => {
   const { asPath } = useRouter();

   const isActive = asPath.includes(link);

   return(
      <Link {...rest}>
         {
            cloneElement(children, {
               color: isActive ? 'pink.400' : 'gray.50',
            })
         }
      </Link>
   );
};