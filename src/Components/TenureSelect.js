import { FormControl, InputLabel, Select } from "@mui/material"

const TenureSelect = (props) => {
    const { data, setData } = props

    const handleChange = (event) => {
        setData({...data, loanTerm: event.target.value})
    }

    return (
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tenure</InputLabel>
        <Select 
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={data.loanTerm}
            label="Tenure"
            defaultValue={5}
            onChange={handleChange}
        />
        </FormControl>
    )
}

export default TenureSelect