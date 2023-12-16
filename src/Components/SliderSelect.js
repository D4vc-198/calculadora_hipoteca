import { Slider } from "@mui/material";
import SliderComponent from "./Common/SliderComponent";

const SliderSelect = (props) => {
  const { data, setData } = props;
  const bank_limit = 10000;

  return (
    <>
      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            homeValue: value.toFixed(0),
            downPayment: (0.2 * value).toFixed(0),
            loanAmount: (0.8 * value).toFixed(0),
          });
        }}
        defaultValue={data.homeValue}
        min={1000}
        max={bank_limit}
        steps={100}
        unit="$"
        amount={data.homeValue}
        label="Home Value"
        value={data.homeValue}
      />
    </>
  );
};

export default SliderSelect;
