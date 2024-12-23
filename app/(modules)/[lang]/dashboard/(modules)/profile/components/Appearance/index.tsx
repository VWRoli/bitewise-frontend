import Currency from '@/app/(modules)/[lang]/dashboard/(modules)/profile/components/Appearance/Currency';
import Language from '@/app/(modules)/[lang]/dashboard/(modules)/profile/components/Appearance/Language';
import Theme from '@/app/(modules)/[lang]/dashboard/(modules)/profile/components/Appearance/Theme';

const Appearance = () => {
  return (
    <div className="space-y-8">
      <Language />
      <Theme />
      <Currency />
    </div>
  );
};

export default Appearance;
