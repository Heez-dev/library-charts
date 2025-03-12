import React, { useCallback, useMemo } from "react";
import ChartContainer from "../components/ChartContainer";
import Chart from "react-apexcharts";
import { chartData } from "../constant/chartData";

const ReactApexCharts = () => {
  const chartType = useMemo(() => ["bar", "line", "donut"], []);

  const chartDataInfo = useMemo(() => {
    return chartData.chartDataInfo || null;
  }, [chartData]);

  const getOptions = useCallback(
    (type) => {
      if (!chartDataInfo || !type) return null;

      if (type === "donut") {
        return {
          chart: {
            id: type,
          },
          plotOptions: {
            pie: {
              donut: {
                size: "50%",
                labels: {
                  show: true,
                  name: {
                    show: true,
                  },
                  value: {
                    show: true,
                  },
                  total: {
                    show: true,
                    label: "Total",
                    formatter: function (w) {
                      return w.globals.seriesTotals.reduce((a, b) => a + b);
                    },
                  },
                },
              },
            },
          },
          labels: chartDataInfo.categoryList,
          tooltip: {
            enabled: false,
          },
        };
      }

      return {
        chart: {
          id: type,
        },
        xaxis: {
          categories: chartDataInfo.categoryList,
        },
      };
    },
    [chartDataInfo]
  );

  const getSeries = useCallback(
    (type) => {
      if (!chartDataInfo.seriesList) return null;

      if (type === "donut") {
        return chartDataInfo.isStatistics
          ? chartDataInfo.statisticsValueNestedList[0]
          : chartDataInfo.wholeValueNestedList[0];
      }

      return chartDataInfo.seriesList.map((series, index) => ({
        name: series,
        data: chartDataInfo.isStatistics
          ? chartDataInfo.statisticsValueNestedList[index]
          : chartDataInfo.wholeValueNestedList[index],
      }));
    },
    [chartDataInfo]
  );

  console.log(getOptions("donut"));

  return (
    <main className="flex flex-col gap-7">
      {chartType.map((type) => (
        <section key={type}>
          <h3 className="font-semibold text-lg">{type.toUpperCase()}</h3>
          <ChartContainer>
            <Chart
              type={type}
              width="100%"
              height="100%"
              options={getOptions(type)}
              series={getSeries(type)}
            />
          </ChartContainer>
        </section>
      ))}
    </main>
  );
};

export default ReactApexCharts;
