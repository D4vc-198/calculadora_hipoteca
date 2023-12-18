import { FormControl, InputLabel, Select } from "@mui/material"

const TenureSelect = (props) => {
    const { data, setData } = props

    const handleChange = (event) => {
        setData({...data, loanTerm: event.target.value})
    }

    return (
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tenure</InputLabel>
        <Select />
        </FormControl>
    )
}

export default TenureSelect