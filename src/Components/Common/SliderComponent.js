import { Slider, Stack, Typography } from "@mui/material";

const SliderComponent = (props) => {
  const {
    defaultValue,
    min,
    max,
    label,
    unit,
    onChange,
    amount,
    value,
    steps,
  } = props;

  return (
    <>
      <Stack gap={1}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h5">
          {unit} {amount}
        </Typography>
      </Stack>
      <Slider
        min={min}
        max={max}
        defaultValue={defaultValue}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={onChange}
        value={value}
        marks
        step={steps}
      />
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="caption" color="text.secondary">
          {unit} {min}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {unit} {max}
        </Typography>
      </Stack>
    </>
  );
};

export default SliderComponent;
