import React from 'react'

const InputNumber = ({value, onChange}) => {
    return (
        <input
            type="number"
            placeholder='Introduce tu numero del 1 al 100'
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default InputNumber