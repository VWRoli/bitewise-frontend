import { Button, ButtonProps } from '@/app/components/ui/button';
import { cn } from '@/app/lib';
import { LoaderCircle } from 'lucide-react';

interface IProps extends ButtonProps {
  className?: string;
  loading?: boolean;
}
const LoadingButton = (props: IProps) => {
  const { className, loading, ...rest } = props;
  return (
    <Button
      {...rest}
      className={cn('', className, {
        'pointer-events-none': loading,
      })}
      disabled={loading || rest.disabled}
    >
      {loading ? <LoaderCircle className="animate-spin" /> : <>Sign Up</>}
    </Button>
  );
};

export default LoadingButton;
