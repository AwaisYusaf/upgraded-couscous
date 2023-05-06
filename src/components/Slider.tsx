// "use client";

// import { useEffect, useRef } from "react";
// import { register } from "swiper/element/bundle";
// import Image from "next/image";
// register();

// const MySwiper = () => {
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     const swiperContainer = swiperRef.current;
//     const params = {
//       navigation: true,
//       pagination: true,
//       //add this
//       injectStyles: [
//         `.swiper-slide{
//             width:100%;
//         }
//           .swiper-button-next,
//           .swiper-button-prev {
//             background-color: white;
//             background-position: center;
//             background-color:transparent;
//             background-size:15px;
//             background-repeat: no-repeat;
//             padding:0;
//             border-radius: 100%;
//             color: red;
//           }

//           .swiper-button-prev {
//             background-image: url("/assets/slider-arrow.png");
//             transform:rotate(90deg);
//           }

//           .swiper-button-next {
//             background-image: url("/assets/slider-arrow.png");
//           transform:rotate(270deg);
//           }

//           .swiper-button-next::after,
//           .swiper-button-prev::after {
//             content: "";
//           }

//           .swiper-pagination-bullet{
//             width: 10px;
//             height: 10px;
//             background-color: red;
//           }
//       `,
//       ],
//     };

//     Object.assign(swiperContainer, params);
//     swiperContainer.initialize();
//   }, []);

//   return (
//     <swiper-container ref={swiperRef} init="false" class="swiper">
//       <swiper-slide class="swiper-slide">
//         <Image
//           src="/assets/sample.jpg"
//           className="w-full"
//           alt=""
//           width={1200}
//           height={800}
//         />
//       </swiper-slide>
//       <swiper-slide class="swiper-slide">
//         <Image src="/assets/sample.jpg" alt="" width={1200} height={800} />
//       </swiper-slide>
//       <swiper-slide class="swiper-slide">
//         <Image src="/assets/sample.jpg" alt="" width={1200} height={800} />
//       </swiper-slide>
//     </swiper-container>
//   );
// };

// export default MySwiper;
import React from "react";

type Props = {};

function Slider({}: Props) {
  return <div>Slider</div>;
}

export default Slider;
