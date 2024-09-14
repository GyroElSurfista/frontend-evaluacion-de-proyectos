import './CreateObjetive.css'
import Dots from './../assets/dots.svg'
import { useState } from 'react'
import { MultiSelect } from 'primereact/multiselect'

export const CreateObjetive = () => {
	const [selectedCities, setSelectedCities] = useState(null)
	const cities = [
		{ name: 'New York', code: 'NY' },
		{ name: 'Rome', code: 'RM' },
		{ name: 'London', code: 'LDN' },
		{ name: 'Istanbul', code: 'IST' },
		{ name: 'Paris', code: 'PRS' },
	]

	return (
		<div className="createObjetive">
			<p className="textObjetive">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolore molestias eos officia excepturi vitae itaque, eveniet
				saepe eaque fuga quo nobis quasi perferendis culpa quae unde rem, nostrum quod. Lorem ipsum dolor, sit amet consectetur adipisicing
				elit. Ad, laudantium cupiditate. Quis natus excepturi nulla debitis voluptas adipisci magnam enim error odit velit nam voluptatem,
				eum dicta id qui. Quaerat.
			</p>
			<div className="boxObjetive">
				<MultiSelect
					value={selectedCities}
					onChange={(e) => setSelectedCities(e.value)}
					options={cities}
					optionLabel="name"
					placeholder="Seleccionar Actividad"
					maxSelectedLabels={3}
					className="w-full md:w-20rem"
				/>
				<img className="m-2 ml-8" src={Dots} alt="" />
			</div>
		</div>
	)
}
