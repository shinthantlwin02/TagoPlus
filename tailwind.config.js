/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark:"#373737",
      },
      backgroundImage:{
        bodyBg:"url(./src/assets/backgrounds/bodyBg.png)",
        contactBg: "url(./src/assets/backgrounds/contactBg.png)",
        banner1:"url(./src/assets/backgrounds/bannerBg1.png)",
        banner2:"url(./src/assets/backgrounds/bannerBg2.png)",
        banner3:"url(./src/assets/backgrounds/bannerBg3.png)",
        business1:"url(./src/assets/backgrounds/businessBg1.png)",
        business2:"url(./src/assets/backgrounds/businessBg2.png)",
        business3:"url(./src/assets/backgrounds/businessBg3.png)",
        business4:"url(./src/assets/backgrounds/businessBg4.png)",
        business5:"url(./src/assets/backgrounds/businessBg5.png)",
      }
    },
    fontFamily:{
      'noto-kr': ['Noto Sans KR'],
    }
  },
  plugins: [],
}
