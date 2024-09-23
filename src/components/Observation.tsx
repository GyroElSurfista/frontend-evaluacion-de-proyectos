// Observation.tsx
import Dots from './../assets/dots.svg'
import { useState } from 'react'
import { MultiSelect } from 'primereact/multiselect'

interface Activity {
	id: number
	name: string
}

interface ObservationProps {
	observation: string
	activities: Activity[]
	onSave: (observation: string, activities: Activity[]) => void
}

export const Observation: React.FC<ObservationProps> = ({ observation, activities, onSave }) => {
	const [selectedActivities, setSelectedActivities] = useState<Activity[] | null>(null)
	const [editableObservation, setEditableObservation] = useState<string>(observation)
	const [error, setError] = useState<string>('')

	// Manejar los cambios en el textarea y validar longitud
	const handleObservationChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const newValue = e.target.value
		if (newValue.length <= 256) {
			setEditableObservation(newValue)
			setError('') // Limpiar error si la longitud es válida
		} else {
			setError('La observación no puede exceder los 256 caracteres.')
		}
	}

	// Manejar la acción de guardar
	const handleSave = () => {
		if (!editableObservation.trim()) {
			setError('La observación no puede estar vacía.')
		} else if (!selectedActivities || selectedActivities.length === 0) {
			setError('Debe seleccionar al menos una actividad.')
		} else {
			onSave(editableObservation, selectedActivities)
		}
	}

	return (
		<div>
			<div className="flex border border-black rounded-lg w-full h-[100px] my-5">
				<textarea
					className="flex justify-end text-left mx-2 w-full resize-none h-full border-none rounded-lg focus:margin focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					value={editableObservation}
					onChange={handleObservationChange}
				/>
				<div className="ml-auto flex items-center my-[2.1%] mx-4">
					<MultiSelect
						value={selectedActivities}
						onChange={(e) => setSelectedActivities(e.value)}
						options={activities}
						optionLabel="name"
						placeholder="Seleccionar Actividad"
						maxSelectedLabels={3}
						className="w-full md:w-20rem"
					/>
					<img className="m-2 ml-8" src={Dots} alt="Dots icon" />
				</div>
			</div>
			{error && <p className="text-red-500">{error}</p>}
			<button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">
				Guardar
			</button>
		</div>
	)
}
