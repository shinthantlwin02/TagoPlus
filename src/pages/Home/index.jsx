import React from "react";
import Content1 from "./Content/Content1";
import Content4 from "./Content/Content4";
import Content5 from "./Content/Content5";
import Content6 from "./Content/Content6";
import Content7 from "./Content/Content7";
import background from "../../assets/backgrounds/bodyBg.png";

const Index = () => {
  const bgImageStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
  return (
    <div style={bgImageStyle} className='font-noto-kr w-full overflow-hidden'>
      <Content1 />
      <Content4 />
      <Content5 />
      <Content6 />
      <Content7 />
    </div>
  );
};

export default Index;
