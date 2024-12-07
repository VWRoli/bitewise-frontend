import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/app/components/ui/tooltip';

import { Info } from 'lucide-react';

const BmiTooltipTable = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Info size={16} />
        </TooltipTrigger>
        <TooltipContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-light">Classification</TableHead>
                <TableHead className="text-light">BMI range - kg/m²</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-light">Severe Thinness</TableCell>
                <TableCell className="text-light">&lt; 16</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-light">Moderate Thinness</TableCell>
                <TableCell className="text-light">16 - 17</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-light">Mild Thinness</TableCell>
                <TableCell className="text-light">17 - 18.5</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-light">Normal</TableCell>
                <TableCell className="text-light">18.5 - 25</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-light">Overweight</TableCell>
                <TableCell className="text-light">25 - 30</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-light">Obese Class I</TableCell>
                <TableCell className="text-light">30 - 35</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-light">Obese Class II</TableCell>
                <TableCell className="text-light">35 - 40</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-light">Obese Class III</TableCell>
                <TableCell className="text-light">&gt; 40</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default BmiTooltipTable;
