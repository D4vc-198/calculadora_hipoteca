const TenureSelect = (props) => {
    const { data, setData } = props

    const handleChange = (event) => {
        setData({...data, loanTerm: event.target.value})
    }

    return (
        <p>TenureSelect</p>
    )
}

export default TenureSelect