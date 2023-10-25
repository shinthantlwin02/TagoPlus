import React from "react";
import { Button1 } from "../../../../utils/Button";
import Form from "../../../../assets/contactForm.png";

const Index = () => {
  return (
    <div
      id='contact'
      className='w-full h-[500px] lg:h-[1080px] bg-contactBg text-white flex justify-between items-center px-[30px] lg:px-[100px] 2xl:px-[120px]'
    >
      <div className='flex justify-between items-center w-full'>
        <div className='flex flex-col items-center lg:items-start w-full'>
          <h1 className='text-[48px] 2xl:text-[64px] font-bold pb-2'>
            온라인 견적 및 아웃소싱 문의
          </h1>
          <h2 className='text-[24px] 2xl:text[32px] pb-5'>
            최대한빠른시간내친절하고상세하게상담해드리겠습니다.
          </h2>
          <Button1 label='VIEW MORE' />
        </div>
        <img src={Form} className='hidden lg:inline pe-10' />
      </div>

      <div className='flex flex-col justify-center items-center gap-10'>
        <div
          className={`w-[25px] h-[25px] rounded-full flex justify-center items-center select-none`}
        >
          <a href='#' className='w-[15px] h-[15px]  rounded-full bg-white '></a>
        </div>
        <div className='w-[25px] h-[25px] rounded-full flex justify-center items-center select-none'>
          <a href='#' className='w-[15px] h-[15px]  rounded-full bg-white '></a>
        </div>
        <div
          className={`w-[25px] h-[25px] rounded-full flex justify-center items-center select-none`}
        >
          <a href='#' className='w-[15px] h-[15px] rounded-full bg-white '></a>
        </div>
        <div
          className={`w-[25px] h-[25px] outline outline-1 outline-white rounded-full flex justify-center items-center select-none`}
        >
          <a
            href='#contact'
            className='w-[15px] h-[15px]  rounded-full bg-white'
          ></a>
        </div>
      </div>
    </div>
  );
};

export default Index;
