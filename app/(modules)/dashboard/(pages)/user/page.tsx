import { fetchMe } from '@/app/(modules)/dashboard/(pages)/user/actions';
import BasicInfo from '@/app/(modules)/dashboard/(pages)/user/components/BasicInfo';
import PersonalInformation from '@/app/(modules)/dashboard/(pages)/user/components/PersonalInformation';
import { IUser } from '@/app/(modules)/dashboard/(pages)/user/interfaces';
import Typography from '@/app/components/Typography';

export default async function Page() {
  const data = await fetchMe();

  return (
    <div className="mt-8 p-2 md:p-4 xl:p-8">
      <nav></nav>
      <section className="flex flex-col gap-4">
        <Typography variant="h4">My Profile</Typography>
        <div className="space-y-8">
          <BasicInfo user={data.data as IUser} />
          <PersonalInformation user={data.data as IUser} />
        </div>
      </section>
    </div>
  );
}
