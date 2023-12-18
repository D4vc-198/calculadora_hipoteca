import { ArcElement, Chart, Legend, Tooltip } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const Result = () => {
  return <p>Result</p>;
};

export default Result;
