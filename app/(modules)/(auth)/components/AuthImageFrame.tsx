import AuthImage from '@/app/assets/bitewise.webp';
import Image from 'next/image';

const AuthImageFrame = () => {
  return (
    <section className="hidden overflow-hidden xl:block xl:max-w-[50%] xl:rounded-r-lg">
      <Image src={AuthImage} alt="Meal image" />
    </section>
  );
};

export default AuthImageFrame;
