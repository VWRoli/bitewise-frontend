import { EUnit } from '@/app/(modules)/dashboard/(pages)/ingredients/enums';
import React from 'react';

interface IProps {
  unit: EUnit;
}
const Unit = ({ unit }: IProps) => {
  const grammClasses = 'bg-green-gradient';
  const pieceClasses = 'bg-dark-gradient';

  const isPiece = unit === EUnit.PIECE;
  return (
    <div
      className={` px-1 py-0.5 uppercase text-xs rounded-md text-white w-fit font-semibold ${
        isPiece ? pieceClasses : grammClasses
      }`}
    >
      {unit}
    </div>
  );
};

export default Unit;
