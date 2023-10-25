import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/TagoPlus-logo.png";
import { NavLink,  useParams } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsChevronDown, BsFillMoonFill } from "react-icons/bs";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [accordian, setaccordian] = useState(false);
  const [offsetLeft, setOffsetLeft] = useState(0);




  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowNav(true);
      }
      window.scrollY < 300 && setShowNav(false);
      setMobileNav(false);
    });
  }, [scrollY]);
  return (
    <>
      
      <div
        className={`bg-white fixed top-0 left-0 transition-all duration-500 w-full text-[#fff] z-40 px-[30px] lg:px-[80px] ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className='flex justify-between items-center py-4 relative z-50'>
          <img src={logo} className='h-[37px]'></img>
          <div
            onMouseLeave={() => setOffsetLeft(active)}
            className=' relative hidden lg:flex items-center gap-10 text-white '
          >
            <div
              style={{ transform: `translateX(${offsetLeft}px)` }}
              className=' absolute transition duration-300  bg-white'
            ></div>
           <div className=' relative flex items-center gap-5 text-black text-sm 2xl:text-[26.92px] font-medium'>
              <NavLink to={"/"}>몽골 IT아웃소싱</NavLink>
              <div className=''>
                <NavLink to={`/`}>미얀마 퍼블리싱 아웃소싱</NavLink>
              </div>
              <NavLink to={"/"}>타고플러스 솔루션</NavLink>
              <NavLink to={"/"}>포트폴리오</NavLink>
              <NavLink to={"/"}>고객센터</NavLink>
              <NavLink to={"/"}>회사소개</NavLink>
              <div className='flex items-center gap-2 text-black border border-black rounded-full px-3 py-1'>
              <BsFillMoonFill />
              <span>Dark</span>
            </div>
            </div>
            
          </div>
          
          <div className='flex lg:hidden items-center gap-3'>
          <div className='flex items-center gap-2 text-black border border-black rounded-full px-3 py-1'>
              <BsFillMoonFill />
              <span>Dark</span>
            </div>
            <div
              className={`${mobileNav ? "mb-4" : "m-0"}`}
              onClick={() => setMobileNav(!mobileNav)}
            >
              <p
                className={`h-1 w-8 bg-black rounded-full transition-all duration-300 ${
                  mobileNav ? "rotate-45 translate-y-4" : "rotate-0"
                }`}
              ></p>
              <p
                className={`h-1 w-8 bg-black rounded-full transition-all duration-300 my-1 ${
                  mobileNav ? "opacity-0" : "opacity-100"
                }`}
              ></p>
              <p
                className={`h-1 w-8 bg-black rounded-full transition-all duration-300 ${
                  mobileNav ? "-rotate-45 origin-top" : "rotate-0"
                }}`}
              ></p>
            </div>
          </div>
        </div>
        {/* Slide Nav */}
        <div
          className={`min-h-screen bg-white w-full absolute py-8 px-5 left-0 transition-all duration-500 ${
            mobileNav ? "translate-y-0 top-[70px]" : "-translate-y-full top-0"
          } `}
        >
          <div className='h-screen flex flex-col justify-start items-start gap-5 text-black'>
          <div
            className={`w-full overflow-hidden transition-all duration-300 ${
              accordian ? "h-[500px]" : "h-[50px]"
            } `}
            onClick={() => setaccordian(!accordian)}
          >
            <h1 className='mb-5 flex gap-2 items-center font-bold text-[48px]'>
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
            <h1 className='mb-5 flex gap-2 items-center font-bold text-[48px]'>
              미얀마 퍼블리셔 아웃소싱
              <BsChevronDown className='text-2xl' />
            </h1>
          </div>
          <div className='w-full h-[50px]'>
            <h1 className='mb-5 flex gap-2 items-center font-bold text-[48px]'>
            <div className='w-full'>
            <h1 className='mb-5 flex gap-2 items-center font-bold text-[48px]'>
              미얀마 퍼블리셔 아웃소싱
              <BsChevronDown className='text-2xl' />
            </h1>
          </div>
              <BsChevronDown className='text-2xl' />
            </h1>
          </div>
          <div className='w-full h-[50px]'>
            <h1 className='mb-5 flex gap-2 items-center font-bold text-[48px]'>
            포트폴리오
              <BsChevronDown className='text-2xl' />
            </h1>
          </div>
          <div className='w-full h-[50px]'>
            <h1 className='mb-5 flex gap-2 items-center font-bold text-[48px]'>
            고객센터
              <BsChevronDown className='text-2xl' />
            </h1>
          </div>
          <div className='w-full h-[50px]'>
            <h1 className='mb-5 flex gap-2 items-center font-bold text-[48px]'>
            회사소개
              <BsChevronDown className='text-2xl' />
            </h1>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
