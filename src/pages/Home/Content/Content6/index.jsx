import React from "react";
import { Button1 } from "../../../../utils/Button";
import Form from "../../../../assets/contactForm.png";
import background from "../../../../assets/backgrounds/contactBg.png";

const Index = () => {
  const bgImageStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
  return (
    <div
      style={bgImageStyle}
      id='contact'
      className='w-full h-[500px] lg:h-[1080px] text-white flex justify-between items-center px-[30px]  lg:px-[100px] '
    >
      <div className='flex flex-col items-center lg:items-start w-full'>
        <h1 className='text-[48px] 2xl:text-[64px] font-bold pb-2'>
          온라인 견적 및 아웃소싱 문의
        </h1>
        <h2 className='text-[24px] 2xl:text[32px] pb-5'>
          최대한빠른시간내친절하고상세하게상담해드리겠습니다.
        </h2>
        <Button1 label='VIEW MORE' />
      </div>

      <div className='hidden lg:inline'>
        <img src={Form} />
      </div>
    </div>
  );
};

export default Index;
