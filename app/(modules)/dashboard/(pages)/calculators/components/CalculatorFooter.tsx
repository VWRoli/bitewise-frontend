import { Button } from '@/components/ui/button';

interface IProps {
  onClear: () => void;
}
const CalculatorFooter = ({ onClear }: IProps) => {
  return (
    <>
      <Button variant="default" type="submit">
        Calculate
      </Button>
      <Button variant="ghost" onClick={onClear}>
        Clear
      </Button>
    </>
  );
};

export default CalculatorFooter;
