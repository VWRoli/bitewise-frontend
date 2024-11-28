import { Button } from '@/app/components/ui/button';

interface IProps {
  onClear: () => void;
}
const CalculatorFooter = ({ onClear }: IProps) => {
  return (
    <>
      <Button variant="default" type="submit">
        Calculate
      </Button>
      <Button type="button" variant="ghost" onClick={onClear}>
        Reset
      </Button>
    </>
  );
};

export default CalculatorFooter;
