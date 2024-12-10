import ChangePassword from '@/app/(modules)/dashboard/(modules)/profile/components/Security/ChangePassword';
import TwoFa from '@/app/(modules)/dashboard/(modules)/profile/components/Security/TwoFa';

const Security = () => {
  return (
    <div className="space-y-8">
      <ChangePassword />
      <TwoFa />
    </div>
  );
};

export default Security;
