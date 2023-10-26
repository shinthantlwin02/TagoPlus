import React from "react";
import { Languages } from "../../../../data";

const Index = () => {
  return (
    <div className='w-full px-[30px] lg:px-[100px] 2xl:px-[120px] py-20'>
      <h1 className='text-[48px] 2xl:text-[64px] font-bold pb-4'>
        주요보유기술
      </h1>
      <h2 className='text-[24px] 2xl:text-[32px] pb-14'>
        타고플러스의 개발자 및 퍼블리셔가 보유하고 있는 수준 높은 기술입니다.
      </h2>

      {/* Languages and frameworks used in the company */}
      <div className='grid grid-cols-5 gap-5'>
        {Languages.map((language) => (
          <div className='relative mx-auto group'>
            <img
              src={language?.img}
              className=' w-auto h-auto md:w-[150px] md:h-[150px]'
            />
            <div className='absolute top-0 hidden capitalize text-white text-center text-[28.6px] 2xl:text-[48px] w-auto h-auto md:w-[150px] md:h-[150px] group-hover:flex justify-center items-center group-hover:bg-black group-hover:opacity-70 '>
              {language.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
