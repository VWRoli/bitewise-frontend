import BasicInfo from '@/app/(modules)/dashboard/(modules)/profile/components/Profile/BasicInfo';
import PersonalInformation from '@/app/(modules)/dashboard/(modules)/profile/components/Profile/PersonalInformation';
import SocialProfiles from '@/app/(modules)/dashboard/(modules)/profile/components/Profile/SocialProfiles';

const Profile = () => {
  return (
    <div className="space-y-8">
      <BasicInfo />
      <PersonalInformation />
      <SocialProfiles />
    </div>
  );
};

export default Profile;
