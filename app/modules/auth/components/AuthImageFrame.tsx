import Image from 'next/image';
import React from 'react';
import AuthImage from '@/app/assets/bitewise.png';

const AuthImageFrame = () => {
  return (
    <section className="hidden xl:block xl:max-w-[50%] xl:rounded-r-lg overflow-hidden">
      <Image src={AuthImage} alt="Meal image" />
    </section>
  );
};

export default AuthImageFrame;
