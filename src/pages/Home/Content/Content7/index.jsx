import React, { useState } from "react";
import { Content6 } from "../../../../data";
import { BiPlus, BiMinus } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";

const Index = () => {
  const [showMoreToggle, setShowMoreToggle] = useState(false);
  return (
    <div className='flex flex-col-reverse lg:flex-row lg:justify-between gap-3 py-10 w-full px-[30px]  lg:px-[100px] 2xl:px-[120px]'>
      {/* box 1 */}
      <div className='border border-neutral-300 px-4 py-10 w-full lg:w-1/2 h-auto  md:h-[700px]'>
        <div className='flex justify-between items-center'>
          <h1 className='text-[48px] font-bold'>공지사항</h1>
          <span
            className='text-3xl font-bold'
            onClick={() => setShowMoreToggle(!showMoreToggle)}
          >
            {showMoreToggle ? <BiMinus /> : <BiPlus />}
          </span>
        </div>
        <hr className='border-2 border-neutral-300' />
        <ul>
          {showMoreToggle
            ? Content6?.slice(0, 3).map((data) => (
                <li className='flex items-center py-2 gap-3'>
                  <div className=''>
                    <span className='bg-neutral-500 px-2 py-1 rounded-sm text-white text-[21px] min-w-[200px]'>
                      {data?.badge}
                    </span>
                  </div>
                  <div className='max-w-[500px]'>
                    <p className='text-[32px] font-medium'>{data?.title}</p>
                    <p className='text-[24px] opacity-80'>{data?.date}</p>
                  </div>
                </li>
              ))
            : Content6?.map((data) => (
                <li className='flex items-center py-2 gap-3'>
                  <div>
                    <span className='bg-neutral-500 p-1 rounded-sm text-white text-[21px]  min-w-[200px]'>
                      {data?.badge}
                    </span>
                  </div>
                  <div className='max-w-[500px]'>
                    <p className='text-[32px] font-medium'>{data?.title}</p>
                    <p className='text-[24px] opacity-80'>{data?.date}</p>
                  </div>
                </li>
              ))}
        </ul>
      </div>

      {/* box 2 */}
      <div className='flex flex-col justify-between w-full lg:w-1/2 gap-3 h-fit lg:h-[700px]'>
        <div className='border border-neutral-300 px-4 lg:h-1/2 py-10'>
          <h1 className='text-[48px] font-bold'>입금 정보</h1>
          <hr className='border-2 border-neutral-300' />
          <div className='flex justify-center lg:justify-between gap-5 py-10 lg:py-16'>
            <div>
              <h2 className='text-[40px]'>국민은행</h2>
              <p className='text-[24px] 2xl:text-[40px] opacity-80'>
                123 - 456789 - 1234
              </p>
              <p className='text-[24px] 2xl:text-[32px] opacity-80'>
                예금주 : 타고플러스
              </p>
            </div>
            <div>
              <h2 className='text-[40px]'>국민은행</h2>
              <p className='text-[24px] 2xl:text-[40px] opacity-80'>
                123 - 456789 - 1234
              </p>
              <p className='text-[24px] 2xl:text-[32px] opacity-80'>
                예금주 : 타고플러스
              </p>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-3 lg:grid-cols-1 gap-2 h-fit lg:h-1/2'>
          <div className='flex justify-between items-center border border-neutral-300 px-4 hover:bg-neutral-400 hover:bg-opacity-80 hover:text-white'>
            <span className='text-[24px] 2xl:text-[32px]'>묻고 답하기</span>
            <FaArrowRight />
          </div>
          <div className='flex justify-between items-center border border-neutral-300 px-4 hover:bg-neutral-400 hover:bg-opacity-80 hover:text-white'>
            <span className='text-[24px] 2xl:text-[32px]'>묻고 답하기</span>
            <FaArrowRight />
          </div>
          <div className='flex justify-between items-center border border-neutral-300 px-4 hover:bg-neutral-400 hover:bg-opacity-80 hover:text-white'>
            <span className='text-[24px] 2xl:text-[32px]'>묻고 답하기</span>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
