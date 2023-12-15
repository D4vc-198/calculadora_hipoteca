import { Stack, Typography } from "@mui/material"

const SliderComponent = (props) => {
    const {defaultValue, min, max, label, unit, onChange, amount, value, steps} = props

    return (
        <Stack gap={1}>
            <Typography variant="subtitle2">{label}</Typography>
            <Typography variant="h5">{unit} {amount}</Typography>
        </Stack>
    )
}

export default SliderComponent