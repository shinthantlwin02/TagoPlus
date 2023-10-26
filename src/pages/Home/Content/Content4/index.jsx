import React from "react";
import { MainBusinesses } from "../../../../data";
import Card from "./Card";

const Index = () => {
  const row1 = MainBusinesses.slice(0, 2);
  const row2 = MainBusinesses.slice(2, 6);
 
  return (
    <div className=' px-[30px]  lg:px-[100px] '>
      <h1 className='text-[48px] 2xl:text-[64px] font-bold -tracking-[8px] pt-10 pb-4'>
        타고플러스의 주요 사업 및 보유 솔루션
      </h1>
      <h2 className='text-[24.06px] 2xl:text-[32px] -tracking-[4px] pb-14'>
        다양한 맞춤형 솔루션으로 제작기간, 제작단가가 절약되며 고객맞춤 커스터
        마이징도 가능합니다.{" "}
      </h2>

      {/* main businesses */}
      <div className='flex flex-col gap-3'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
          {row1?.map((data, index) => (
            <Card
              key={index}
              width='w-[100%] md:w-auto '
              height='h-fit md:h-[301px]'
              background={data?.background}
              title={data?.title}
              subTitle={data?.subTitle}
            />
          ))}
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
          {row2?.map((data) => (
            <Card
              width='w-[100%] md:w-auto '
              height='h-fit md:h-[301px]'
              background={data?.background}
              title={data?.title}
              subTitle={data?.subTitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
