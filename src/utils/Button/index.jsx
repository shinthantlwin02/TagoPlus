import React from "react";

export const Button1 = ({ label, action }) => {
  return (
    <div>
      <button
        onClick={action}
        className='group w-[202px] h-[52px] border border-white rounded-full text-white hover:bg-white font-medium'
      >
        <span className='text-[24px] group-hover:text-black select-none'>
          {label}
        </span>
      </button>
    </div>
  );
};

export const Button2 = ({ label, action }) => {
  return (
    <div>
      <button
        onClick={action}
        className='group w-[202px] h-[52px] border border-white rounded-full hover:bg-white text-white  font-medium font-noto-kr'
      >
        <span className='text-[21.3px] group-hover:text-black select-none'>
          {label}
        </span>
      </button>
    </div>
  );
};
