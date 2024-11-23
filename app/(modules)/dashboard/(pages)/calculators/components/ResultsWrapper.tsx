import { Button } from '@/components/ui/button';
import { ListRestart } from 'lucide-react';
import React, { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren {
  reset: () => void;
  transition: boolean;
}
const ResultsWrapper = ({ children, reset, transition }: IProps) => {
  return (
    <div
      className={`transition-all duration-500 ease-in-out ${
        transition ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}
    >
      <div className="bg-white rounded-xl absolute bottom-0 left-0 h-[97%] w-full z-10 flex flex-col justify-center items-center gap-8">
        {children}
        <Button variant="outline" onClick={reset}>
          <ListRestart /> Calculate again
        </Button>
      </div>
    </div>
  );
};

export default ResultsWrapper;
