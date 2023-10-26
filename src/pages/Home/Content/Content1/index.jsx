import React, { useState } from "react";
import { BannerContent } from "../../../../data";
import { BiChevronDown } from "react-icons/bi";
import { Button2 } from "./../../../../utils/Button/index";
import logo from "../../../../assets/TagoPlus-logo.png";
import { Link, NavLink } from "react-router-dom";
import { BsChevronDown, BsFillMoonFill } from "react-icons/bs";

const Index = () => {
  const banner1 = BannerContent?.find((data) => data.id === 1);
  const banner2 = BannerContent?.find((data) => data.id === 2);
  const banner3 = BannerContent?.find((data) => data.id === 3);
  const [bannerContent, setBannerContent] = useState(banner1);
  const subTitleParagraph = bannerContent?.subTitle.split("\n");

  const [mobileNav, setMobileNav] = useState(false);
  const [accordian, setaccordian] = useState(false);

  const bannerBgStyle = {
    backgroundImage: `url(${bannerContent.background})`,
    backgroundSize: 'cover',  // Optional: Adjust the background size
    backgroundPosition: 'center center',  // Optional: Adjust the background position
  };

  return (
    <>
      {/* Mobile Navbar */}
      <div className='lg:hidden flex min-w-full items-center justify-between py-5  text-white bg-transparent z-50 absolute top-0 left-0  px-[30px]'>
        <Link to='/'>
          <img src={logo} className='w-[147px] h-[37px]' />
        </Link>
        <div className='flex items-center gap-3'>
          <div className='flex items-center gap-2 text-white border border-white rounded-full px-3 py-1'>
            <BsFillMoonFill />
            <span>Dark</span>
          </div>

          <div
            className={`${mobileNav ? "mb-4" : "m-0"}`}
            onClick={() => setMobileNav(!mobileNav)}
          >
            <p
              className={`h-1 w-8 bg-white rounded-full transition-all duration-300 ${
                mobileNav ? "rotate-45 translate-y-4" : "rotate-0"
              }`}
            ></p>
            <p
              className={`h-1 w-8 bg-white rounded-full transition-all duration-300 my-1 ${
                mobileNav ? "opacity-0" : "opacity-100"
              }`}
            ></p>
            <p
              className={`h-1 w-8 bg-white rounded-full transition-all duration-300 ${
                mobileNav ? "-rotate-45 origin-top" : "rotate-0"
              }}`}
            ></p>
          </div>
        </div>
      </div>

      {/* Slide Nav */}
      <div
        className={`min-h-screen bg-[#1f1f1f] w-full absolute py-20  px-[30px] left-0 z-30 lg:top-0 transition-all duration-500 ${
          mobileNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className='h-screen flex flex-col justify-start items-start gap-5 text-white py-5'>
          <div
            className={`w-full overflow-hidden transition-all duration-300 ${
              accordian ? "h-[500px]" : "h-[50px]"
            } `}
            onClick={() => setaccordian(!accordian)}
          >
            <h1 className='mb-5 flex gap-2 items-center font-bold text-lg sm:text-[48px]'>
              몽골 IT 아웃소싱
              <BsChevronDown
                className={`transition-all duration-300 text-2xl ${
                  accordian ? "rotate-180" : "rotate-0"
                }`}
              />
            </h1>
            <div className='flex flex-col gap-5 px-3'>
              <NavLink to={"/"} className='font-light'>
                서비스소개
              </NavLink>
              <NavLink to={"/"} className='font-light'>
                직원소개
              </NavLink>
              <NavLink to={"/"} className='font-light'>
                주요보유기술
              </NavLink>
              <NavLink to={"/"} className='font-light'>
                인력아웃소싱체계
              </NavLink>
              <NavLink to={"/"} className='font-light'>
                인력구성및운용방안
              </NavLink>
              <NavLink to={"/"} className='font-light'>
                갤러리
              </NavLink>
            </div>
          </div>
          <div className='w-full h-[50px]'>
            <h1 className='mb-5 flex gap-2 items-center font-bold text-lg sm:text-[48px]'>
              미얀마 퍼블리셔 아웃소싱
              <BsChevronDown className='text-2xl' />
            </h1>
          </div>
          <div className='w-full h-[50px]'>
            <h1 className='mb-5 flex gap-2 items-center font-bold text-lg sm:text-[48px]'>
              <div className='w-full'>
                <h1 className='mb-5 flex gap-2 items-center font-bold text-lg sm:text-[48px]'>
                  미얀마 퍼블리셔 아웃소싱
                  <BsChevronDown className='text-2xl' />
                </h1>
              </div>
              <BsChevronDown className='text-2xl' />
            </h1>
          </div>
          <div className='w-full h-[50px]'>
            <h1 className='mb-5 flex gap-2 items-center font-bold text-lg sm:text-[48px]'>
              포트폴리오
              <BsChevronDown className='text-2xl' />
            </h1>
          </div>
          <div className='w-full h-[50px]'>
            <h1 className='mb-5 flex gap-2 items-center font-bold text-lg sm:text-[48px]'>
              고객센터
              <BsChevronDown className='text-2xl' />
            </h1>
          </div>
          <div className='w-full h-[50px]'>
            <h1 className='mb-5 flex gap-2 items-center font-bold text-lg sm:text-[48px]'>
              회사소개
              <BsChevronDown className='text-2xl' />
            </h1>
          </div>
        </div>
      </div>

      {/* banner */}
      <div
      style={bannerBgStyle}
        className={` w-full h-[1000px] 2xl:h-[1080px] py-10 flex flex-col justify-between text-white`}
      >
        {/* navbar */}
        <div className='hidden lg:block mx-[30px] lg:mx-[80px]'>
          <div className='flex items-center justify-between'>
            <Link to={`/`}>
              <img src={logo} />
            </Link>
            <div className=' relative flex items-center gap-5 text-white text-sm 2xl:text-[26.92px] font-medium'>
              <NavLink to={"/"}>몽골 IT아웃소싱</NavLink>
              <div className=''>
                <NavLink to={`/`}>미얀마 퍼블리싱 아웃소싱</NavLink>
              </div>
              <NavLink to={"/"}>타고플러스 솔루션</NavLink>
              <NavLink to={"/"}>포트폴리오</NavLink>
              <NavLink to={"/"}>고객센터</NavLink>
              <NavLink to={"/"}>회사소개</NavLink>
              <div className='flex items-center gap-2 text-white border border-white rounded-full px-3 py-1'>
                <BsFillMoonFill />
                <span>Dark</span>
              </div>
            </div>
          </div>
        </div>

        {/* banner */}
        <div className='h-full w-full flex justify-between items-center px-[30px] lg:px-[100px] 2xl:px-[120px]'>
          <div className='w-[60%] lg:w-full ps-0 lg:ps-5'>
            <h1 className='text-[64px] 2xl:text-[80px] -tracking-[4px] font-bold pb-2'>
              {bannerContent?.title}
            </h1>
            <h2 className='pb-4 text-[24px] -tracking-[2px] 2xl:text-[32px]'>
              {subTitleParagraph?.map((paragraph,index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </h2>
            <Button2 label='VIEW MORE' />
          </div>

          <div className='flex flex-col justify-center items-center gap-10'>
            <div
              className={` ${
                bannerContent.id == 1 ? "outline outline-1 outline-white" : ""
              } w-[25px] h-[25px] rounded-full flex justify-center items-center select-none`}
            >
              <button
                onClick={() => setBannerContent(banner1)}
                className='w-[15px] h-[15px]  rounded-full bg-white '
              ></button>
            </div>
            <div
              className={` ${
                bannerContent.id == 2 ? "outline outline-1 outline-white" : ""
              } w-[25px] h-[25px] rounded-full flex justify-center items-center select-none`}
            >
              <button
                onClick={() => setBannerContent(banner2)}
                className='w-[15px] h-[15px]  rounded-full bg-white '
              ></button>
            </div>
            <div
              className={` ${
                bannerContent.id == 3 ? "outline outline-1 outline-white" : ""
              } w-[25px] h-[25px] rounded-full flex justify-center items-center select-none`}
            >
              <button
                onClick={() => setBannerContent(banner3)}
                className='w-[15px] h-[15px]  rounded-full bg-white '
              ></button>
            </div>
            <div
              className={`w-[25px] h-[25px] rounded-full flex justify-center items-center select-none`}
            >
              <a
                href='#contact'
                className='w-[15px] h-[15px]  rounded-full bg-white'
              ></a>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center gap-1'>
          <div className='text-3xl border border-3 border-white w-[35px] h-[50px] rounded-2xl flex justify-center pt-3'>
            <div className='w-1 h-1 bg-white rounded-full'></div>
          </div>
          <p className=''>SCROLL DOWN</p>
          <span className='text-xl animate-bounce'>
            <BiChevronDown />
          </span>
        </div>
      </div>
    </>
  );
};

export default Index;
