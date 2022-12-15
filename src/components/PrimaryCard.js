import React from 'react'
import CheckBox from './CheckBox'

const PrimaryCard = ({years, changeCheckYear}) => {
  return (
    <div className='p-6 mb-6 flex flex-col sm:flex-row justify-aroundtify- gap-6 bg-gray-100 border-1 border-white rounded-lg shadow-md'>
      {
        years?.map((year, idx) => <CheckBox key={idx} value={year} idx={idx} changeCheckYear={changeCheckYear} /> )
      }
    </div>
  )
}

export default PrimaryCard