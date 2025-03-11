import { Table } from "@chakra-ui/react";
import React from "react";

const tableHeader = [
  "라이브러리",
  "렌더링 방식",
  "반응형 차트 지원",
  "라벨 길이에 따라 사선 출력",
  "레전드 스크롤",
  "차트와 레전드 사이 여백",
  "라이선스",
];

const tableBody = {
  recharts: [
    "Recharts",
    "SVG",
    "ResponsiveContainer 컴포넌트의 width, height props 로 크기 조정",
    "XAxis, YAxis 컴포넌트의 angle props 로 회전 각도 조절, textAnchor props로 텍스트 정렬 설정 가능",
    "Legend 컴포넌트의 layout, align, verticalAlign, wrapperStyle로 커스텀 설정",
    "다양한 종류의 차트 컴포넌트의 margin, padding props 로 스타일 조정해야 함",
    "MIT",
  ],
  reactChartJS2: [
    "React-ChartJS-2",
    "Canvas",
    "다양한 종류의 차트 컴포넌트의 option props 에 responsive를 true 로 설정 시 부모 컨테이너 크기에 맞게 자동으로 조정됨",
    "다양한 종류의 차트 컴포넌트의 option props 에서 scales 설정에 ticks의 maxRotation과 minRotation 속성을 사용하여 라벨 회전 각도 조절 가능",
    "다양한 종류의 차트 컴포넌트의 option props 에서 plugins 설정에 legend 옵션을 커스터마이즈하고 CSS 를 사용해 부모 요소에 스크롤 추가하는 방식",
    "다양한 종류의 차트 컴포넌트의 option props 에서 layout 설정의 padding 옵션으로 차트와 레전드 사이의 여백 설정 가능",
    "MIT",
  ],
  reactApexCharts: [
    "React-ApexCharts",
    "SVG + Canvas",
    "Chart 컴포넌트 option props 의 chart 설정에서 responsive 옵션으로 설정 가능하고, breakpoint를 지정할 수 있기 때문에 화면 크기 별 x축 y축에 대한 옵션 설정 또한 가능",
    "Chart 컴포넌트 option props 의 xaxis, yaxis 설정에서 label 옵션의 rotate 속성으로 라벨 회전 각도 조절 가능",
    "스크롤 기능 지원, Chart 컴포넌트 option props 의 legend 설정의 overflow 옵션을 true로 설정하면 됨",
    "Chart 컴포넌트 option props 의 chart 설정에서 margin 옵션으로 차트와 주변 요소들 간의 여백 조정 가능",
    "MIT",
  ],
  echartsForReact: [
    "ECharts-for-React",
    "Canvas",
    "resize 이벤트를 자동으로 처리하므로, 차트 크기를 설정하고 수동 처리가 필요할 때 echartsInstance.resize() 호출 가능",
    "ReactECharts 컴포넌트 option props 의 xAxis, yAxis 설정의 axisLabel 옵션에서 rotate 속성으로 라벨 회전 각도 조절 가능",
    "ReactECharts 컴포넌트 option props 의 legend 설정의 type 옵션을 ‘scroll’로 설정하면 됨",
    "ReactECharts 컴포넌트 option props 의 grid 설정으로 조정가능",
    "Apache-2.0",
  ],
};

const Main = () => {
  return (
    <article className="flex flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-semibold text-lg">라이브러리 비교 분석</h3>
        <Table.ScrollArea borderWidth="1px">
          <Table.Root size="md" variant="outline">
            <Table.Header>
              <Table.Row>
                {tableHeader.map((header, index) => (
                  <Table.ColumnHeader key={`header-${index}`}>
                    {header}
                  </Table.ColumnHeader>
                ))}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {Object.values(tableBody).map((body, index) => (
                <Table.Row key={`body-${index}`}>
                  {body.map((cell, index) => (
                    <Table.Cell key={`cell-${index}`}>{cell}</Table.Cell>
                  ))}
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Table.ScrollArea>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-semibold text-lg">
          차트의 렌더링 방식 별 특징 (SVG vs Canvas)
        </h3>
        <ul className="pl-5 text-sm">
          <li className="list-disc leading-7">
            리액트와 호환성이 높은 건 Recharts, React-ApexCharts (JSX 스타일
            사용)
          </li>
          <li className="list-disc leading-7">
            SVG 기반 차트는 CSS 및 React의 style 을 활용하여 스타일을 쉽게
            변경할 수 있음
          </li>
          <li className="list-disc leading-7">
            Canvas 기반 차트는 스타일 변경이 까다로움
          </li>
          <li className="list-disc leading-7">
            애니메이션이 중요할 경우 SVG 기반 차트가 부드러운 애니메이션을
            제공함
          </li>
          <li className="list-disc leading-7">
            그러나 차트에서 1000개 이상의 데이터를 다룰 시 SVG 방식은 성능 저하
            이슈 있음
          </li>
          <li className="list-disc leading-7">
            그리고 초당 수십~수백 번 데이터가 변경될 가능성이 있다면 Canvas 기반
            차트의 업데이트가 더욱 원활함
          </li>
          <li className="list-disc leading-7">
            데이터가 1000개를 넘기지 않는다면 SVG 방식이 코드가 훨씬 직관적
          </li>
          <li className="list-disc leading-7">
            데이터가 1000개를 넘기거나 실시간 데이터를 다뤄야 한다면 Canvas
            차트를 사용하는 게 좋음
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Main;
