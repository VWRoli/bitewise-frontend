import Image from 'next/image';
import AuthImage from '@/app/assets/bitewise.webp';

const AuthImageFrame = () => {
  return (
    <section className="hidden xl:block xl:max-w-[50%] xl:rounded-r-lg overflow-hidden">
      <Image src={AuthImage} alt="Meal image" />
    </section>
  );
};

export default AuthImageFrame;
