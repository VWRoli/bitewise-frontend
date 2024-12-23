import { ForwardRefExoticComponent, RefAttributes } from 'react';

import { LucideProps } from 'lucide-react';

export interface IMenuItem {
  label: string;
  route: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
}
