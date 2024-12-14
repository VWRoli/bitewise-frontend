import BasicInfo from '@/app/(modules)/dashboard/(modules)/profile/components/Profile/BasicInfo';
import DeleteAccount from '@/app/(modules)/dashboard/(modules)/profile/components/Profile/DeleteAccount';
import PersonalInformation from '@/app/(modules)/dashboard/(modules)/profile/components/Profile/PersonalInformation';
import SocialProfiles from '@/app/(modules)/dashboard/(modules)/profile/components/Profile/SocialProfiles';

const Profile = () => {
  return (
    <div className="space-y-8">
      <BasicInfo />
      <PersonalInformation />
      <SocialProfiles />
      <DeleteAccount />
    </div>
  );
};

export default Profile;
