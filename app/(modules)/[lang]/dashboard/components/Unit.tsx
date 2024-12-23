import { EUnit } from '@/app/(modules)/[lang]/dashboard/(modules)/ingredients/enums';
import { cn } from '@/app/lib';

interface IProps {
  unit: EUnit;
}
const Unit = ({ unit }: IProps) => {
  const grammClasses = 'bg-green-gradient';
  const pieceClasses = 'bg-dark-gradient';

  const isPiece = unit === EUnit.PIECE;
  return (
    <div
      className={cn(
        'w-fit rounded-md px-1 py-0.5 text-xs font-semibold uppercase text-white',
        isPiece ? pieceClasses : grammClasses,
      )}
    >
      {unit}
    </div>
  );
};

export default Unit;
