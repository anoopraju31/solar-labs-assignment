const CheckBox = ({value, idx, changeCheckYear}) => {
  const handleClick = (e) => {
    changeCheckYear(prev => {
      return prev.map((value, i) => {
        return (i === idx? !value: value)
      })
    })
  }

  return (
    <div className="h-5 md:h-8 flex">
        <input 
            className="appearance-none h-4 w-4 border-2 border-gray-400 rounded-sm bg-white checked:bg-gray-600 checked:border-gray-600 focus:outline-none transition duration-200 mt-1.5 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
            type="checkbox" 
            value="" 
            id={`value-${value}`} 
            onClick={handleClick}
        />
        <label className="inline-block text-gray-400 text-lg font-medium" htmlFor={`value-${value}`} >
            {value}
        </label>
  </div>
  )
}

export default CheckBox