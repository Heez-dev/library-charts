import React from "react";
import { Link, useLocation } from "react-router-dom";

/** <nav/>
 * GNB 등 내비게이션 메뉴를 묶는 데 사용되며, 보통 <ul/>과 함께 사용
 * 대체로 헤더 안에 있는 형태로 사용하는데 다른 곳에 위치해도 됨
 */

/** aria-label
 * 1. 요소 자체의 대체 텍스트 제공하여 시각장애인이 화면을 읽을 때, 요소의 의미를 정확하게 전달할 수 있도록 도움
 * ex: <Link to="/about">About</Link> 만 있으면 스크린 리더가 "About"이라 읽지만,
 *      aria-label="Learn more About us"을 추가하면 "Learn more About us"라고 안내함
 *
 * 2. 아이콘 버튼이나 링크처럼 의미가 부족한 요소에 추가 정보를 제공하여 의미를 명확하게 할 수 있음
 * ex: <button aria-label="Open navigation menu"><i className="menu-icon"></i></button>
 *
 * 3. SEO 순위에 직접적인 영향을 주지는 않지만 웹 접근성을 향상시켜 검색 엔진 평가에 긍정적인 영향을 줄 수 있음
 */

/** <Link/>
 * 사용자가 클릭해서 페이지를 이동하도록 할 때 사용
 * 하이퍼링크 텍스트나 페이지를 이동하는 버튼, 이미지 등에 사용
 * ex: 내비게이션 바, 사이드 메뉴 등
 */

/** <Navigate/>
 * 특정 경로에서 렌더링 시점에 다른 페이지로 이동이 필요할 때 사용 (리다이렉트)
 * ex: 회원 전용 페이지 진입 시 로그인 하지 않은 상태라 로그인 페이지로 리다이렉트 하는 경우
 * ex: 상품 상세 페이지 진입 시 제품이 품절 또는 삭제되어서 다른 페이지로 리다이렉트 하는 경우
 */

/** useNavigate 훅
 * 웹 페이지 이동 시 추가적인 로직이 필요한 경우에 사용
 * 즉, 함수 내에서 다른 코드의 실행이 끝나고 나서 페이지를 이동시키고 싶을 때 사용
 * ex: 결제하기 버튼을 누르고 나서 모든 결제가 완료된 후에 페이지를 이동시키는 경우
 */

const PATH = {
  HOME: "/",
  reCharts: "/recharts",
  reactChartJs2: "/react-chartjs-2",
  reactApexCharts: "/react-apexcharts",
  echartsForReact: "/echarts-for-react",
};

const Navbar = () => {
  const location = useLocation();
  console.log(location);

  const StyledLink = ({ children, to, ariaLabel }) => (
    <Link
      to={to}
      aria-label={ariaLabel}
      className={`whitespace-nowrap p-2 ${
        location.pathname === to ? "bg-neutral-100" : ""
      }`}
    >
      {children}
    </Link>
  );

  return (
    <nav role="navigation" aria-label="Main Navigation">
      <ul className="flex gap-10 items-end">
        <li>
          <StyledLink to={PATH.HOME} aria-label="Go to Homepage">
            HOME
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to={PATH.reCharts}
            aria-label="View chart examples using Recharts"
          >
            recharts
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to={PATH.reactChartJs2}
            aria-label="View chart examples using react-chartjs-2"
          >
            react-chartjs-2
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to={PATH.reactApexCharts}
            aria-label="View chart examples using react-apexcharts"
          >
            react-apexcharts
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to={PATH.echartsForReact}
            aria-label="View chart examples using echarts-for-react"
          >
            echarts-for-react
          </StyledLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
