import { ArcElement, Chart, Legend, Tooltip } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const Result = (props) => {
    const { homeValue, loanAmount, loanTerm, interestRate} = props
  return <p>Result</p>;
};

export default Result;
