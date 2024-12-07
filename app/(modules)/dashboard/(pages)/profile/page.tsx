import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/app/components/ui/tabs';

import BillingInformation from '@/app/(modules)/dashboard/(pages)/profile/components/BillingInformation';
import { EProfileView } from '@/app/(modules)/dashboard/(pages)/profile/enum';
import Notifications from '@/app/(modules)/dashboard/(pages)/profile/components/Notifications';
import Preferences from '@/app/(modules)/dashboard/(pages)/profile/components/Preferences';
import Profile from '@/app/(modules)/dashboard/(pages)/profile/components/Profile';
import Security from '@/app/(modules)/dashboard/(pages)/profile/components/Security';

export default async function Page() {
  return (
    <div className="mt-8 p-2 md:p-4 xl:p-8">
      <nav></nav>
      <section>
        <Tabs defaultValue={EProfileView.MY_PROFILE}>
          <TabsList className="">
            <TabsTrigger value={EProfileView.MY_PROFILE}>
              My Profile
            </TabsTrigger>
            <TabsTrigger value={EProfileView.SECURITY}>Security</TabsTrigger>
            <TabsTrigger value={EProfileView.BILLING}>
              Billing Information
            </TabsTrigger>
            <TabsTrigger value={EProfileView.NOTIFICATIONS}>
              Notifications
            </TabsTrigger>
            <TabsTrigger value={EProfileView.PREFERENCES}>
              Preferences
            </TabsTrigger>
          </TabsList>
          <div className="pt-8">
            <TabsContent value={EProfileView.MY_PROFILE}>
              <Profile />
            </TabsContent>
            <TabsContent value={EProfileView.SECURITY}>
              <Security />
            </TabsContent>
            <TabsContent value={EProfileView.BILLING}>
              <BillingInformation />
            </TabsContent>
            <TabsContent value={EProfileView.NOTIFICATIONS}>
              <Notifications />
            </TabsContent>
            <TabsContent value={EProfileView.PREFERENCES}>
              <Preferences />
            </TabsContent>
          </div>
        </Tabs>
      </section>
    </div>
  );
}
