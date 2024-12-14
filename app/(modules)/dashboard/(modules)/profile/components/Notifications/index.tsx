import DefaultEmail from '@/app/(modules)/dashboard/(modules)/profile/components/Notifications/DefaultEmail';
import EmailNotifications from '@/app/(modules)/dashboard/(modules)/profile/components/Notifications/EmailNotifications';

const Notifications = () => {
  return (
    <div className="space-y-8">
      <DefaultEmail />
      <EmailNotifications />
    </div>
  );
};

export default Notifications;
