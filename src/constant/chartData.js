export const chartData = {
  dashboardChartUid: 1,
  dashboardUid: 1,
  dashboardId: null,
  dashboardTitle: null,
  dashboardChartId: "CHART-A0001",
  chartType: "BAR_COL",
  chartOptions: {
    fixedOptionMap: {},
    subOptionMap: {},
  },
  title: "차트 제목",
  description: "차트 라이브러리 테스트를 위한 설명입니다.",
  anchorInfo: {
    x: 1,
    y: 1,
    width: 47,
    height: 15,
  },
  chartDataInfo: {
    dataRowCount: 3,
    isStatistics: true,
    // isStatistics이 true이면 통계 데이터 => statisticsValueNestedList 사용
    statisticsValueNestedList: [[108, 39, 28]],
    // isStatistics이 false이면 전체 데이터 => wholeValueNestedList 사용
    wholeValueNestedList: null,
    seriesList: ["시리즈"],
    categoryList: ["카테고리1", "카테고리2", "카테고리3"],
    subCategoryList: [],
  },
  chartQueryInfo: {
    queryTemplateUid: 54,
    maxResultCount: 10,
    isStatisticQuery: true,
    selectedCategoryList: [
      {
        column: "group1",
        name: "그룹1",
        type: "STRING",
      },
    ],
    selectedOrderByList: [],
    selectedConditionList: [],
    calendarCategoryValue: null,
    fromDate: "2024-03-10T15:05:16.777",
    toDate: "2025-03-10T15:05:16.777",
  },
  isUseLabel: "Y",
  labelLocation: "BOTTOM",
  maxResultCount: 10,
  chartTerm: 365,
  realtimeInterval: 30,
  url: null,
  creatorUid: 1,
  modifierUid: 1,
  isDeleted: "N",
  createdDt: "2025-02-20T15:07:24.000",
  modifiedDt: "2025-03-09T08:12:29.000",
};
