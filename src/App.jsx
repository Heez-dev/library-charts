import { Route, Routes } from "react-router-dom";
import "./reset.css";
import Layout from "./layout/Layout";
import Recharts from "./pages/Recharts";
import ReactChartJs2 from "./pages/ReactChartJs2";
import ReactApexCharts from "./pages/ReactApexCharts";
import EchartsForReact from "./pages/EchartsForReact";
import Main from "./pages/Main";

function App() {
  return (
    <div className="p-10">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/recharts" element={<Recharts />} />
          <Route path="/react-chartjs-2" element={<ReactChartJs2 />} />
          <Route path="/react-apexcharts" element={<ReactApexCharts />} />
          <Route path="/echarts-for-react" element={<EchartsForReact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
