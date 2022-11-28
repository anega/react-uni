export const commonSelectStyles = {
    container: (provided, state) => ({
        ...provided,
        outline: 'none',
    }),
    control: (provided, state) => ({
        ...provided,
        border: 'none',
        borderBottom: '1px solid #E2E4E5',
        borderRadius: 0,
        boxShadow: 'none',
        padding: '8px 7px 8px 16px',
        outline: 'none',
        '&:hover': {
            border: 'none',
            borderBottom: '1px solid #007AFF',
        }
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        padding: 0,
    }),
    indicatorSeparator: () => null,
    dropdownIndicator: (provided, state) => ({
        ...provided,
        color: '#242426',
        margin: 0,
        padding: 0,
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: '#101828',
        margin: 0,
    }),
};