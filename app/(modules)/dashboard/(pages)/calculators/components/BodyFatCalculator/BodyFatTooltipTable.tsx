import { Info } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableHeader,
} from '@/app/components/ui/table';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/app/components/ui/tooltip';

const BodyFatTooltipTable = () => {
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
                <TableHead className="text-light">Description</TableHead>
                <TableHead className="text-light">Women</TableHead>
                <TableHead className="text-light">Men</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-light">Essential fat</TableCell>
                <TableCell className="text-light">10-13%</TableCell>
                <TableCell className="text-light">2-5%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-light">Athletes</TableCell>
                <TableCell className="text-light">14-20%</TableCell>
                <TableCell className="text-light">6-13%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-light">Fitness</TableCell>
                <TableCell className="text-light">21-24%</TableCell>
                <TableCell className="text-light">14-17%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-light">Average</TableCell>
                <TableCell className="text-light">25-31%</TableCell>
                <TableCell className="text-light">18-24%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-light">Obese</TableCell>
                <TableCell className="text-light">32+%</TableCell>
                <TableCell className="text-light">25+%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default BodyFatTooltipTable;
