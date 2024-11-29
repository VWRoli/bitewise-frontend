import { Button, ButtonProps } from '@/app/components/ui/button';
import { cn } from '@/app/lib';
import { LoaderCircle } from 'lucide-react';
import { PropsWithChildren } from 'react';

interface IProps extends ButtonProps, PropsWithChildren {
  className?: string;
  loading?: boolean;
}
const LoadingButton = (props: IProps) => {
  const { className, loading, children, ...rest } = props;
  return (
    <Button
      {...rest}
      className={cn('', className, {
        'pointer-events-none': loading,
      })}
      disabled={loading || rest.disabled}
    >
      {loading ? <LoaderCircle className="animate-spin" /> : <>{children}</>}
    </Button>
  );
};

export default LoadingButton;