import React from "react";
import { Button2 } from "../../../../utils/Button";

const Card = ({ width, height, title, subTitle, background }) => {
  const subTitleLineBreak = subTitle?.split(" ");
  return (
    <div
      className={`${background} ${width} ${height} flex md:flex-col justify-center items-center gap-4 py-5 px-5`}
    >
      <div className='flex flex-col items-start md:items-center gap-3 w-[80%] md:w-full'>
        <h1 className='text-[32px] 2xl:text-[40px] text-white font-bold'>
          {title}
        </h1>
        <div className='text-start md:text-center'>
          {subTitleLineBreak?.map((title, index) => (
            <h2
              key={index}
              className='text-[21.5px] 2xl:text-[24px] text-white font-medium'
            >
              {title}
            </h2>
          ))}
        </div>
      </div>

      <Button2 className='w-[20%] md:w-full' label='자세히 보기' />
    </div>
  );
};

export default Card;
