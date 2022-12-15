import { useEffect, useState } from 'react'
import { FiRefreshCcw } from 'react-icons/fi'
import InputField from './InputField'

const YearCard = ({visiblity, value}) => {
    const [selectOption, setSelectOption] = useState('')
    const [hideInput, setHideInput] = useState([])
    const [inputValues, setInputValues] = useState({
        0:0,
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0,
        7:0,
        8:0,
        9:0,
        10:0,
        11:0
    })

    useEffect(() => {
        const getInitialData = () =>{
            const inputs = []

            for (let i = 0; i < 12; i++)
                inputs.push(true)

            setHideInput(inputs)
        }

        getInitialData()
    }, [])

    const randomValues = (min, max) => { return Math.floor(Math.random() * (max - min)) + min }
    const calculate = () => {
        const group = selectOption * 4
        var idx
        if (hideInput[group] === true && hideInput[group + 1] === true && hideInput[group + 2] === true && hideInput[group + 3] === true ) return
        else if (hideInput[group] === true && hideInput[group + 1] === false && hideInput[group + 2] === false && hideInput[group + 3] === false ) idx = group
        else if (hideInput[group] === false && hideInput[group + 1] === true && hideInput[group + 2] === false && hideInput[group + 3] === false ) idx = group + 1
        else if (hideInput[group] === false && hideInput[group + 1] === false && hideInput[group + 2] === true && hideInput[group + 3] === false ) idx = group + 2
        else idx = group + 3


        const d = idx - group

        const value = parseInt(inputValues[idx])
        const minValue = value - 100
        
        setInputValues(prev => {
            return {
                ...prev, 
                [group + 0]: (d !== 0? randomValues(minValue, value) : prev[group + 0]), 
                [group + 1]: (d !== 1? randomValues(minValue, value) : prev[group + 1]), 
                [group + 2]: (d !== 2? randomValues(minValue, value) : prev[group + 2]), 
                [group + 3]: (d !== 3? randomValues(minValue, value) : prev[group + 3])
            }
        })
        
        setHideInput(prev => {
            prev[group + 0] = true
            prev[group + 1] = true
            prev[group + 2] = true
            prev[group + 3] = true

            return prev
        })
    }
    
    const months = {
        0: ['Jan', 'Feb', 'Mar', 'Apr'],
        1: ['May', 'Jun', 'Jul', 'Aug'],
        2: ['Sept', 'Oct', 'Nov', 'Dec']
    }

    const clearValues = () => {
        const baseIndex = parseInt(selectOption) * 4 
        setInputValues(prev => {
            return {...prev, [baseIndex]: 0, [baseIndex + 1]: 0, [baseIndex + 2]: 0, [baseIndex + 3]: 0}
        })

        setHideInput(prev => {
            prev[selectOption * 4 + 0] = true
            prev[selectOption * 4 + 1] = true
            prev[selectOption * 4 + 2] = true
            prev[selectOption * 4 + 3] = true

            return prev
        })
    }

    return (
        <div className={`${visiblity? 'visible' : 'invisible'} p-6 mb-6 flex flex-col gap-6 bg-gray-100 border-1 border-white rounded-lg shadow-md`}>
            <div className='flex justify-between items-center'>
                <h2 className="font-semibold text-4xl text-gray-300"> {value} </h2>
                
                <div 
                    className='p-2 rounded-full text-xl text-white bg-gray-300 hover:bg-gray-400 shadow-lg shadow-gray-400 hover:shadow-gray-500'
                    onClick={clearValues}    
                >
                    <FiRefreshCcw />
                </div>
            </div>

            <div className='relative w-full'>
                <select
                    value={selectOption}
                    onChange={(e) => setSelectOption(e.target.value)}
                    className='w-full p-2.5 text-gray-600 bg-gray-300 border border-gray-400 rounded-md shadow-sm outline-none appearance-none focus:border-gray-500 focus:bg-gray-300 selection:bg-black'
                >
                    <option value=''> Select month range </option>
                    <option value='0'> Jan - Apr </option>
                    <option value='1'> May - Aug </option>
                    <option value='2'> Sept - Dec </option>
                </select>
            </div>

            <InputField 
                selectOption={selectOption} 
                month={selectOption !== ''? months[selectOption][0] : ''} 
                visiblity={visiblity}
                value={selectOption !== ''? parseInt(selectOption) * 4 + 0 : ''} 
                values={inputValues} 
                changeValues={setInputValues} 
                setHideInput={setHideInput}
                hideInput={hideInput[parseInt(selectOption) * 4 + 0]}
            />

            <InputField 
                selectOption={selectOption} 
                month={selectOption !== ''? months[selectOption][1] : ''} 
                visiblity={visiblity} 
                value={selectOption !== ''? parseInt(selectOption) * 4 + 1 : ''} 
                values={inputValues} 
                changeValues={setInputValues} 
                setHideInput={setHideInput}
                hideInput={hideInput[parseInt(selectOption) * 4 + 1]}
            />

            <InputField 
                selectOption={selectOption} 
                month={selectOption !== ''? months[selectOption][2] : ''}  
                visiblity={visiblity}
                value={selectOption !== ''? parseInt(selectOption) * 4 + 2 : ''} 
                values={inputValues} 
                changeValues={setInputValues} 
                setHideInput={setHideInput}
                hideInput={hideInput[parseInt(selectOption) * 4 + 2]}
            />

            <InputField 
                selectOption={selectOption} 
                month={selectOption !== ''? months[selectOption][3] : ''} 
                visiblity={visiblity} 
                value={selectOption !== ''? parseInt(selectOption) * 4 + 3 : ''} 
                values={inputValues} 
                changeValues={setInputValues} 
                setHideInput={setHideInput}
                hideInput={hideInput[parseInt(selectOption) * 4 + 3]}
            />

            <button 
                className={`${selectOption !== '' && visiblity? 'visible' : 'invisible'} bg-gray-400 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded-lg`}
                onClick={calculate}    
            > Calculate </button>
        </div>
    )
}

export default YearCard