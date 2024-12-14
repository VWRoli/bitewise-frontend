import BillingHistory from '@/app/(modules)/dashboard/(modules)/profile/components/PlansAndBilling/BillingHistory';
import BillingInformation from '@/app/(modules)/dashboard/(modules)/profile/components/PlansAndBilling/BillingInformation';
import CurrentPlan from '@/app/(modules)/dashboard/(modules)/profile/components/PlansAndBilling/CurrentPlan';
import PaymentMethod from '@/app/(modules)/dashboard/(modules)/profile/components/PlansAndBilling/PaymentMethod';

const PlansAndBilling = () => {
  return (
    <div className="space-y-8">
      <section className="flex flex-col gap-8 lg:flex-row">
        <CurrentPlan />
        <PaymentMethod />
      </section>
      <BillingInformation />
      <BillingHistory />
    </div>
  );
};

export default PlansAndBilling;
