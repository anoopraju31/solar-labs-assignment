import { useEffect, useState } from "react"
import { PrimaryCard, YearCard } from "./components/import"
import { years } from "./Variables/util"

const App = () => {
	const [checkYear, setCheckYear] = useState([])

	useEffect(() => {
		const getYears = () => {
			const l = years.length
			const boolYears = []
			
			for (let i = 0; i < l; i++)
				boolYears.push(false)

			setCheckYear(boolYears)
		}

		getYears()
	}, [])
	
    return (
    	<div className="bg-gray-200 h-screen overflow-y-auto">
    		<div className="w-11/12 container mx-auto grid grid-cols-1">
				<header>
					<h1 className='py-10 text-gray-300 text-center md:text-left text-5xl md:text-6xl font-medium'> Solar Labs Assignment </h1>
				</header>

				<PrimaryCard years={years} changeCheckYear={setCheckYear} />
				
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
					{
						years?.map((year, idx) => <YearCard key={idx} visiblity={checkYear[idx]} value={year}  />)
					}
				</div>
			</div>
		</div>
    )
}

export default App