import React from "react";
import logo from "../assets/ITWizard-logo.png";
import talk from "../assets/icons/talk.png";
import youtube from "../assets/icons/youtube.png";

const Footer = () => {
  return (
    <div className='bg-dark flex justify-between items-center gap-20 py-16 text-white px-[30px] md:px-[80px] '>
      <div className='flex flex-col lg:flex-row justify-between w-full h-[270px] lg:h-auto'>
        <img src={logo} />

        {/* content1 */}
        <div className='ps-4'>
          <p>㈜타고플러스</p>
          <p>TEL : 1644-5805</p>
          <p>FAX:</p>
          <p>서울 금천구 가산디지털1로 5 대륭테크노타운20차 402호</p>
        </div>
      </div>

      <div className='flex flex-col-reverse lg:flex-row justify-between w-full h-[270px] lg:h-auto'>
        {/* content2 */}
        <div className='pe-4'>
          <p>대표 : 문양희</p>
          <p>개인정보관리책임자 : 조원호</p>
          <p>사업자등록번호 : 113-86-13483</p>
          <p>통신판매번호 : 구로 제 2</p>
        </div>

        {/* social */}
        <div className='flex justify-end items-center gap-4 '>
          <a href='#'>
            <img src={youtube} />
          </a>
          <a href='#'>
            <img src={talk} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
