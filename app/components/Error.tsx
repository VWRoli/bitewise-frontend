import { IError } from '@/utils/interfaces/error.interface';

interface IProps {
  result: IError;
}
const CustomError = ({ result }: IProps) => {
  return (
    <h6 className="text-xl font-bold text-center text-red-500">
      {(result.error as any).message}
    </h6>
  );
};

export default CustomError;
