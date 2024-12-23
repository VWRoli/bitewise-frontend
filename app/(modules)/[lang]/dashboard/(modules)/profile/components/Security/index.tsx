import ChangePassword from '@/app/(modules)/[lang]/dashboard/(modules)/profile/components/Security/ChangePassword';
import RecoveryCodes from '@/app/(modules)/[lang]/dashboard/(modules)/profile/components/Security/RecoveryCodes';
import { Separator } from '@/app/components/ui/separator';
import Sessions from '@/app/(modules)/[lang]/dashboard/(modules)/profile/components/Security/Sessions';
import TwoFa from '@/app/(modules)/[lang]/dashboard/(modules)/profile/components/Security/TwoFa';

const Security = () => {
  return (
    <div className="space-y-8">
      <ChangePassword />
      <TwoFa />
      <RecoveryCodes />
      <Separator />
      <Sessions />
    </div>
  );
};

export default Security;
