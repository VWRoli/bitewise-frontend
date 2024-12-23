import { IPageProps } from '@/app/utils/interfaces';
import Statistics from '@/app/(modules)/[lang]/dashboard/components/Statistics';

export default function Page(props: IPageProps) {
  return (
    <div className="p-6">
      <Statistics lang={props.params.lang} />
    </div>
  );
}
