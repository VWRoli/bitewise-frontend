import { ArrowDownAZ, ArrowUpAZ } from 'lucide-react';
import { TableHead, TableHeader, TableRow } from '@/app/components/ui/table';

import { EOrderDirection } from '@/app/utils/enums';
import { INGREDIENT_TABLE_HEAD_DATA } from '@/app/(modules)/[lang]/dashboard/(modules)/ingredients/constants';
import Link from 'next/link';
import { cn } from '@/app/lib';

interface IProps {
  page?: string;
  orderBy?: string;
  orderDirection?: EOrderDirection;
}

const IngredientTableHead = (props: IProps) => {
  const { page = 1, orderBy, orderDirection } = props;

  const isAscending = orderDirection === EOrderDirection.ASC;

  const Icon = isAscending ? ArrowDownAZ : ArrowUpAZ;

  return (
    <TableHeader className="hidden uppercase lg:table-header-group">
      <TableRow>
        {INGREDIENT_TABLE_HEAD_DATA.map((headCell) => (
          <TableHead key={headCell.id}>
            {headCell.label && (
              <Link
                href={`?page=${page}&orderBy=${headCell.id}&orderDirection=${isAscending ? EOrderDirection.DESC : EOrderDirection.ASC}`}
                className={cn(
                  'group flex items-center gap-1 transition-colors duration-200 hover:text-primary',
                  headCell.align,
                  !headCell.sortable && 'pointer-events-none',
                  headCell.id === orderBy && 'text-primary',
                )}
              >
                {headCell.label}
                {headCell.id === orderBy && (
                  <Icon size={16} className="text-primary" />
                )}
              </Link>
            )}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
};

export default IngredientTableHead;
