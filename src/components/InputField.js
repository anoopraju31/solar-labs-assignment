const InputField = ({selectOption, month, value, values, visiblity, changeValues, setHideInput, hideInput}) => {
    const handleChange = (e) => {
        changeValues(prev => {
            return {...prev, [value]: e.target.value}
        })

        const group = value >= 9? 2 : value >= 5? 1 : 0
        const idx = value - group * 4
        setHideInput(prev => {
            if (idx !== 0) prev[group * 4 + 0] = false
            if (idx !== 1) prev[group * 4 + 1] = false
            if (idx !== 2) prev[group * 4 + 2] = false
            if (idx !== 3) prev[group * 4 + 3] = false

            return prev
        })

    }
    return (
        <div className={`flex justify-between items-center ${selectOption !== '' && visiblity && hideInput? 'visible' : 'invisible'}`}>
            <label 
                className="w-16 inline-block text-gray-400 text-lg font-medium" 
                htmlFor={`=month-${month}`}
            >
                {selectOption !== ''? month : ''}
            </label>
            
            <input 
                type="text" 
                disabled={selectOption !== ''? false : true} 
                id={`month-${selectOption !== ''? month : ''}`} 
                className="bg-gray-300 border border-gray-400 text-gray-600 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                placeholder={selectOption !== ''? month : ''} 
                value={value !== ''? values[value]: ''}
                onChange={handleChange}
            />
        </div>
    )
}

export default InputField