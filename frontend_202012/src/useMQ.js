import React from "react";
import { useMediaQuery } from "react-responsive";

// @charset "utf-8";

// /* All Device */
// 모든 해상도를 위한 공통 코드를 작성한다. 모든 해상도에서 이 코드가 실행됨.

// /* Mobile Device */
// 768px 미만 해상도의 모바일 기기를 위한 코드를 작성한다. 모든 해상도에서 이 코드가 실행됨. 미디어 쿼리를 지원하지 않는 모바일 기기를 위해 미디어 쿼리 구문을 사용하지 않는다.

// /* Tablet Device; Desktop Device */
// @media all and (min-width:768px) {
//     사용자 해상도가 768px 이상일 때 이 코드가 실행됨. 테블릿과 데스크톱의 공통 코드를 작성한다.
// }

// /* Tablet Device */
// @media all and (min-width:768px) and (max-width:1024px) {
//     사용자 해상도가 768px 이상이고 1024px 이하일 때 이 코드가 실행됨. 아이패드 또는 비교적 작은 해상도의 랩탑이나 데스크톱에 대응하는 코드를 작성한다.
// }

// /* Desktop Device */
// @media all and (min-width:1025px) {
//     사용자 해상도가 1025px 이상일 때 이 코드가 실행됨. 1025px 이상의 랩탑 또는 데스크톱에 대응하는 코드를 작성한다.
// }

//     <style>
// @media all and (min-width:320px) {
//     #wrap div{
//       width:100%;
//     }
//   }
//   @media all and (min-width:768px) {
//     #wrap div{
//       width:50%;
//     }
//     #wrap div:nth-child(5){width:100%;}
//   }
//   @media all and (min-width:1024px) {
//     #wrap div{
//       width:20%;
//     }
//     #wrap div:nth-child(5){width:20%;}
//   }
// </style>
const useMQ = () => {
  const isPC = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  return (
    <div>
      {isPC && <p>isPC</p>}
      {isTablet && <p>isTablet</p>}
      {isMobile && <p>isMobile</p>}
    </div>
  );
};
